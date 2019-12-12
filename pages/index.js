import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Carousel from '../components/Carousel/Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Partners from '../components/partners/Partners';


const Home = ({ test }) => (
  <div>
    <Layout>
      <article>
        <h1>Bienvenue sur La Sauce Numérique !</h1>
        <Carousel />
      </article>
      <div className="h1-partner">
        <h1>Nos Partenaires</h1>
      </div>
      <Partners />

      {test.map((y) => (
        <div key={y.id}>
          <a href={y.logo}> clique me</a>
          <div>
            <img alt="" src={y.logo} />
          </div>
          <li>{y.name}</li>
          <li>{y.id}</li>
        </div>
      ))}

    </Layout>
  </div>
);
// https://www.eventbriteapi.com/v3/users/me/events/?token=J3HV53T7XHQQQ5KWAMHT
Home.getInitialProps = async function () {
  const res = await fetch('http://localhost:5000');
  const data = await res.json();
  console.log(data);

  return {
    test: data,
  };
};

export default Home;
