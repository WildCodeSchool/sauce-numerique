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
        <hr className="barre_barre" />
        <Events events={events} />
        <a className="event-href" href="/EventsPage">VOIR TOUS LES ÉVÉNEMENTS </a>
      </div>
      <div className="ressource-container">
        <h1 className="title2">
          Ressources
        </h1>
        <hr className="barre_barre" />
        <p className="text-ressources">
          Le numérique est aujourd’hui omniprésent dans nos vies,
          {' '}
          il impact fortement nos modes de vies, nos
          <br />
          sociétés, nos politiques, nos relations sociales professionnelles ou privées.
          {' '}
          Pour autant, il ne profite pas à
          <br />
          tous, nombreux sont celles et ceux qui le comprennent mal ou bien pire, en sont exclus !
        </p>
        <Ressources ressources={ressources} />
        <a className="ressources-href" href="/RessourcesPages">VOIR TOUTE LA BIBLIO</a>
      </div>
    </Layout>
    <style jsx>
      {`
      .title2 {
        margin: 104px;
        text-align: center;
        font-size: 6em;
        margin-bottom: 10px;
        font-family: 'Dosis',sans-serif;
        font-weight: 900;
        color: #1F2040;
        text-shadow: 0 1px 2px rgba(black,.15);
      }
      .title{
        margin: 0 auto;
        text-align: center;
        font-size: 6em;
        margin-bottom: 10px;
        font-family: 'Dosis',sans-serif;
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
      hr.barre_barre{
        width: 3%;
        height: 4px;
        background-color: #1F2040;
        margin-left: 67rem;
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
        font-weight: 700;
        position: relative;
        left: 64rem;
        bottom: 1rem;
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
    fetch(`${API_URL}/api/v1/ressources?limit=8`),
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
