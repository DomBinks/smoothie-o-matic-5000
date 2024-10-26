import time  # https://docs.python.org/fr/3/library/time.html
from adafruit_servokit import (
    ServoKit,
)  # https://circuitpython.readthedocs.io/projects/servokit/en/latest/
import RPi.GPIO as GPIO
import subprocess
from flask import Flask
from flask import Response

# Constants
nbPCAServo = 16
# Parameters
MIN_IMP = [
    500,
    500,
    500,
    500,
    500,
    500,
    500,
    500,
    500,
    500,
    500,
    500,
    500,
    500,
    500,
    500,
]
MAX_IMP = [
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,
]
MIN_ANG = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
MAX_ANG = [
    180,
    180,
    180,
    180,
    180,
    180,
    180,
    180,
    180,
    180,
    180,
    180,
    180,
    180,
    180,
    180,
]
# Objects

app = Flask(__name__)


disabled = False

pca = ServoKit(channels=16)


# function init
def init():
    GPIO.setwarnings(False)
    GPIO.setup(17, GPIO.OUT)
    for i in range(nbPCAServo):
        pca.servo[i].set_pulse_width_range(MIN_IMP[i], MAX_IMP[i])


# function main s
@app.route("/smoothie", methods=["POST"])
def main():
    triggerDispenser()
    time.sleep(1)
    # turnOnPlug()
    # time.sleep(1)
    turnOnPump()
    time.sleep(1)
    turnOnPlug()
    return Response(status=204)


# function pcaScenario
@app.route("/add_fruit", methods=["POST"])
def triggerDispenser():
    """Scenario to test servo"""
    for i in range(1):
        pca.servo[i].set_pulse_width_range(MIN_IMP[i], MAX_IMP[i])
    i = 0
    global disabled
    if disabled:
        return 0
    disabled = True

    # print("Setting servo to min\n")
    # pca.servo[i].angle = MIN_ANG[i]
    # time.sleep(1)
    print("Setting servo to max\n")
    pca.servo[i].angle = MAX_ANG[i]
    time.sleep(3)
    print("Setting servo to min\n")
    pca.servo[i].angle = MIN_ANG[i]
    time.sleep(3)
    # pca.servo[i].angle=None #disable channel
    disabled = False
    return Response(status=204)


@app.route("/add_juice", methods=["POST"])
def turnOnPump():
    print("PUMP ON")
    GPIO.setup(17, GPIO.OUT)
    global disabled
    if disabled:
        return 0
    disabled = True
    GPIO.output(17, True)
    time.sleep(3)
    print("PUMP OFF")
    GPIO.output(17, False)
    disabled = False
    return Response(status=204)


@app.route("/blend", methods=["POST"])
def turnOnPlug():
    global disabled
    if disabled:
        return 0
    disabled = True
    print("BLEND BLEND BLEND")
    subprocess.call(
        [
            "curl",
            "-d",
            '"true"',
            "-X",
            "POST",
            "192.168.0.13/switch/localbytes_plug_pm_d5f04e/turn_on",
        ]
    )
    time.sleep(10)
    subprocess.call(
        [
            "curl",
            "-d",
            '"true"',
            "-X",
            "POST",
            "192.168.0.13/switch/localbytes_plug_pm_d5f04e/turn_off",
        ]
    )
    disabled = False
    print("NO MORE BLEND")
    return Response(status=204)


#
@app.route("/")
def hello():
    return "<p>hello world<\p>"


if __name__ == "__main__":
    init()
    main()
    app.run()
    # init()
    # main()
