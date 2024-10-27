import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Home from './pages/Home/Home'; // Importa Home desde su archivo correspondiente
import Footer from './components/Footer/Footer';
import AboutUs from './pages/AboutUs/AboutUs';
<<<<<<< HEAD
import Faq from './pages/Faq/Faq';

=======
import NavBar from './components/Navbar/Navbar';
import React, { useState } from 'react';
>>>>>>> 2e6e1880cea9f32a7ec235940b1ae64f69c67ebd

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<Router>
			<GlobalStyle />
			<NavBar toggle={toggle} />
			<Routes>
				{/* Ruta principal con el componente Home */}
				<Route exact path="/" element={<Home />} />
				
				{/* Otra ruta sin los elementos de Home */}
				<Route path="/about" element={<AboutUs/>} />

				<Route path="/faq" element={<AboutUs/>} />
				
				{/* Puedes agregar más rutas aquí */}

				<Route path="/Faq" element={<Faq/>} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
