import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Events from '../components/events/Events';


const EventsPage = ({ events }) => (
  <div>
    <h1 className="title2">Événements</h1>
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
    <Layout>
      <article>
        <Events events={events} />
      </article>
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
      hr.barre_barre{
        width: 3%;
        height: 4px;
        background-color: #1F2040;
        margin-left: 67rem;
      }
      .text-ressources{
        color: #1F2040;
        font-size: 2rem;
        margin-left: 0rem;
        margin-top: 3rem;
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
