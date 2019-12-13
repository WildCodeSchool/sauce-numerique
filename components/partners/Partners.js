import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import './Partners.css';

function Partners({ partners }) {
  console.log({ partners })

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Slider {...settings} autoplay>
      {partners.map((y) => (
        <div className="logo-partners" key={y.id}> 
          <img className="partners" src={y.logo} alt={y.id} />
        </div>
      ))}
    </Slider>
  );
}

export default Partners;
