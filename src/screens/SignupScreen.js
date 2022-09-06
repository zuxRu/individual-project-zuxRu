import Axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../util';

import login from '../services/login';

export default function SignupScreen() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      login.login({ username }).then((data) => {
        console.log(data);
        if (data.status !== 'success') {
          toast.error(data.status);
        } else {
          localStorage.setItem('userInfo', JSON.stringify(data));
          navigate('/');
        }
      });
    } catch (err) {
      toast.error(getError(err));
    }
  };

  // useEffect(() => {
  //   if (userInfo) {
  //     navigate(redirect);
  //   }
  // }, [navigate, redirect, userInfo]);

  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <h1 className="my-3">Sign Up</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>
        {/* 
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
          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group> */}
        {/* </Form.Group> */}
        <div className="mb-3">
          <Button type="submit">Sign Up</Button>
        </div>
        <div className="mb-3">
          Already have an account? <Link to={`/signin`}>Sign-In</Link>
        </div>
      </Form>
    </Container>
  );
}

// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Axios from 'axios';
// //vaucluseNews, newsagency

// import { Helmet } from 'react-helmet-async';
// import { useLocation, Link, useNavigate } from 'react-router-dom';
// import { useContext, useEffect, useState } from 'react';
// import { Store } from '../Store';
// import { toast } from 'react-toastify';
// import { getError } from '../util';

// export default function SigninScreen() {
//   const navigate = useNavigate();
//   const { search } = useLocation;
//   // const redirectUrl = new URLSearchParams(search).get('redirect');
//   // const redirect = redirectUrl ? redirectUrl : '/';
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { state, dispatch: ctxDispatch } = useContext(Store);
//   const { userInfo } = state;
//   const submitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await Axios.post('/api/users/signup', {
//         email,
//         password,
//       });
//       ctxDispatch({ type: 'USER_SIGNUP', payload: data });
//       localStorage.setItem('userInfo', JSON.stringify(data));
//     } catch (err) {
//       toast.error(getError(err));
//       //  toast.error(getError(err));
//     }
//   };

//   return (
//     <Container className="small-container">
//       <Helmet>
//         <title>Sign In</title>
//       </Helmet>
//       <h1 className="my-3">Sign Up</h1>
//       <Form onSubmit={submitHandler}>
//         <Form.Group className="mb-3" controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             required
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             required
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>

//         <div className="mb-3">
//           <Button type="submit">Sign Up</Button>
//         </div>
//         <div className="mb-3">
//           Already have an account? <Link to={`/signin`}>Sign In</Link>
//         </div>
//       </Form>
//     </Container>
//   );
// }
