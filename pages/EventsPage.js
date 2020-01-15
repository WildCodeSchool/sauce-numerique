import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Events from '../components/events/Events';


const EventsPage = ({ events }) => (
  <div>
    <Layout>
      <article>
        <h1>Ceci est la page : Événements</h1>
        <Events events={events}/>
      </article>
    </Layout>
  </div>
);

EventsPage.getInitialProps= async () => {
  const res = await fetch(`'https://www.eventbriteapi.com/v3/users/me/events/?token=${API_SECRET_JETON}&order_by=start_desc'`);
  const data = await res.json();
 

  return {
    events: data,
  };
};
export default EventsPage;
