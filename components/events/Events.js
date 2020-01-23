import React from 'react';

const moment = require('moment');

moment.locale('fr');

const Events = ({ events }) => (
  <div className="events-events">
    {events.events.map((y) => {
      const start = moment(y.start.local);
      return (
        <div className="events-container" key={y.id}>
          <a className="url" target="_blanck" href={y.url}>
            <div className="events" key={y.id}>
              <div className="event">
                {/*} {y.logo ? <img className="events-logo" src={y.logo.original.url} /> : <img className="events-logo" src="https://i.imgur.com/eSTiexo.jpg" />} */}
                <div className="rectangle">
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
        <style jsx>{`
          a {
            text-decoration: none;
            color: #fff;
          }

          .events-container {
            background-color: #1F2040;
            border-radius: 5px;
            margin: 1rem;
            width: 30rem;
            min-height: 20rem;
          }

          .events-text {
            text-align: right;
            margin: 0 1rem 0 0;
            padding: 0 0 0 15rem;
          }

          .events-title {
            font-size: 125%;
            margin: 1rem 0 1rem 0;
            text-align: left;
          }

          .events-description {
            text-align: left;
          }
          
          .date {
            text-align: left;
            margin-bottom: 2rem;
          }

          .events-date {
            font-size: 200%;
          }

          .events-time {
            font-size: 100%;
          }
        `}

        </style>
        </div>
      );
    })}
  </div>

);


export default Events;
