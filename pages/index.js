import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Manifest from '../components/Manifeste-Home/Manifest';
import Carousel from '../components/Carousel/Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import API_URL from '../api.config';
import Partners from '../components/partners/Partners';
import Events from '../components/events/Events';
import Ressources from '../components/ressources/Ressources';

const Home = ({ partners, events, ressources }) => (
  <div>
    <Layout>
      <Carousel />
      <Manifest />
      <Partners partners={partners} />
      <div className="event-container">
        <h1 className="title2">
           Événements à venir
        </h1>
        <hr className="blue-break" />
        <Events events={events} />
        <a className="event-href" href="/EventsPage">VOIR TOUS LES ÉVÉNEMENTS ></a>
      </div>
      <div className="ressource-container">
        <h1 className="title2">
          Ressources
        </h1>
        <hr className="blue-break" />
        <Ressources ressources={ressources} />
        <a className="ressources-href" href="/RessourcesPages">VOIR TOUTE LA BIBLIO ></a>
      </div>
    </Layout>
    <style jsx>
      {`
      .title2 {
        margin: 8rem auto;
        text-align: center;
        font-size: 6em;
        margin-bottom: 10px;
        font-weight: bold;
        color: #1f2040;
        text-shadow: 0 1px 2px rgba(black, 0.15);
      }
      .title{
        margin: 0 auto;
        text-align: center;
        font-size: 6em;
        margin-bottom: 10px;
        font-weight: 900;
        color: #fff;
        text-shadow: 0 1px 2px rgba(black,.15);
      }

      hr.barre {
        width: 3%;
        height: 4px;
        background-color: #fff;
        margin-left: 67rem;
      }

      hr.blue-break {
        width: 3rem;
        height: 4px;
        background-color: #1f2040;
        border-style: none;
        border-radius: 2px;
        margin: auto;
      }
      
      .text-container{
        color: #fff;
        font-size: 2rem;
        margin-left: 26rem;
        padding: 5rem;
      }
      .contact-container{
        color: #fff;
        font-size: 12px;
        margin-left: 62rem;
        margin-bottom: 2rem;
      }
      .img-container{
        position: relative;
        bottom: 11rem;
        width: 100%;
      }
      .event-container {
        margin-top: 16rem;
      }
      .img2-container {
        position: relative;
        top: 4rem;
        width: 100%;
      }
      a.event-href{
        color: #1F2040;
        display: flex;
        font-weight: 700;
        text-align: center;
        margin: auto;
        display: block;
      }
      a.ressources-href{
        color: #1F2040;
        font-weight: 700;
        position: relative;
        left: 65rem;
        top: 11rem;
      }
    `}
    </style>
  </div>
);
Home.getInitialProps = async () => {
  const [partnersRes, eventsRes, ressourcesRes] = await Promise.all([
    fetch(`${API_URL}/api/v1/partners`),
    fetch('https://www.eventbriteapi.com/v3/users/me/events/?token=EQCXFCP563PTYQ5DE2TD&page_size=4&order_by=start_desc'),
    fetch(`${API_URL}/api/v1/ressourcesFront?limit=8`),
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
