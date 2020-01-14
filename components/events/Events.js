import React from 'react';
import './Events.css';

const Events = ({ events })=>(
    <div className="events-container">
        {events.events.map((y) => (
            <a className="url" target="_blanck" href={y.url}>
            <div className={"events"}  key={y.id}>
            {y.logo && <img className="events-logo" src={y.logo.url} />}
                <div className="events-text">
                    <h2 className="events-title">
                        {y.name.text}
                    </h2>
                    <p className="event-description">
                        {y.description.text}
                    </p>
                    <p className="event-description">
                        {y.description.text}
                    </p>
                </div>
            </div>
            </a>
        ))}             
    </div>
    
)


export default Events;
