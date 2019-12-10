import React from 'react';
import './Carousel.css';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';

// function ActionLink() {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log('Le lien a été cliqué.');
//   }

//   return (
//     <a href="https://wwww.google.fr" onClick={handleClick}>
//       Clique ici
//     </a>
//   );
// }


class Carousel extends React.Component {

    handleClick = (e) => {
      e.preventDefault();
      location = 'http://www.google.com/';
    };

  render() {
    return (
      <ResponsiveCarousel>
        <div className="question">
          <img src="https://i.imgur.com/02jLusq.jpg" alt="ordi" />
          <h1>Saviez-vous que les Français passe 8h/jour devant des écrans?</h1>
          <button className="button_question" onClick={this.handleClick}>
            OUI
          </button>
          <button className="button_question" onClick={this.handleClick}>
            NON
          </button>
        </div>
        <div className="question">
          <img src="https://i.imgur.com/JfnGK0j.jpg" alt="ordi" />
          <h1>Saviez-vous que les Français passe 8h/jour devant des écrans?</h1>
          <button className="button_question" onClick={this.handleClick}>
            OUI
          </button>
          <button className="button_question" onClick={this.handleClick}>
            NON
          </button>
        </div>
        <div className="question">
          <img src="https://i.imgur.com/au1L4wj.jpg" alt="ordi" />
          <h1>Saviez-vous que les Français passe 8h/jour devant des écrans?</h1>
          <button className="button_question" onClick={this.handleClick}>
            OUI
          </button>
          <button className="button_question" onClick={this.handleClick}>
            NON
          </button>
        </div>
      </ResponsiveCarousel>

    );
  }
}

export default Carousel;
