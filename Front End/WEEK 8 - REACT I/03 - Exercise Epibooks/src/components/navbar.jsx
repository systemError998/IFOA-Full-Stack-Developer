import Nav from 'react-bootstrap/Nav';

function MyNavbar() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1" href='#'>Info</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2" href='#'>About</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default MyNavbar;