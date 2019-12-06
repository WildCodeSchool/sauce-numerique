import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';


const Home = ({test}) => (
  <div>
    <Layout>
      <article>
        <h1>Bienvenue sur La Sauce Numérique !</h1>
      </article>
      
        {test.map (y => 
        <div key={y.id}>
          <a href={y.url}> clique me</a>
          <li>{y.name.text}</li>
        </div>
          )
        }
      
    </Layout>
  </div>
);

Home.getInitialProps = async function() {
  const res = await fetch('https://www.eventbriteapi.com/v3/users/me/events/?token=J3HV53T7XHQQQ5KWAMHT');
  const data = await res.json();

  console.log(data);

  return {
    test : data.events
  };
};

export default Home;
