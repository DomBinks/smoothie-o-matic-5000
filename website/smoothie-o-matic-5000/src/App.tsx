import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Header } from './common/header'
import { Option } from './common/option'
import { History } from './history/history'

function App() {
  const [history, setHistory] = useState(new Array<string>);
  let addHistory = (item: string) => () => setHistory([...history,item]);

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <Option name='Test1' endpoint='/test1'
              addHistory={addHistory('Test1')}/>
            <Option name='Test2' endpoint='/test2'
              addHistory={addHistory('Test2')}/>
            <Option name='Test3' endpoint='/test3'
              addHistory={addHistory('Test3')}/>
          </Col>
          <Col>
            <History />
            {history.map(item => {return (
              <>
                <h2>{item}</h2>
              </>
            )})}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
