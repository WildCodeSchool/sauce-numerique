import React from 'react';
import styled from 'styled-components';
import RandomImage from '../RandomImage/RandomImage';

const moment = require('moment');

moment.locale('fr');

const EventsDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0;
`;

const Events = ({ events }) => (
  <div className="events-display">
    <EventsDisplay>  
    {events.events.map((y) => {
      const start = moment(y.start.local);
      return (
        <div className="events-container" key={y.id}>
          <a className="url" target="_blank" href={y.url}>
            <div className="events" key={y.id}>
              <div className="event">
                {/* {y.logo ? <img className="events-logo" src={y.logo.original.url} /> : <img className="events-logo" src="https://i.imgur.com/eSTiexo.jpg" />} */}
                <RandomImage />
                <div className="free-container">
                  {y.is_free ? <p className="events-is_free">GRATUIT</p> : <p className="events-is_free">PAYANT</p>}
                </div>
              </div>
              <div className="events-text">
                <div className="date">
                  <p className="events-date">
                    {start.format('DD MMMM')}
                  </p>
                  <p className="events-time">
                    de
                    {' '}
                    {start.format('LT')}
                    {' '}
                    à
                    {' '}
                    {moment(y.end.local).format(' HH:mm')}
                  </p>
                </div>
                <h2 className="events-title">
                  {y.name.text}
                </h2>
                <p className="events-description">
                  {y.description.text}
                </p>
              </div>
            </div>
          </a>
          <style jsx>
            {`
          a {
            text-decoration: none;
            color: #fff;
          };
          
          .events-container {
            background-color: #1F2040;
            border-radius: 0.625rem;
            width: 40rem;
            min-height: 25rem;
            margin: 2rem;
          };
          
          .events-text {
            text-align: right;
            margin: 0 1rem 0 0;
            padding: 0 0 0 15rem;
            font-size: 1.7rem;
          };
          
          .events-title {
            margin-bottom: 2rem;
            display: inline-block;
            text-align: left;
          }
          
          .events-description {
            text-align: left;
          };
          
          .date {
            text-align: left;
            margin-bottom: 1rem;
            float: left;
          };
          
          .events-date {
            font-size: 2rem;
          };
          
          .events-time {
            font-size: 100%;
          };
          
          .events-is_free {
            font-weight: bold;
            margin: 2rem 0 0 0;
            padding: 0.5rem 0.5rem 0.5rem 2rem;
            float:left;
            color: #1F2040;
            background-color: #fff;
            position: absolute;
          };
          
          .events-is_free:after {
            content: "";
            position: relative;
            border-top : 11px solid #fff;
            border-right : 6px solid transparent;
            left: 1.1rem;
            top: 0.6rem;
          };
          
          .events-is_free:before {
            content: "";
            border-right : 6px solid transparent;
            border-bottom : 11px solid #fff;
            position: relative;
            left: 5.2rem;
            bottom: 0.6rem;
          };
          `}
          </style>
        </div>
      );
    })}
    </EventsDisplay>
  </div>
);


export default Events;
