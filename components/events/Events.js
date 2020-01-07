import React from 'react';


const Events = ({ eve })=>(
    <div>
        {eve.map((y) => (
            <div className="" key={y.id}>
              <h2> {y.name}</h2>
              <p>{y.description}</p>
            </div>
        ))}
    </div>
)



export default Events;