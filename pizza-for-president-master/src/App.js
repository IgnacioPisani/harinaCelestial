import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Home from './pages/Home/Home'; // Importa Home desde su archivo correspondiente
import Footer from './components/Footer/Footer';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Routes>
				{/* Ruta principal con el componente Home */}
				<Route exact path="/" element={<Home />} />
				
				{/* Otra ruta sin los elementos de Home */}
				<Route path="/about" element={<AboutUs/>} />
				
				{/* Puedes agregar más rutas aquí */}
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
