import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Axios from 'axios';
//vaucluseNews, newsagency

import { Helmet } from 'react-helmet-async';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import { getError } from '../util';

export default function SigninScreen() {
  const navigate = useNavigate();
  const { search } = useLocation;
  // const redirectUrl = new URLSearchParams(search).get('redirect');
  // const redirect = redirectUrl ? redirectUrl : '/';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post('/api/users/signin', {
        email,
        password,
      });
    } catch (err) {
      toast.error(getError(err));
      //  toast.error(getError(err));
    }
  };

  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className="my-3">Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <div className="mb-3">
          <Button type="submit">Sign In</Button>
        </div>
        <div className="mb-3">
          New Customer? <Link to={`/signup`}>Create an account</Link>
        </div>
      </Form>
    </Container>
  );
}
