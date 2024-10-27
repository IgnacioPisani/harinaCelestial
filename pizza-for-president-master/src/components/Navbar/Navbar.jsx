import React from 'react';
import { Bars, Nav, NavIcon, Logo, NavLink } from './NavbarElements';



function NavBar({ toggle }) {
	return (
		<>
			<Nav>
				<Logo />
				
				{/* <NavLink to='/'>Pizza</NavLink> */}
				
				<NavIcon onClick={toggle}>
				<NavLink to='/'>Menu</NavLink>
				</NavIcon>
				
				<NavIcon >
				<NavLink to='/about'>Sobre Nosotros</NavLink>
				</NavIcon>

				<NavIcon >
				<NavLink to='/faq'>Preguntas Frecuentes</NavLink>
				</NavIcon>
				
				{/* <Bars /> */}
			</Nav>
		</>
	);
}

export default NavBar;

// function Navbar() {
// 	return (
// 	  <nav style={{ backgroundColor: 'orange', padding: '10px' }}>
// 		<ul style={{ listStyleType: 'none', display: 'flex', gap: '20px', margin: 0 }}>
// 		  <li><a href="#inicio" style={{ color: 'white', textDecoration: 'none' }}>Inicio</a></li>
// 		  <li><a href="#marcas" style={{ color: 'white', textDecoration: 'none' }}>Marcas</a></li>
// 		  <li><a href="#nosotros" style={{ color: 'white', textDecoration: 'none' }}>Nosotros</a></li>
// 		</ul>
// 	  </nav>
// 	);
//   }
  
//   export default Navbar;
