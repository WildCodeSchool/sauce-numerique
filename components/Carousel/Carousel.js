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
        <img src="https://i.imgur.com/dcqrhOZ.png" alt="personnes qui utilise un telephone"  className="background" />
        <img src="https://i.imgur.com/uIVo5Ie.png" alt="personnes qui utilise un telephone"  className="imgcarousel" />
        <h1 className="question">En moyenne et par jour, combien de temps passons-nous devant des écrans ?</h1>
        <div className="button">
        <button className="button_question"  onClick={this.YesClick}>
          Oh bah grand max 3h...
        </button>
        <button className="button_question" onClick={this.NoClick}>
          8h ! Et c'est bien trop !
        </button>
        </div>
      </div>
      <div>
        <div>
        <img src="https://i.imgur.com/dcqrhOZ.png" alt="personnes qui utilise un telephone"  className="background" />
        </div>
        <img src="https://i.imgur.com/uIVo5Ie.png" alt="personnes qui utilise un telephone"  className="imgcarousel" />
        <h1 className="question2">Eh oui… 8h d’écrans par jour avec 7 écrans par famille en moyenne.</h1>
        <div className='button'>
        <div>
          <a className="question-lien" target="_blank" href="https://www.mon-enfant-et-les-ecrans.fr/quel-temps-devant-les-ecrans-faut-il-accorder-a-votre-enfant/">Je veux voir l’étude à ce sujet</a>
        </div>
        <button className="button_question2"  onClick={this.YesClick}>
          Pas étonnant…
        </button>
        </div>
      </div>
    </AliceCarousel>
  );
};
}

export default Carousel;
