import Layout from '../components/Layout';
import Carousel from '../components/Carousel/Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => (
  <div>
    <Layout>
      <article>
        <Carousel />
        <h1>Bienvenue sur La Sauce Numérique !</h1>
      </article>
    </Layout>
  </div>
);

export default Home;
