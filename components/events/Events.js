import React from 'react';
import './Events.css';

const Events = ({ events })=>(
    
    <div className="events-container">
        {events.events.map((y) => (
            <div className={"events"}  key={y.id}>
            {y.logo && <img className="events-logo" src={y.logo.original.url} />}
            {y.is_free ? <p className="events-is_free" >gratuit</p> : <p className="events-is_free" >payant</p>}
                <div className="events-text">
                    <h2 className="events-title">
                        {y.name.text}
                    </h2>
                    <p className="event-description">
                        {y.description.text}
                    </p>
                    <p className="event-date">
                        
                    {y.start.local}.split()
                    </p>
                    <p className="event-date">
                    {y.end.local}
                    </p>
                    <a className="events-button" href={y.url}>
                        S'inscrire
                    </a>
                </div>
            </div>
        ))}
    </div>
)


export default Events;
