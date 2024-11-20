import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../images/logo-g2m/g2m-transparente.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarResponsive.css'; // Asegúrate de importar el archivo CSS

function NavbarResponsive() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#fd8b06' }} className="sticky-top">
      <Container fluid className="px-0">
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src={Logo}
            alt="Logo"
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '15px',
              paddingBottom: '15px',
              width: '80px',
              height: 'auto',
            }}
          />
        </Navbar.Brand>

        {/* Toggle para móviles */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Alineación a la izquierda para los enlaces */}
          <Nav className="me-auto">
            {/* Enlaces normales con mayor espacio entre ellos */}
            <Nav.Link href="/" style={{ color: '#fff', fontWeight: 'bold', fontSize: '30px', marginRight: '20px' }}>
              Inicio
            </Nav.Link>
            <Nav.Link href="/faq" style={{ color: '#fff', fontWeight: 'bold', fontSize: '30px', marginRight: '20px' }}>
              Preguntas Frecuentes
            </Nav.Link>
            <Nav.Link href="/about" style={{ color: '#fff', fontWeight: 'bold', fontSize: '30px', marginRight: '20px' }}>
              Sobre Nosotros
            </Nav.Link>

            {/* Dropdown Marcas */}
            <NavDropdown style={{ marginRight: '20px' }}
              title={<span style={{ color: '#fff', fontWeight: 'bold', fontSize: '30px' }}>Marcas</span>}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item
                href="/brands/capannoli"
                style={{ color: '#fff', fontWeight: 'bold', fontSize: '18px', backgroundColor: '#fd8b06' }}
              >
                Capannoli
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/brands/celestial"
                style={{ color: '#fff', fontWeight: 'bold', fontSize: '18px', backgroundColor: '#fd8b06' }}
              >
                Celestial
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/brands/fidelli"
                style={{ color: '#fff', fontWeight: 'bold', fontSize: '18px', backgroundColor: '#fd8b06' }}
              >
                Fidelli
              </NavDropdown.Item>
            </NavDropdown>

            {/* Dropdown Contactos */}
            <NavDropdown  style={{ marginRight: '20px' }}
              title={<span style={{ color: '#fff', fontWeight: 'bold', fontSize: '30px' }}>Contactos</span>}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item
                href="https://api.whatsapp.com/send/?phone=5493515165078&text&type=phone_number&app_absent=0"
                style={{ color: '#fff', fontWeight: 'bold', fontSize: '18px', backgroundColor: '#fd8b06' }}
              >
                Whatsapp
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.instagram.com/g2m.celestial/"
                style={{ color: '#fff', fontWeight: 'bold', fontSize: '18px', backgroundColor: '#fd8b06' }}
              >
                Instagram
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarResponsive;
