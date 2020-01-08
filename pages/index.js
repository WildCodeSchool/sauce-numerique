import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Carousel from '../components/Carousel/Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Partners from '../components/partners/Partners';
import Events from '../components/events/Events';

const Home = ({ test, eve }) => (
  <div>
    <Layout>
      <article>
        <h1>Bienvenue sur La Sauce Numérique !</h1>
        <Carousel />
      </article>
      <div className="h1-partner">
        <h1>Nos Partenaires</h1>
      </div>
      <Partners partners={test} />
      <Events events={eve}/>
    </Layout>
  </div>
);
// https://www.eventbriteapi.com/v3/users/me/events/?token=J3HV53T7XHQQQ5KWAMHT
Home.getInitialProps = async  () => {
  const resPartners = await fetch('http://localhost:5000/api/v1/partners');
  const dataPartners = await resPartners.json();
  const resEvents = await fetch('https://www.eventbriteapi.com/v3/users/me/events/?token=EQCXFCP563PTYQ5DE2TD&page_size=2&order_by=start_desc');
  const dataEvents = await resEvents.json();
  console.log(dataPartners,dataEvents);

  return {
    test: dataPartners,
    eve: dataEvents,
  };
};

export default Home;
