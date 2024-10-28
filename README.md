# smoothie-o-matic-5000

### Automatic smoothie maker using a blender and miscellaneous electronics

- Run website UI with *npm run dev* in the website/smoothie-o-matic-5000 folder
- Run hardware server with *flask --app blenderControl.py --host=0.0.0.0*

---

| Contributors: |
|----------------|
| [Dom Binks](https://github.com/DomBinks) |
| [Alice Gowler](https://github.com/A1ic3-g) |
| [Adam Drummond](https://github.com/AdamDIOM) |
| [Matthew Houghton](https://github.com/matty2048) |


# Project Writeup ([DevPost](https://devpost.com/software/smoothie-o-matic-5000))

## 💡 Inspiration
Between the team, we had a strong desire to create nutritionally friendly drinks, with minimal effort for ourselves. And being technologists, we weren’t going to just pour liquid and fruit into a blender and press on; we wanted to go as efficient as we could!

Also, we had a blender and wanted to use it in a project, and this seemed like the perfect opportunity!

## 👷‍♂️ What it does

### 📑 TL;DR
Utilising a fruit containment hopper (cup with fruit in it), a juice-o-matic™️ (pump), and a blend-o-matic 5000™️ (blender and smart plug), all balanced on a ballast container, alongside an intranet server and remote frontend, we created healthy and fun smoothies for everyone at HackNotts 24 to enjoy!
	
### 🔌  Components
This project incorporated multiple hardware components, alongside software and intranet-enabled devices.

#### 🍎 Fruit Containement Hopper
_Put simply, a paper cup with fruit in it, attached to a servo_

This component had many variations before settling on the final design. We attempted (or at very least, planned a prototype for) a trapdoor-base; bottles with propellors inside, utilising gravity to force the fruit out; and a rotating base idea. Ultimately, we settled on a rotating cup that tips the frozen fruit into a large funnel out of the top of the blender.

Matt produced the final design concept, pioneering the pouring of fruit from the hopper into the blender with little to no spills. “it works; it occasionally flings fruit everywhere” – Matt.

#### 🧃Juice-o-matic™️
_Put simply, a pump with pipes on it_

The Juice-o-matic is a a food-safe brewing pump with multiple lengths of food-safe flexible silicon piping attached, with one end leading to a juice bottle and the other end to the blender lid. This component presented the strongest physics challenge (and, arguably with the required yoga, physical challenge), as we had to determine how to get the liquids to go from container, through the pump, and then into the blender, all **only** operating when powered.

Adam tackled the physics (clearly, he should be an engineer, not an advanced computer scientist) of the Juice-o-matic, and likes to think that without that part the project would never have got off the ground (because the pump pushes juice up).

#### 🔪Blend-o-matic 5000™️
_Put simply, a blender plugged into a smart plug_

Our Blend-o-matic 5000™️ is a blender (obviously) which is always turned on, plugged into a smart plug in an extension lead. There’s not really much more to it. There’s a large paper cup funnel glued to the top of the lid so that the Fruit Containment Hopper can tip the fruit into the blender ~~all~~ most of the time.

#### 🧱 Ballast Container
_Put simply, a cardboard box with rocks inside_

Using rocks to weigh down a solid cardboard box, the ballast container is a rock-solid base for the Fruit Containment Hopper and the brain of the Smoothie-o-matic 5000™️ to sit atop without any potential forces acting upon them – other than those we control ourselves.

#### 🧠 The Brain
_Put simply, a Raspberry Pi, a breadboard, and a relay_

The brain is the key controller of the Smoothie-o-matic 5000™️. Without this, there would be nothing. And with it, there is everything. Our brain commands the Fruit Containment Hopper and the Juice-o-matic™️ over hardwired data pipes and controls the Blend-o-matic™️ via data pipes and radioactive* data waves. A fun fact about The Brain, is that it is ‘juice cooled’, an improvement on classic water cooling. It does not, however send your drink preferences to the CCP, but with potential future improvements, who knows where this brain will evolve to. Have you seen what happened to ChatGPT?
*not actually radioactive, just radio, aka Wi-Fi.

#### 🖥️ The Interface
_Put simply, how you request a smoothie_

The interface communicates between the brain and you. You tell the interface what you want – fruit, juice, blend or smoothie – and it will tell the brain to do what you say. 

## ❓ How we built it
Mostly with blood (well, berry juice), sweat (apple juice) and tears (actual).

### 💾 Technologies:
This project contained multiple technologies varying from electric to basic
-	IoT devices
-	React-TypeScript frontend controller
-	REST API
-	Flask and Python
-	Raspberry Pi
-	Electricity
-	Plumbing
-	Tape (lots of it)
-	Rocks
-	Cardboard boxes

## ⚡ Challenges we ran into
At the end of the day, this project went very smooth for us, with limited challenges other than the ones below.
### ⛽️ Physics.
The engineering struggle to get juice from a container, through the Juice-o-matic™️ was one of our greatest struggles. We tried having the bottle high, the bottle low, the pump high (big fail), the pump low (success) and then played a bit of yoga with the output pipe from the pump to get a working system.

Ultimately, we succeeded in understanding this, and successfully levelled everything correctly, in the following order from bottom to top:
- Pump (very bottom)
- Juice container
- Blender
- Top of the pipe (very top)

### 🛜 Networking
We initially struggled to combine the brain and the frontend, struggling to connect eduroam to the middle-man router. We ultimately determined, however, after many hours of struggling, thanks to some input from Holly at Hackathons UK, that out of the interest of security that the blender should run on a local intranet instead, which solved all our issues (except for remote blending, but we determined that was too much of a health-and-safety issue for this hackathon).

## 🏆 Accomplishments that we're proud of
- It works!
- The friends we made along the way
- Finger loss count being less than or equal to 1
- Getting a decent night’s sleep (well, some of the team)

## 👨‍🎓 What we learned
- Plumbing – how water works; physics; water displacement
- Blenders are loud (Adam had the right idea bringing hearing protection)
- How to make holes in plastic bottle lids/blender lids and paper cups
- Flask (the programming, not a bottle)
- How to enable I2C on a Raspberry Pi
- How to successfully make a handsfree smoothie

## 💰 Cost Analysis
_Worth it_
### 💷 Actual Costs?
- Blender £5
- Relays £5.99
- Servo driver board £5.99
- Servos £15.99
- Tubing £8.99
- Pump £15
- Raspberry pi 4B 2GB £43.20
- Router ~£14,000 (free year’s rent included)
As you can see, the blender was in fact the cheapest element of this project, but the most important.

## 📅 What's next for the Smoothie-o-matic 5000?
-	Alexa skill enablement
-	Multi-fruit options
-	Multi-juice options
-	Ability to load multiple smoothies worth of fruit
-	Automated cleaning
-	Automated export of smoothie
-	Automated cup dispenser
