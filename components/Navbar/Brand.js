import React from 'react';
import styled from 'styled-components';

const Brand = () => {
  return (
    <Image src='https://imgur.com/nm6I0dU.png'>
    </Image>
);
}

const Image = styled.img`
    height: 50%;
    margin: auto;
    position: relative;
    left: 15%;

    @media (max-width: 1000px) {
      left: -10%;
    }

    @media (max-width: 768px) {
      left: 0%;
    }
`;

export default Brand;
