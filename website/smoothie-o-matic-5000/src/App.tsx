import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Option } from './common/option'
import { Button } from 'react-bootstrap';

function App() {
  const [history, setHistory] = useState(new Array<string>);
  let addHistory = (item: string) => () => setHistory([item, ...history]);

  return (
    <>
      <div className='page'>
        <Container>
          <Row className='header'>
              <h1>Smoothie-o-matic 5000</h1>
          </Row>
          <Row>
            <Col xs={12} md={6}> 
              <div className='outer'>
                <Option name='Add fruit' endpoint='/add_fruit'
                  addHistory={addHistory('Add fruit')}/>
                <Option name='Add juice' endpoint='/add_juice'
                  addHistory={addHistory('Add juice')}/>
                <Option name='Blend' endpoint='/blend'
                  addHistory={addHistory('Blend')}/>
                <Option name='Smoothie' endpoint='/smoothie'
                  addHistory={addHistory('Smoothie')}/>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className='outer'>
                <div className='option'>
                  <h1>History</h1>
                  <Button variant="success" size="lg"
                    onClick={() => setHistory([])}>
                    CLEAR
                  </Button>
                </div>
                <div className='history'>
                  {history.map(item => {return (
                    <>
                      <h2 className={"history-item " + item}><span className='history-item-text'>{item}</span></h2>
                    </>
                  )})}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default App
