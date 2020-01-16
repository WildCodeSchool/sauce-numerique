import React from 'react';
import './Ressources.css'


const Ressources = ({ ressources })=>(
    <div className="ressources-container">
        {ressources.map((y) => {
          let flag = y.theme.substring(0 ,1);
          return(
        <div className={"ressources"} key={y.id}>
          <p>{flag}</p>
          <h1 className="ressources-title">{y.title}</h1>
          <p className="ressources-theme">{y.theme}</p>
          <div className="description">
          <p className="ressources-description">{y.description}</p>
          </div>
        </div>
      )})}
    </div>
)



export default Ressources;