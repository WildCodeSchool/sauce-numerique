import React from 'react';
import Slider from 'react-slick';


function Partners({ partners }) {
  console.log({ partners });

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
    ],
  };
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className="partner-container">
      <h1 className="title">Nos Partenaires</h1>
      <hr className="white-break" />
      <p className="partners-text">
        Privée ou Public, ils nous soutiennent dans notre action pour
        promouvoir la culture du numérique, l’accès
        à ce formidable outil pour toutes et tous. Vous souhaitez nous
        accompagner dans notre action ?
      </p>
      <a className="partners-link" href="/contact">
        Contactez nous dès maintenant >
      </a>
      <Slider {...settings} autoplay>
        {partners.map((y) => (
          <div className="slider-logo-partners" key={y.id}>
            <img className="logo-partners" src={y.logo} alt={y.id} />
          </div>
        ))}
      </Slider>
      <style jsx>
        {`
            .logo-partners{
              margin: auto;
            }

            .partner-container {
              background: #1F2040;
              padding-top: 6rem;
              padding-bottom: 1rem;
            }

            .logo-partners {
              display: flex;
              justify-content: center;
            }

            .title {
              margin: 0 auto;
              text-align: center;
              font-size: 6em;
              margin-bottom: 10px;
              font-weight: bold;
              color: #fff;
              text-shadow: 0 1px 2px rgba(black, 0.15);
            }
            
            hr.white-break {
              width: 3rem;
              height: 4px;
              background-color: #fff;
              border-style: none;
              border-radius: 2px;
              margin: auto;
            }
    
            .partners-link {
              color: #fff;
              font-size: 20px;
              margin-bottom: 50px;
              display: block;
              text-align: -webkit-center;
            }
            
            .partners-text {
              color: #fff;
              font-size: 2rem;
              margin: auto;
              padding: 5rem;
              text-align: justify;
            }

            @media screen and (min-width: 768px) {
              .partners-text {
                padding: 8rem 15rem 8rem 15rem;
              }
            }
    `}
      </style>
    </div>
  );
}

export default Partners;
