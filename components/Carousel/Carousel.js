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
          title: 'En moyenne et par jour,combien de temps passons-nous devant des écrans ?',
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
            <div key={item.id}>
              <img className="picture" src={item.background} alt="people" />
              <h2 className="title_carousel">{item.title}</h2>
              <button className="reponse1_button" onClick={() => this.Carousel.current.slideNext()}>{item.reponse1}</button>
              <button className="reponse2_button" onClick={() => this.Carousel.current.slideNext()}>{item.reponse2}</button>
              <button className="reponse3_button" onClick={() => this.Carousel.current.slideNext()}>{item.reponse3}</button>
              <a className="lien" href="https://www.inspq.qc.ca/pdf/publications/2154_temps_ecran_habitudes_vie.pdf" target="_blank">{item.lien}</a>
            </div>
          ))}
          buttonsDisabled
          dotsDisabled
        />
        <style jsx>
          {`
						img.picture {
    					width: 100%;
    					margin-top: 5em;
    					object-fit: cover;
    					height: 63vh;
						}
						h2.title_carousel {
							font-size: 72px;
    					position: relative;
    					bottom: 32vh;
    					left: 0vh;
    					margin-top: -24vh;
    					color: #fff;
    					text-align: center;
							font-weight: 900;
						}
						button.reponse1_button {
    					position: relative;
    					bottom: 22vh;
    					left: 53vh;
    					font-size: 3vh;
    					width: 18vw;
    					border-radius: 2vh;
							border: none;
						}
						button.reponse2_button {
							position: relative;
    						bottom: 22vh;
    						left: 60vh;
    						font-size: 3vh;
    						width: 18vw;
    						border-radius: 2vh;
								border: none;
						}
						button.reponse3_button {
							position: relative;
    						bottom: 15vh;
    						left: 7vh;
    						font-size: 3vh;
    						width: 18vw;
    						border-radius: 2vh;
								border: none;
						}
						a.lien {
    					font-size: 2vh;
    					position: relative;
    					bottom: 26vh;
    					right: 21vh;
    					color: #fff;
    					font-weight: 900;
						}
        	`}
        </style>
      </div>
    );
  }
}

export default Carousel;
