import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import logo from './Logo.png';

function NavBar() {
  return (
    <>
         <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/"  className="d-flex align-items-center"><img
    src={logo}
    alt="Domus Construction"
    height="30"
    className="d-inline-block align-top"
  /><i>Domus Construction</i></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="/">Kreu</Nav.Link>
            <Nav.Link href="/rreth_nesh">Rreth Nesh</Nav.Link>
            <Nav.Link href="/projektet_tona">Projekte</Nav.Link>
            <Nav.Link href="/bej_karriere_me_ne">Karriera</Nav.Link>
            <Nav.Link href="/na_kontaktoni">Kontakt</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </>
  );
}

export default NavBar;