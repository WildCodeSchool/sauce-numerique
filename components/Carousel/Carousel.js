import React from 'react';
import './Carousel.css';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';


const Carousel = () => (
  <ResponsiveCarousel>
    <div>
      <img src="https://i.imgur.com/8udWuBw.jpg" alt="ordi" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src="https://i.imgur.com/JfnGK0j.jpg" alt="ordi" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src="https://i.imgur.com/au1L4wj.jpg" alt="ordi" />
      <p className="legend">Legend 3</p>
    </div>
  </ResponsiveCarousel>
);

export default Carousel;
