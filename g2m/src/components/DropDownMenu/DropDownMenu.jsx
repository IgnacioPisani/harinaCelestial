import React from 'react';
import { NavLink } from '../Navbar/NavbarElements';

const DropdownMenu = ({ isOpen, options }) => {
  return (
    <div
      style={{
        display: isOpen ? 'block' : 'none',
        position: 'absolute',
        backgroundColor: '#FD8B06',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        marginTop: '10px',
        borderRadius: '6px',
        zIndex: 10,
        left: '0', // Alinea el menú desplegable con el padre
        padding: '10px 0', // Añade espacio para que las opciones no estén pegadas
      }}
    >
      {options.map((option, index) => (
        <NavLink
          key={index}
          to={option.path}
          style={{
            display: 'block',
            padding: '10px 20px',
            textAlign: 'left',
          }}
        >
          {option.label}
        </NavLink>
      ))}
    </div>
  );
};

export default DropdownMenu;
