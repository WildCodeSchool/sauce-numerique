import React from 'react';
import './Events.css';
const moment = require('moment');
moment.locale('fr');

const Events = ({ events })=>(
    <div className="events-container">
        {events.events.map((y) => {
            const start = moment(y.start.local)
            return (
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
                        {start.format('DD MMMM')} de
                    </p>
                    <p className="event-date">
                        {start.format('LT')} à {moment(y.end.local).format('LT')}
                    </p>
                    <a className="events-button" href={y.url}>
                        S'inscrire
                    </a>
                </div>
            </div>
        )})}
    </div>
)


export default Events;
