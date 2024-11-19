import React, { useState } from 'react';
import { Nav, NavIcon, Logo, NavLink } from './NavbarElements';
import { FaChevronDown } from 'react-icons/fa';
import DropdownMenu from '../DropDownMenu/DropDownMenu'; // Importamos el nuevo componente

function NavBar({ toggle }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) =>
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);

  return (
    <Nav>
      <Logo />
      <NavIcon onClick={toggle}>
        <NavLink to="/">Menu</NavLink>
      </NavIcon>

      <NavIcon>
        <NavLink to="/about">Sobre Nosotros</NavLink>
      </NavIcon>

      <NavIcon>
        <NavLink to="/faq">Preguntas Frecuentes</NavLink>
      </NavIcon>

      <NavIcon
        onMouseEnter={() => toggleDropdown('contact')}
        onMouseLeave={() => setActiveDropdown(null)}
        style={{ position: 'relative' }}
      >
        <NavLink to="/">
          Contactos <FaChevronDown style={{ marginLeft: '5px',marginTop: '8px' }} />
        </NavLink>
        <DropdownMenu
          isOpen={activeDropdown === 'contact'}
          options={[
            { label: 'Whatsapp', path: 'https://api.whatsapp.com/send/?phone=5493515165078&text&type=phone_number&app_absent=0' },
            { label: 'Instagram', path: 'https://www.instagram.com/g2m.celestial/' },
          ]}
        />
      </NavIcon>

      <NavIcon
        onMouseEnter={() => toggleDropdown('brands')}
        onMouseLeave={() => setActiveDropdown(null)}
        style={{ position: 'relative' }}
      >
        <NavLink to="/">
          Marcas <FaChevronDown style={{ marginLeft: '5px',marginTop: '8px'  }} />
        </NavLink>
        <DropdownMenu
          isOpen={activeDropdown === 'brands'}
          options={[
            { label: 'Celestial', path: '/brands/celestial' },
            { label: 'Fidelli', path: '/brands/fidelli' },
            { label: 'Campagnoli', path: '/brands/campagnoli' },
          ]}
        />
      </NavIcon>
    </Nav>
  );
}

export default NavBar;
