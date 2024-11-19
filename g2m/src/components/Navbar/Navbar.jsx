import React, { useState } from 'react';
import { Nav, NavIcon, Logo, NavLink, MobileIcon, NavMenu, DropdownMenuWrapper } from './NavbarElements';
import { FaBars, FaChevronDown, FaTimes } from 'react-icons/fa';
import DropdownMenu from '../DropDownMenu/DropDownMenu';

function NavBar({ toggle }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (dropdown) =>
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Nav>
      <Logo />

      {/* Botón de hamburguesa para móviles */}
      <MobileIcon onClick={handleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </MobileIcon>

      <NavMenu isOpen={isMobileMenuOpen}>
        <NavIcon>
          <NavLink to="/">Menu</NavLink>
        </NavIcon>
        <NavIcon>
          <NavLink to="/about">Sobre Nosotros</NavLink>
        </NavIcon>
        <NavIcon>
          <NavLink to="/faq">Preguntas Frecuentes</NavLink>
        </NavIcon>
        <DropdownMenuWrapper
          onMouseEnter={() => toggleDropdown('contact')}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <NavLink to="/">
            Contactos <FaChevronDown style={{ marginLeft: '5px', marginTop: '8px' }} />
          </NavLink>
          <DropdownMenu
            isOpen={activeDropdown === 'contact'}
            options={[
              {
                label: 'Whatsapp',
                path: 'https://api.whatsapp.com/send/?phone=5493515165078&text&type=phone_number&app_absent=0',
              },
              { label: 'Instagram', path: 'https://www.instagram.com/g2m.celestial/' },
            ]}
          />
        </DropdownMenuWrapper>
        <DropdownMenuWrapper
          onMouseEnter={() => toggleDropdown('brands')}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <NavLink to="/">
            Marcas <FaChevronDown style={{ marginLeft: '5px', marginTop: '8px' }} />
          </NavLink>
          <DropdownMenu
            isOpen={activeDropdown === 'brands'}
            options={[
              { label: 'Celestial', path: '/brands/celestial' },
              { label: 'Fidelli', path: '/brands/fidelli' },
              { label: 'Capannoli', path: '/brands/capannoli' },
            ]}
          />
        </DropdownMenuWrapper>
      </NavMenu>
    </Nav>
  );
}

export default NavBar;
