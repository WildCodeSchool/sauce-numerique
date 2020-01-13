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
        <Carousel />
      <Manifest />
      <div className="partner-container">
        <h1 className="title">
          Nos Partenaires
        </h1>
      <Partners partners={partners} />
      </div>
      <div className="event-container">
        <h1 className="title">
          Prochains Événements
        </h1>
      <Events events={events} />
      </div>
      <div className="ressource-container">
        <h1 className="title">
          Ressources
        </h1>
      <Ressources ressources={ressources}/>
      </div>
    </Layout>
    <style jsx>{`
      .title {
        margin: 0 auto;
        text-align: center;
        font-size: 3em;
        margin-bottom: 10px;
        text-transform: uppercase;
        font-weight: bold;
        color: black;
        text-shadow: 0 1px 2px rgba(black,.15);
      }
    `}
    </style>
  </div>
);
Home.getInitialProps = async () => {
  const [partnersRes, eventsRes, ressourcesRes] = await Promise.all([
    fetch('https://sauce-num-back.herokuapp.com/api/v1/partners'),
    fetch('https://www.eventbriteapi.com/v3/users/me/events/?token=EQCXFCP563PTYQ5DE2TD&page_size=4&order_by=start_desc'),
    fetch('https://sauce-num-back.herokuapp.com/api/v1/ressources'),
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
