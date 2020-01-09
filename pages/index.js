import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Manifest from '../components/Manifeste-Home/Manifest'
import Carousel from '../components/Carousel/Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Partners from '../components/partners/Partners';
import Events from '../components/events/Events';
import Ressources from '../components/ressources/Ressources';

const Home = ({ partners, events, ressources }) => (
  <div>
    <Layout>
      <article>
        <h1>Bienvenue sur La Sauce Numérique !</h1>
        <Carousel />
      </article>
      <Manifest />
      <div className="h1-partner">
        <h1>Nos Partenaires</h1>
      </div>
      <Partners partners={partners} />
      <Events events={events} />
      <Ressources ressources={ressources}/>
    </Layout>
  </div>
);

Home.getInitialProps = async () => {
  const [partnersRes, eventsRes, ressourcesRes] = await Promise.all([
    fetch('http://localhost:5000/api/v1/partners'),
    fetch('https://www.eventbriteapi.com/v3/users/me/events/?token=EQCXFCP563PTYQ5DE2TD&page_size=3&order_by=start_desc'),
    fetch('http://localhost:5000/api/v1/ressources'),
  ]);
  const partnersData = await partnersRes.json();
  const eventsData = await eventsRes.json();
  const ressourcesData = await ressourcesRes.json();


  return {
    partners: partnersData,
    events: eventsData,
    ressources: ressourcesData,
  };
};

export default Home;
