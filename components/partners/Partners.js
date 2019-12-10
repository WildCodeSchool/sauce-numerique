import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import './Partners.css';

function Partners() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Slider {...settings}>
      <div>
        <img className="partners" src="https://i.imgur.com/W5Ardip.png" alt="Mame" />
      </div>
      <div>
        <img className="partners" src="https://i.imgur.com/7iXYgAI.png" alt="Wild Code School" />
      </div>
      <div>
        <img className="partners" src="https://i.imgur.com/iRZyUyX.jpg" alt="Tours" />
      </div>
      <div>
        <img className="partners" src="https://i.imgur.com/ykblB26.jpg" alt="Région Centre" />
      </div>
    </Slider>
  );
}
export default Partners;
