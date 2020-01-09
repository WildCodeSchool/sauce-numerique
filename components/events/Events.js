import React from 'react';
import './Events.css';

const Events = ({ events })=>(
    <div className="events-container">
        {events.events.map((y) => (
            <div className={"events"}  key={y.id}>
            {y.logo && <img className="events-logo" src={y.logo.url} />}
                <div className="events-text">
                    <h2 className="events-title">
                        {y.name.text}
                    </h2>
                    <p className="event-description">
                        {y.description.text}
                    </p>
                </div>
            </div>
        ))}
    </div>
)


export default Events;
