import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import { GlobalStyle } from './globalStyles';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Hero />
			<Products heading='Productos industriales' data={productData} />
			<Feature />
			<Products heading='Productos de consumo masivo' data={productDataTwo} />
			<Footer />
		</Router>
	);
}

export default App;
