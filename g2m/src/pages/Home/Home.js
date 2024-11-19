import Hero from '../../components/Hero/Hero';
import Products from '../../components/Products/Products';
import Brands from '../../components/Brands/Brands';
import Feature from '../../components/Feature/Feature';
import { productData} from '../../components/Products/data';
import { brandData } from '../../components/Brands/data';

function Home() {
    return (
      <>
        <Hero />
        <Products heading='Productos Industriales' data={productData} />
        <Feature />
        <Brands heading='Nuestras Marcas' brands={brandData} />
      </>
    );
}

export default Home;
