import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Home from './pages/Home/Home'; // Importa Home desde su archivo correspondiente
import Footer from './components/Footer/Footer';
import AboutUs from './pages/AboutUs/AboutUs';
import Faq from './pages/Faq/Faq';
import NavBar from './components/Navbar/Navbar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import React, { useState } from 'react';
import ProductsByBrand from './components/ProductsByBrand/ProductsByBrand';
import { data } from './components/ProductsByBrand/data';


function App() {
	const [isOpen, setIsOpen] = useState(false);
  
	const toggle = () => {
	  setIsOpen(!isOpen);
	};

	const getBrandData = (brandName) => data.find((brand) => brand.name.toLowerCase() === brandName.toLowerCase());
	
  
	return (
	  <Router>
		<ScrollToTop />
		<GlobalStyle />
		<div className="app-container">
		  <NavBar toggle={toggle} />
		  <main className="main-content">
			<Routes>
			  <Route exact path="/" element={<Home />} />
			  <Route path="/about" element={<AboutUs />} />
			  <Route path="/faq" element={<Faq />} />
			  <Route
              path="/brands/capannoli"
              element={<ProductsByBrand data={getBrandData('Capannoli')} />}
            />
            <Route
              path="/brands/fidelli"
              element={<ProductsByBrand data={getBrandData('Fidelli')} />}
            />
			</Routes>
		  </main>
		  <Footer />
		</div>
	  </Router>
	);
  }
  
export default App;
