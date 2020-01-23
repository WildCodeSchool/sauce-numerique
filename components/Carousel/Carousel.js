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
          background: 'https://i.imgur.com/uIVo5Ie.png',
          reponse1: 'Oh bah grand max 3h…',
          reponse2: '8h! Et c’est bien trop!',
        },
        {
          id: 2,
          title: 'Eh oui… 8h d’écrans par jour avec 7 écrans par famille en moyenne.',
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
              <h2 className="title_carousel">{item.title}</h2>
							<div className="button_container">
								<div className="button_slide1">
              		<button className="reponse1_button" onClick={() => this.Carousel.current.slideNext()}>{item.reponse1}</button>
              		<button className="reponse2_button" onClick={() => this.Carousel.current.slideNext()}>{item.reponse2}</button>
								</div>
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
    						height: 78vh;
    						margin-top: 11%;
							}
							h2.title_carousel {
    						color: #fff;
    						font-size: 360%;
    						height: 100%;
    						text-align: center;
    						margin: -129% 5%;
							}
							.button_slide1 {
    						display: flex;
    						align-items: center;
							}
							button.reponse1_button {
								color: #000;
    						font-size: 160%;
    						border-radius: 10px;
    						margin: -117% -73% 8% 33%;
							}
							button.reponse2_button {
								color: #000;
    						font-size: 160%;
    						border-radius: 10px;
    						margin: -83% -71% 2% 23%;
							}
							.button_slide2 {
    						display: flex;
    						align-items: center;
							}
							button.reponse3_button {
    						color: #000;
    						font-size: 160%;
    						border-radius: 10px;
    						margin: -283% -155% 22% 128%;
							}
							a.lien {
    						margin: -66% -1%;
    						font-size: 150%;
    						color: #fff;
							}

						@media screen and (min-width: 768px) and (max-width: 1023px){
								.carousel{
    						display: flex;
    						align-items: flex-start;
    						flex-wrap: wrap;
							}
							img.picture {
    						width: 100%;
    						object-fit: cover;
    						height: 62vh;
    						margin-top: 6%;
							}
							h2.title_carousel {
    						color: #fff;
    						font-size: 418%;
    						height: 100%;
    						text-align: center;
    						margin: -60% 5%;
							}
							.button_slide1 {
    						display: flex;
    						align-items: center;
							}
							button.reponse1_button {
								color: #000;
    						font-size: 219%;
    						border-radius: 10px;
    						margin: -107% -81% 8% 33%;
							}
							button.reponse2_button {
								color: #000;
    						font-size: 219%;
    						border-radius: 10px;
    						margin: -112% -71% 2% 90%;
							}
							.button_slide2 {
    						display: flex;
    						align-items: center;
							}
							button.reponse3_button {
    						color: #000;
    						font-size: 219%;
    						border-radius: 10px;
    						margin: -283% -230% 22% 213%;
							}
							a.lien {
    						margin: -38% 16%;
    						font-size: 219%;
    						color: #fff;
							}
						}

						@media screen and (min-width: 1024px) and (max-width: 1356px){
							.carousel{
    						display: flex;
    						align-items: flex-start;
    						flex-wrap: wrap;
							}
							img.picture {
    						width: 100%;
    						object-fit: cover;
    						height: 38vh;
    						margin-top: 3%;
							}
							h2.title_carousel {
    						color: #fff;
    					font-size: 418%;
    					height: 100%;
    					text-align: center;
    					margin: -36% 5%;
							}
							.button_slide1 {
    						display: flex;
    						align-items: center;
							}
							button.reponse1_button {
								color: #000;
    						font-size: 219%;
    						border-radius: 10px;
    						margin: -72% -82% 8% 61%;
							}
							button.reponse2_button {
								color: #000;
    						font-size: 219%;
    						border-radius: 10px;
    						margin: -77% -71% 2% 90%;
							}
							.button_slide2 {
    						display: flex;
    						align-items: center;
							}
							button.reponse3_button {
    						color: #000;
    						font-size: 219%;
    						border-radius: 10px;
    						margin: -150% -382% 22% 305%;
							}
							a.lien {
    						margin: -21% 24%;
    						font-size: 219%;
    						color: #fff;
							}
						}

						@media screen and (min-width: 1357px){
							.carousel{
    						display: flex;
    						align-items: flex-start;
    						flex-wrap: wrap;
							}
							img.picture {
    						width: 100%;
    						object-fit: cover;
    						height: 73vh;
    						margin-top: 3%;
							}
							h2.title_carousel {
								color: #fff;
    						font-size: 681%;
    						height: 100%;
    						text-align: center;
    						margin: -32% 9%;
							}
							.button_slide1 {
    						display: flex;
    						align-items: center;
							}
							button.reponse1_button {
								color: #000;
    						font-size: 219%;
    						border-radius: 10px;
    						margin: -71% -80% 8% 93%;
							}
							button.reponse2_button {
								color: #000;
    						font-size: 219%;
    						border-radius: 10px;
    						margin: -77% -169% 2% 90%;
							}
							.button_slide2 {
    						display: flex;
    						align-items: center;
							}
							button.reponse3_button {
    						color: #000;
    						font-size: 219%;
    						border-radius: 10px;
    						margin: -150% -442% 22% 416%;
							}
							a.lien {
    						margin: -16% 30%;
    						font-size: 219%;
    						color: #fff;
							}
						}
        	`}
        </style>
      </div>
    );
  }
}

export default Carousel;
