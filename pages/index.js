import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';


const Home = ({ test }) => (
  <div>
    <Layout>
      <article>
        <h1>Bienvenue sur La Sauce Numérique !</h1>
      </article>

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
