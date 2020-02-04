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
					title: 'Passez-vous plus de trois heures par jour devant un écran ?',
					question: 'Question 1/10',
          background: 'https://i.imgur.com/GqfznhP.jpg',
          reponse1: 'Non',
          reponse1_method: ()=>{
            this.Carousel.current.slideTo(2)
          },
          reponse2: 'Oui',
          reponse2_method: ()=>{
            this.Carousel.current.slideTo(3)
          }
        },
        {
          id: 2,
					title: 'En moyenne les français passent 5h07 devant un écran tous les jours.',
					question: 'Question 2/10',
          background: 'https://i.imgur.com/GqfznhP.jpg',
          link_name: 'Je veux voir l’étude à ce sujet>',
          link_url: 'https://www.francetvinfo.fr/internet/objets-connectes/sante-nous-passons-deux-heures-de-plus-devant-nos-ecrans-qu-il-y-a-dix-ans_2592848.html',
          reponse2: 'Découvrir d’autres informations.',
          reponse2_method: ()=>{
            this.Carousel.current.slideTo(3)
          },
        },
        {
          id: 3,
          title: '18% des adultes n’utilisent jamais d’outils numériques.',
          question: 'Question 3/10',
          background: 'https://i.imgur.com/i8VtfFM.jpg',
          reponse1: 'Faux',
          reponse1_method: ()=>{
            this.Carousel.current.slideTo(4)
          },         
          reponse2: 'Vrai',
          reponse2_method: ()=>{
            this.Carousel.current.slideTo(5)
          },
        },
        {
          id: 4,
          title: " Vrai. Cela représente quasiment un adulte sur cinq qui n'a pas accès ou ne sait pas utiliser un ordinateur ou un smartphone.",
          question: 'Question 4/10',
          background: 'https://i.imgur.com/i8VtfFM.jpg',
          link_name: 'Je veux voir l’étude à ce sujet>',
          link_url: 'https://www.insee.fr/fr/statistiques/4175696',
          reponse2: 'Découvrir d’autres informations',
          reponse2_method: ()=>{
            this.Carousel.current.slideTo(5)
          },
        },
        {
          id: 5,
          title: '1 jeune sur 5 serait victime de cyber-harcèlement.',
          question: 'Question 5/10',
          background: 'https://i.imgur.com/taE9ZNC.jpg',
          reponse1: 'Faux',
          reponse1_method: ()=>{
            this.Carousel.current.slideTo(6)
          },         
          reponse2: 'Vrai',
          reponse2_method: ()=>{
            this.Carousel.current.slideTo(7)
          },
        },
        {
          id: 6,
          title: 'Cyber-harcèlement: 22% des jeunes assurent en avoir déjà été victimes.',
          question: 'Question 6/10',
          background: 'https://i.imgur.com/taE9ZNC.jpg',
          link_name: 'Je veux voir l’étude à ce sujet>',
          link_url: 'https://www.20minutes.fr/high-tech/2451923-20190215-cyber-harcelement-22-jeunes-assurent-avoir-deja-victimes',
          reponse2: 'Découvrir d’autres informations',
          reponse2_method: ()=>{
            this.Carousel.current.slideTo(7)
          },
        },
        {
          id: 7,
          title: 'La moitié des français sont inquiétés par l’intelligence artificielle.',
          question: 'Question 7/10',
          background: 'https://i.imgur.com/Ii2nNF0.jpg',
          reponse1: 'Faux',
          reponse1_method: ()=>{
            this.Carousel.current.slideTo(8)
          },         
          reponse2: 'Vrai',
          reponse2_method: ()=>{
            this.Carousel.current.slideTo(9)
          },
        },
        {
          id: 8,
          title: '56% de français ont peur de l’IA.',
          question: 'Question 8/10',
          background: 'https://i.imgur.com/Ii2nNF0.jpg',
          link_name: 'Découvrir d’autres informations',
          link_url: 'https://livre.fnac.com/a12970716/Luc-Julia-L-intelligence-artificielle-n-existe-pas',
          link_name: 'Je veux voir l’étude à ce sujet>',
          link_url: 'https://fr.statista.com/statistiques/950599/peur-ressentie-face-a-l-intelligence-artificielle-france/ ',
          reponse2: 'Découvrir d’autres informations',
          reponse2_method: ()=>{
            this.Carousel.current.slideTo(9)
          },
        },
        {
          id: 9,
          title: 'L’addiction aux jeux vidéo existe-t-elle ?',
          question: 'Question 9/10',
          background: 'https://i.imgur.com/gvooGc4.jpg',
          reponse1: 'Non',
          reponse1_method: ()=>{
            this.Carousel.current.slideTo(10)
          },         
          reponse2: 'Oui',
          reponse2_method: ()=>{
            this.Carousel.current.slideTo(10)
          },
        },
        {
          id: 10,
          title: 'Oui cela existe, c’est une addiction comportementale, entre 2% et 5% de joueurs sont touchés.',
          question: 'Question 10/10',
          background: 'https://i.imgur.com/gvooGc4.jpg',
          link_name: 'Je veux voir l’étude à ce sujet>',
          link_url: 'https://www.ifac-addictions.fr/accro-au-jeu-video.html',
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
                <div>
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
    						width: 100vw;
    						object-fit: cover;
    						height: 73vh;
    						margin-top: 0;
							}
              .text_container{
                text-align: center;
              }
							h2.question {
                display: block;
                margin: -106% -48% 30% 33%;
                color: #fff;
                font-size: 180%;
              }
							hr.white-break {
                display: block;
                color: #000;
                margin: -95% -45% 2% 28%;
                width: 3rem;
                height: 4px;
                background-color: #fff;
                border-style: none;
                border-radius: 2px;
							}
							h2.title_carousel {
                color: #fff;
                font-size: 268%;
                height: 100%;
                text-align: center;
                margin: -92% 18%;
                max-width: 64%;
                min-width: 30%;
							}
              .button_container {
                margin: -26% 27%;
              }
							button.reponse1_button {
    						font-size: 128%;
                margin: 16px;
                border: none;
                border-radius: 6px;
                min-width: 36vw;
                max-width: 48vw;
							}            
							button.reponse2_button {
    						font-size: 128%;
                border: none;
                border-radius: 6px;
                margin: 0 0 0 11%;
                min-width: 36vw;
                max-width: 48vw;
							}
              a.lien {
                color: #FFF;
                font-size: 118%;
                line-height: 11vh;
                margin: -42% 2% 2% 32%;
              }  							
        	`}
        </style>
      </div>
    );
  }
}

export default Carousel;
