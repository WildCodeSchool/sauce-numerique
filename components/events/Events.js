import React from 'react';
import './Events.css';

const Events = ({ events })=>(
    <div>
        {events.events.map((y) => (
            <div className={"events"}  key={y.id}>
            {y.logo ? <img className="events--logo" src={y.logo.url} />: ""}
                <div className="events--text">
                    <h2> {y.name.text}</h2>
                    <p>{y.description.text}</p>
                    <div>{y.venue_id}</div>
                </div>
            </div>
        ))}
    </div>
)


export default Events;
