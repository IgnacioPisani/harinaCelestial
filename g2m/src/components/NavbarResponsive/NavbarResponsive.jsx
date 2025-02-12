import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../images/logo-g2m/g2m-transparente.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarResponsive.css';

function NavbarResponsive() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // Controla qué dropdown está abierto
  const closeTimeoutRef = useRef(null); // Referencia para controlar el temporizador
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
        };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const isNavbarScrolled = isScrolled || location.pathname !== '/';
  const handleDropdownClick = (id) => {
    clearTimeout(closeTimeoutRef.current); // Cancelar cualquier cierre pendiente
    setDropdownOpen((prev) => (prev === id ? null : id)); // Alterna entre abrir y cerrar
  };

  const handleMouseLeave = () => {
    // Inicia un temporizador para cerrar después de 2 segundos
    closeTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(null);
    }, 1000);
  };

  const handleMouseEnter = () => {
    // Cancela el temporizador si el mouse vuelve al menú
    clearTimeout(closeTimeoutRef.current);
  };

  return (
    <Navbar
      expand="lg"
      className={`fixed-top custom-navbar ${isNavbarScrolled ? 'navbar-scrolled' : ''}`}
    >
      <Container fluid className="px-0">
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img src={Logo} alt="Logo" className="navbar-logo" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-dark"/>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="navbar-link">Inicio</Nav.Link>

            {/* Dropdown para "Marcas" */}
            <NavDropdown
              title={<span className="navbar-link">Marcas</span>}
              id="navbarScrollingDropdown1"
              show={dropdownOpen === 'marcas'} // Controla si está abierto
              onClick={() => handleDropdownClick('marcas')} // Se abre/cierra al hacer click
              onMouseEnter={handleMouseEnter} // Cancela cierre automático
              onMouseLeave={handleMouseLeave} // Inicia cierre con delay
            >
              <NavDropdown.Item href="/brands/celestial" className="navbar-item">Celestial</NavDropdown.Item>
              <NavDropdown.Item href="/brands/capannoli" className="navbar-item">Capannoli</NavDropdown.Item>
              <NavDropdown.Item href="/brands/fidelli" className="navbar-item">Fidelli</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/faq" className="navbar-link">Preguntas Frecuentes</Nav.Link>
            <Nav.Link href="/about" className="navbar-link">Sobre Nosotros</Nav.Link>
            <Nav.Link href="https://forms.gle/W4ijzR7bp1ERAgPT7"    target="_blank"
                rel="noopener noreferrer" className="navbar-link">Contacto</Nav.Link>

            {/* Dropdown para "Contactos" */}
            <NavDropdown
              title={<span className="navbar-link">Redes</span>}
              id="navbarScrollingDropdown2"
              show={dropdownOpen === 'contactos'} // Controla si está abierto
              onClick={() => handleDropdownClick('contactos')} // Se abre/cierra al hacer click
              onMouseEnter={handleMouseEnter} // Cancela cierre automático
              onMouseLeave={handleMouseLeave} // Inicia cierre con delay
            >
              <NavDropdown.Item
                href="https://api.whatsapp.com/send/?phone=5493515165078&text&type=phone_number&app_absent=0"
                className="navbar-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                Whatsapp
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.instagram.com/g2m.celestial/"
                className="navbar-item"
                target="_blank"
                rel="noopener noreferrer"
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