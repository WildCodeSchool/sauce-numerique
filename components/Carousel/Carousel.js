import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.Carousel = React.createRef();

    this.state = {
      galleryItems: [
        {
          id: 1,
					title: 'En moyenne et par jour, combien de temps passons-nous devant des écrans ?',
					question: 'Question 1/2',
          background: 'https://i.imgur.com/uIVo5Ie.png',
          reponse1: 'Oh bah grand max 3h…',
          reponse2: '8h! Et c’est bien trop!',
        },
        {
          id: 2,
					title: 'Eh oui… 8h d’écrans par jour avec 7 écrans par famille en moyenne.',
					question: 'Question 2/2',
          background: 'https://i.imgur.com/uIVo5Ie.png',
          lien: 'Je veux voir l’étude à ce sujet>',
          reponse3: 'Pas étonnant…',
        },
      ],
    };
  }

  render() {
    const { galleryItems } = this.state;

    return (
      <div>
        <AliceCarousel
          ref={this.Carousel}
          items={galleryItems.map((item) => (
            <div className="carousel" key={item.id}>
              <img className="picture" src={item.background} alt="people" />
							<h2 className="question">{item.question}</h2>
							<hr className="white-break" />
              <h2 className="title_carousel">{item.title}</h2>
							{/* Button */}
							<div className="button_container" id="slide1">
								<div className="button_slide1">
              		<button className="reponse1_button" onClick={() => this.Carousel.current.slideNext()}>{item.reponse1}</button>
              		<button className="reponse2_button" onClick={() => this.Carousel.current.slideNext()}>{item.reponse2}</button>
								</div>
								</div>
								<div className="button_container" id="slide2">
								<div className="button_slide2">
              		<button className="reponse3_button" onClick={() => this.Carousel.current.slideNext()}>{item.reponse3}</button>
								</div>
								</div>
              <a className="lien" href="https://www.inspq.qc.ca/pdf/publications/2154_temps_ecran_habitudes_vie.pdf" target="_blank">{item.lien}</a>
            </div>
          ))}
          buttonsDisabled
          dotsDisabled
        />
				{/* CSS */}
        <style jsx>
          {`
							.carousel{
    						display: flex;
    						align-items: flex-start;
    						flex-wrap: wrap;
							}
							img.picture {
    						width: 100%;
    						object-fit: cover;
    						height: 73vh;
    						margin-top: 0;
							}
							h2.question {
    						display: block;
    						margin: -33% -48% 30% 47%;
    						color: #fff;
    						font-size: 211%;
							}
							hr.white-break {
    						display: block;
    						color: #000;
    						margin: -30% -45% 2% 43%;
    						width: 3rem;
    						height: 4px;
    						background-color: #fff;
    						border-style: none;
    						border-radius: 2px;
							}
							h2.title_carousel {
								color: #fff;
    						font-size: 673%;
    						height: 100%;
    						text-align: center;
    						margin: -30% 18%;
    						max-width: 64%;
							}
							.button_slide1 {
								top: 76%;
    						right: 38%;
    						position: absolute;
							}
							button.reponse1_button {
    						font-size: 170%;
    						margin: 17px;
    						border: none;
    						border-radius: 6px;
    						padding: 2px 15px;
							}
							button.reponse2_button {
    						font-size: 170%;
    						border: none;
    						border-radius: 6px;
    						padding: 2px 15px;
							}
							
        	`}
        </style>
      </div>
    );
  }
}

export default Carousel;
