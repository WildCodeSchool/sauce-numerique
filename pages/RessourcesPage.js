import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Ressources from '../components/ressources/Ressources';
import API_URL from '../api.config';

const RessourcesPage = ({ ressources }) => (
  <div>
    <h1 className="title-ressources">Ressources</h1>
    <hr className="blue-break" />
    <Layout>
      <article>
        <Ressources ressources={ressources} />
      </article>
    </Layout>
    <style jsx>
      {`
      .title-ressources{
        margin: auto;
        text-align: center;
        font-size: 6em;
        margin-bottom: 10px;
        font-weight: bold;
        color: #1F2040;
        text-shadow: 0 1px 2px rgba(black,.15);
      }
      hr.blue-break {
        width: 3rem;
        height: 4px;
        background-color: #1F2040;
        border-style: none;
        border-radius: 2px;
        margin: auto;
      }
      .text-ressources{
        color: #fff;
        font-size: 2rem;
        margin: auto;
        padding: 5rem;
        text-align: center;
      }
    `}
    </style>
  </div>
);

RessourcesPage.getInitialProps = async () => {
  const ressourcesRes = await fetch(`${API_URL}/api/v1/ressourcesFront`);
  const ressourcesData = await ressourcesRes.json();


  return {
    ressources: ressourcesData,
  };
};


export default RessourcesPage;
