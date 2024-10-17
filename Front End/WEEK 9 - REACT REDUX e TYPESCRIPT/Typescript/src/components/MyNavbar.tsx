import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'

function MyNavbar() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Link 
            to="/"
            className='nav-link'>
                Homepage
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link 
            to="/detail" 
            className='nav-link'>
                News Details
        </Link>
      </Nav.Item>
    </Nav>
  );
}

export default MyNavbar;