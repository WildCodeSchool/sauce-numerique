import React from 'react';
import './Events.css';

const Events = ({ events })=>(
    <div>
        {events.events.map((y) => (
            <div className="" key={y.id}>
            {y.logo ? <img src={y.logo.original.url} />: ""}
              <h2> {y.name.text}</h2>
              <p>{y.description.text}</p>
            </div>
        ))}
    </div>
)


export default Events;