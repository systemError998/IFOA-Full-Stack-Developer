import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom'

import './Components.css';

function BasicExample() {
  return (
    <Navbar expand="lg" className="myNavbar">
      <Container>
      <img
              alt=""
              src="logo.png"
              width="80"
              height="80"
              className="d-inline-block align-top"
            />
        <Navbar.Brand href="#home" className='navLink'>Rogweather</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/weather" className='nav-link'>Weather</Link>
            <Link to="/about" className='nav-link'>About</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
