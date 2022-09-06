import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';

import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar bg="bg-primary" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>MQ Chats</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/" element={<HomeScreen />}></Route>

              <Route path="/signup" element={<SignupScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights Reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
export default App;
