import React from 'react';
import { Bars, Nav, NavIcon } from './NavbarElements';
import { NavLink } from 'react-router-dom';


function NavBar({ toggle }) {
	return (
		<>
			<Nav>
				{/* <NavLink to='/'>Pizza</NavLink> */}
				<NavIcon onClick={toggle}>
				<NavLink to='/'>Menu</NavLink>
				<NavLink to='/about'>About Us</NavLink>
				<NavLink to='/faq'>Faq</NavLink>
					<Bars />
				</NavIcon>
			</Nav>
		</>
	);
}

export default NavBar;
