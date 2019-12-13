import React from './node_modules/react';
import './Carousel.css';
import { Carousel as ResponsiveCarousel } from './node_modules/react-responsive-carousel';

class Carousel extends React.Component {

    NoClick = (e) => {
      e.preventDefault();
      location = 'https://fr.wikipedia.org/wiki/Non';
    };

    YesClick = (e) => {
      e.preventDefault();
      location = 'https://fr.wikipedia.org/wiki/Oui';
    };

  render() {
    return (
      <ResponsiveCarousel>
        <div className="question">
          <img src="https://i.imgur.com/02jLusq.jpg" alt="ordi" />
          <h1>Saviez-vous que les Français passe 8h/jour devant des écrans?</h1>
          <button className="button_question" onClick={this.YesClick}>
            OUI
          </button>
          <button className="button_question" onClick={this.NoClick}>
            NON
          </button>
        </div>
        <div className="question">
          <img src="https://i.imgur.com/JfnGK0j.jpg" alt="ordi" />
          <h1>Saviez-vous que les Français passe 8h/jour devant des écrans?</h1>
          <button className="button_question" onClick={this.YesClick}>
            OUI
          </button>
          <button className="button_question" onClick={this.NoClick}>
            NON
          </button>
        </div>
        <div className="question">
          <img src="https://i.imgur.com/au1L4wj.jpg" alt="ordi" />
          <h1>Saviez-vous que les Français passe 8h/jour devant des écrans?</h1>
          <button className="button_question" onClick={this.YesClick}>
            OUI
          </button>
          <button className="button_question" onClick={this.NoClick}>
            NON
          </button>
        </div>
      </ResponsiveCarousel>

    );
  }
}

export default Carousel;
