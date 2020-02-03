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
          reponse1_method: ()=>{
            this.Carousel.current.slideTo(2)
          },
          reponse2: '8h! Et c’est bien trop!',
          reponse2_method: ()=>{
            this.Carousel.current.slideNext()
          }
        },
        {
          id: 2,
					title: 'Eh oui… 8h d’écrans par jour avec 7 écrans par famille en moyenne.',
					question: 'Question 2/2',
          background: 'https://i.imgur.com/uIVo5Ie.png',
          link_name: 'Je veux voir l’étude à ce sujet>',
          link_url: 'https://www.inspq.qc.ca/pdf/publications/2154_temps_ecran_habitudes_vie.pdf',
          reponse1: 'Pas étonnant…',
          reponse1_method: ()=>{
            this.Carousel.current.slideNext()
          },
        },
        {
          id: 3,
          title: 'Coucou',
          background: 'https://i.imgur.com/uIVo5Ie.png',
          link_name: 'Je veux voir l’étude à ce sujet>',
          link_url: 'https://www.inspq.qc.ca/pdf/publications/2154_temps_ecran_habitudes_vie.pdf',
          reponse1: 'Pas étonnant…',
          reponse1_method: ()=>{
            this.Carousel.current.slideNext()
          },
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
              <div className="button_container">
              
                <div className="button_slide1">
                  {
                  item.reponse1 &&
                    <button className="reponse1_button" onClick={item.reponse1_method}>{item.reponse1}</button>
                  }
                  {
                  item.reponse2 &&
                    <button className="reponse2_button" onClick={item.reponse2_method}>{item.reponse2}</button>
                  }
                </div>
              
              </div>
              {
                item.link_url &&
                <a className="lien" href={item.link_url} target="_blank">{item.link_name}</a>
              }
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
