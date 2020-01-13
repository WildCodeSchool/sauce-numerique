import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.css';

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
    <AliceCarousel mouseTrackingEnabled>
      <div>
        <img src="https://i.imgur.com/KYgLhZ6.jpg" alt="ordi"  className="imgcarousel" />
        <h1 className="question">Saviez-vous que les Français passe 8h/jour devant des écrans?</h1>
        <div className="button">
        <button className="button_question"  onClick={this.YesClick}>
          OUI
        </button>
        <button className="button_question" onClick={this.NoClick}>
          NON
        </button>
        </div>
      </div>
      <div>
        <img src="https://i.imgur.com/JfnGK0j.jpg" alt="ordi"  className="imgcarousel" />
        <h1 className="question">Saviez-vous que les Français passe 8h/jour devant des écrans?</h1>
        <div className="button">
        <button className="button_question" onClick={this.YesClick}>
          OUI
        </button>
        <button className="button_question" onClick={this.NoClick}>
          NON
        </button>
        </div>
      </div>
      <div>
        <img src="https://i.imgur.com/au1L4wj.jpg" alt="ordi"  className="imgcarousel" />
        <h1 className="question">Saviez-vous que les Français passe 8h/jour devant des écrans?</h1>
        <div className="button">
        <button className="button_question" onClick={this.YesClick}>
          OUI
        </button>
        <button className="button_question" onClick={this.NoClick}>
          NON
        </button>
        </div>
      </div>
    </AliceCarousel>
  );
};
}

export default Carousel;
