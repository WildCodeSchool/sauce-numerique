import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Events from '../components/events/Events';

const EventsPage = ({ events }) => (
  <div>
    <Layout>
    <h1 className="title2">Événements</h1>
    <hr className="blue_break" />
    <p className="events-text">
      Le numérique est aujourd’hui omniprésent dans nos vies,
      {' '}
      il impact fortement nos modes de vies, nos
      sociétés, nos politiques, nos relations sociales professionnelles ou privées.
      {' '}
       Pour autant, il ne profite pas à
      tous, nombreux sont celles et ceux qui le comprennent mal ou bien pire, en sont exclus !
    </p>
      <div className="eventspage-block">
        <Events events={events} />
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
        color: #1F2040;
        text-shadow: 0 1px 2px rgba(black,.15);
      }

      hr.blue_break {
        width: 3rem;
        height: 4px;
        background-color: #1f2040;
        border-style: none;
        border-radius: 2px;
        margin: auto;
      }

      .events-text{
        color: #1F2040;
        font-size: 2rem;
        margin: auto;
        padding: 5rem;
        text-align: justify;
      }

      @media screen and (min-width: 1000px) {
        .events-text{
          width: 100rem;
        }
    `}
    </style>
  </div>
);

EventsPage.getInitialProps = async () => {
  const res = await fetch('https://www.eventbriteapi.com/v3/users/me/events/?token=EQCXFCP563PTYQ5DE2TD&order_by=start_desc');
  const data = await res.json();


  return {
    events: data,
  };
};
export default EventsPage;
