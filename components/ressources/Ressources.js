import React from 'react';
import './Ressources.css'


const Ressources = ({ ressources })=>(
    <div>
        {ressources.map((y) => (
        <div className="" key={y.id}>
          <h1>{y.title}</h1>
        <p>{y.theme}</p>
        <p>{y.description}</p>
        </div>
      ))}
    </div>
)



export default Ressources;