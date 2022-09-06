import { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

import convos from '../services/convos';

export default function HomeScreen() {
  let userInfo = localStorage.getItem('userInfo');
  const navigate = useNavigate();

  const [newConvos, setConvos] = useState('');
  const [co, setCo] = useState([]);
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    if (userInfo == null) {
      navigate('/signin');
    }
    convos.getConvos().then((res) => {
      setCo(res);
    });
    const interval = setInterval(() => setTime(Date.now()), 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  console.log('temp ' + co);

  const signOut = () => {
    localStorage.removeItem('userInfo');

    navigate('/signup');
  };
  const newConvoHandler = async (e) => {
    e.preventDefault();
    try {
      convos.createConvo(newConvos).then((data) => {});
    } catch {}
  };
  const printout = () => {
    if (co.length > 0) {
      return JSON.stringify(co[0].title);
    } else {
      return 'Not Quite ready yet';
    }
  };

  console.log(printout());
  return (
    <Container className="small-container">
      <Helmet>MQ Messages</Helmet>
      <h1>Messages</h1>

      <Form onSubmit={newConvoHandler}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>New Convosation</Form.Label>
          <Form.Control onChange={(e) => setConvos(e.target.value)} required />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Create New Convosation</Button>
        </div>
      </Form>
      <Button onClick={signOut}>Sign Out</Button>

      <Row>
        <Col sm={4}>
          <div className="message-short">
            <h2>Convosations -should refresh every 5 seconds</h2>
            {co.map((elm) => (
              <Col key={elm.id} sm={6} md={4} lg={3} className="mb-3">
                <p> {elm.title}</p>
              </Col>
            ))}
          </div>
        </Col>
        <Col sm={8}>
          <p>Actual Selected Messages</p>
        </Col>
      </Row>
    </Container>
  );
}
