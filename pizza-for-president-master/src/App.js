import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Brands from './components/Brands/Brands';
import { GlobalStyle } from './globalStyles';
import { productData, productDataTwo } from './components/Products/data';
import { brandData } from './components/Brands/data';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';


function App() {
	return (
		<Router>
			<GlobalStyle />
			<Hero />
			<Products heading='Productos Industriales' data={productData} />
			<Feature />
			<Brands heading='Nuestras Marcas' brands={brandData} />
			<Footer />
		</Router>
	);
}

export default App;
