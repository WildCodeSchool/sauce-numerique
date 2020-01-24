import React from 'react';
import './Ressources.css';


const Ressources = ({ ressources }) => (
  <div className="ressources-container">
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
    {ressources.map((y) => {
      const flag = y.theme.substring(0, 1);
      return (
        <div className="ressources" key={y.id}>
          <p>{flag}</p>
          <h1 className="ressources-title-container">{y.title}</h1>
          <p className="ressources-theme-container">{y.theme}</p>
          <div className="description-container">
            <p className="ressources-description-container">{y.description}</p>
          </div>
        </div>
      );
    })}
    <style jsx>
      {`
        .ressources-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          width: 87%;
          margin-top: 25em;    
        }

        .ressources{
          max-width: 95%;
          margin-top: -12rem;
          margin-right: -56rem;
          background-color: #1F2040;
          color: #FFFFFF;
          display: flex;
          border-radius: 15px;
          position: relative;
          left: 8rem;
          margin-bottom: 20vh;
        }

        .ressources-title-container {
          width: 23vw;
          height: 33rem;
          position: relative;
          top: 8rem;
          left: 3rem;
          font-size: 18px;
        }

        p.ressources-theme-container{
          position: relative;
          right: 3rem;
          top: 1rem;
        }

        .description-container {
          position: relative;
          top: 20rem;
          right: 6rem;
          width: 38vw;
          font-size: 12px;
        }
    `}
    </style>
  </div>
);


export default Ressources;
