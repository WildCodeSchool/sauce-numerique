import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Ressources from '../components/ressources/Ressources';

const RessourcesPage = ({ ressources }) => (
  <div>
    <Layout>
      <article>
        <h1 className="ressources">Ressources</h1>
        <Ressources ressources={ressources}/>
      </article>
    </Layout>
  </div>
);

RessourcesPage.getInitialProps= async () => {
  const ressourcesRes = await fetch('https://sauce-num-back.herokuapp.com/api/v1/ressources?limit=4');
  const ressourcesData = await ressourcesRes.json();
 

  return {
    ressources: ressourcesData,
  };
};


export default RessourcesPage;
