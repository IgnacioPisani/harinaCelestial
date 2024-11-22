import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../images/logo-g2m/g2m-transparente.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarResponsive.css'; // Asegúrate de importar el archivo CSS

function NavbarResponsive() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#fd8b06' }} className="fixed-top custom-navbar">
      <Container fluid className="px-0">
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src={Logo}
            alt="Logo"
            className="navbar-logo"
          />
        </Navbar.Brand>

        {/* Toggle para móviles */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="navbar-link">Inicio</Nav.Link>
            <Nav.Link href="/faq" className="navbar-link">Preguntas Frecuentes</Nav.Link>
            <Nav.Link href="/about" className="navbar-link">Sobre Nosotros</Nav.Link>

            <NavDropdown title={<span className="navbar-link">Marcas</span>} id="navbarScrollingDropdown">
              <NavDropdown.Item href="/brands/capannoli" className="navbar-item">Capannoli</NavDropdown.Item>
              <NavDropdown.Item href="/brands/celestial" className="navbar-item">Celestial</NavDropdown.Item>
              <NavDropdown.Item href="/brands/fidelli" className="navbar-item">Fidelli</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<span className="navbar-link">Contactos</span>} id="navbarScrollingDropdown">
              <NavDropdown.Item href="https://api.whatsapp.com/send/?phone=5493515165078&text&type=phone_number&app_absent=0" className="navbar-item" target="_blank" rel="noopener noreferrer">Whatsapp</NavDropdown.Item>
              <NavDropdown.Item href="https://www.instagram.com/g2m.celestial/" className="navbar-item" target="_blank" rel="noopener noreferrer">Instagram</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarResponsive;
