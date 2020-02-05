import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import Link from 'next/link';

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

const Image2 = styled.img`
    height: 130%;
    margin-top: 2rem;
    position: relative;
    left: 25%;

    @media (max-width: 1000px) {
      
    }

    @media (max-width: 768px) {
      
    }
`;

const Brand = (props) => {
  if (props.router.pathname === '/') {
  return (
    <Link href="/">
    <Image2 src='https://imgur.com/Ale8ZJx.png' />
    </Link>
    )
  } else {
    return (
    <Link href="/">
    <Image src='https://imgur.com/nm6I0dU.png' />
    </Link>
  )
  }
};


export default withRouter(Brand);
