import React from 'react';
import './Ressources.css'


const Ressources = ({ ressources })=>(
    <div className="ressources-container">
        {ressources.map((y) => (
        <div className={"ressources"} key={y.id}>
          <h1 className="ressources-title">{y.title}</h1>
          <p className="ressources-theme">{y.theme}</p>
          <div className="description">
          <p className="ressources-description">{y.description}</p>
          </div>
        </div>
      ))}
    </div>
)



export default Ressources;