import React from 'react';


const Events = ({ events })=>(
    <div>
        {events.events.map((y) => (
            <div className="" key={y.id}>
              <h2> {y.name.text}</h2>
              <p>{y.description.text}</p>
            </div>
        ))}
    </div>
)


export default Events;