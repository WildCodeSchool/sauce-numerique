import React from 'react';
import './Events.css';

const Events = ({ events })=>(
    <div className="events-container">
        {events.events.map((y) => (
            <a className="url" target="_blanck" href={y.url}>
            <div className={"events"}  key={y.id}>
            {y.logo && <img className="events-logo" src={y.logo.original.url} />}
            {y.is_free ? <p className="events-is_free" >GRATUIT</p> : <p className="events-is_free" >PAYANT</p>}
                <div className="events-text">
                    <h2 className="events-title">
                        {y.name.text}
                    </h2>
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
