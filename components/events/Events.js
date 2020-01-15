import React from 'react';
import './Events.css';

const moment = require('moment');
moment.locale('fr');

const Events = ({ events })=>(
    <div className="events-events">
        {events.events.map((y) => (
            <div className="events-container" key={y.id}>
            <a className="url" target="_blanck" href={y.url}>
            <div className={"events"}  key={y.id}>
            <div className="event">
                {y.logo ? <img className="events-logo" src={y.logo.original.url} /> : <img className="events-logo" src="https://i.imgur.com/eSTiexo.jpg"/>}
                <div className="rectangle">
                {y.is_free ? <p className="events-is_free">GRATUIT</p> : <p className="events-is_free" >PAYANT</p>}
                </div>                
            </div>   
                <div className="events-text">
                    <h2 className="events-title">
                        {y.name.text}
                    </h2>
                    <p className="event-description">
                        {y.description.text}
                    </p>
                </div>
                <div className="date">
                    <p className="event-date">
                    {moment(y.start.local).format('DD MMMM')} 
                    </p>
                    <p className="event-time">
                    de {moment(y.start.local).format('LT')} à {moment(y.end.local).format(' HH:mm')}
                    </p>
                </div>                
            </div>
            </a>
            </div>
        ))}             
    </div>
    
)


export default Events;
