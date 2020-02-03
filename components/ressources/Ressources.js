import React from 'react';


const Ressources = ({ ressources }) => (
  <div>
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
  <div className="ressources-container">   
    {ressources.map((y) => {
      const flag = y.theme.substring(0, 1);
      return (
        <div className="ressources" key={y.id}>
          <p className="icon-ressources">{flag}</p>
          <h1 className="ressources-title-container">{y.title}</h1>
          <p className="ressources-theme-container">{y.theme}</p>
          <div className="description-container">
            <p className="ressources-description-container">{y.description}</p>
          </div>
        </div>
 
      );
    })}
    </div>
    <style jsx>
      {`
        .text-ressources{
          color: #1F2040;
          font-size: 2rem;
          margin: auto;
          padding: 5rem;
          text-align: justify;
        }

        .ressources-container {
          display: grid;
          grid-template-columns: repeat(1,1fr);
          border-radius: 10px;
          margin: 44% 0 0 -22%;
          width: 30rem;
          min-height: 20rem;   
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
          margin-bottom: 30vh;
        }

        p.icon-ressources {
          margin: 3% -7% 0 30px;
        }

        .ressources-title-container {
          text-align: left;
          margin: 19% -38% 0% 5%;
          display: flex;
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
