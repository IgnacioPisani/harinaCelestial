import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Home from './pages/Home/Home'; // Importa Home desde su archivo correspondiente
import Footer from './components/Footer/Footer';
import AboutUs from './pages/AboutUs/AboutUs';
import Faq from './pages/Faq/Faq';
import NavBar from './components/Navbar/Navbar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import React, { useState } from 'react';

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<Router>
			  <ScrollToTop />
			<GlobalStyle />
			<NavBar toggle={toggle} />
			<Routes>
				{/* Ruta principal con el componente Home */}
				<Route exact path="/" element={<Home />} />
				
				{/* Otra ruta sin los elementos de Home */}
				<Route path="/about" element={<AboutUs/>} />

				<Route path="/faq" element={<Faq/>} />
				
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
