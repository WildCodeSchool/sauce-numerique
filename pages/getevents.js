import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Events from '../components/events/Events';


const getEvents = ({ eve }) => (
  <div>
    <Layout>
      <article>
        <h1>Ceci est la page : Événements</h1>
        <Events events={eve}/>
      </article>
    </Layout>
  </div>
);

getEvents.getInitialProps= async () => {
  const res = await fetch('https://www.eventbriteapi.com/v3/users/me/events/?token=EQCXFCP563PTYQ5DE2TD');
  const data = await res.json();
 

  return {
    eve: data,
  };
};
export default getEvents;
