import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import Header from '../Header';

const CollapseWrapper = styled(animated.div)`
  background: #3e53ce;
  top: 4rem;
  left: 0;
  right: 0;
  z-index: 1;
  position: fixed;

  & img {
    display: inline-grid;
  }
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 35rem 2rem;
  text-align: center;

  & li {
    transition: all 300ms linear 0s;
  }

  & p {
    bottom: 0;
    text-align: center;
    width: 100%;
    color: white;
    margin-top: 20px;
  }

  & .navbar__link {
    display: block;
    font-size: 1.7rem;
    line-height: 2.5;
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;
    text-align: center;

    &:hover {
      color: #ffffff;
      border-bottom: 1px solid #ffffff;
    }
  }
}
`;

const Image = styled.img`
    display:flex;
    width: 100px;
    margin: auto 0;
    margin-top: 20px;
`;

const ImageContainer = styled.div`
    display: grid;
    text-align: -webkit-center;
    bottom: 0;
    margin-top: 50px;
`;


const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate((openValue) => `translate3d(0, ${openValue}px, O`),
      }}
      >
        <NavLinks>
            <Header />
            <ImageContainer>
              <a href="https://www.facebook.com">
                <Image src={'https://i.imgur.com/HOLM9VN.png'} alt="Facebook" />
              </a>
              <a href="https://www.eventbrite.com/o/nicolas-brondin-bernard-20254074974">
                <Image src={'https://i.imgur.com/8pSf4Kh.png'} alt="Eventbrite" />
              </a>
              <a href="https://www.helloasso.com/associations/la-sauce-numerique">
                <Image src={'https://i.imgur.com/SvjyzIR.png'} alt="Helloasso" />
              </a>
            </ImageContainer>
            <p>Crédits: Wild Code School - Alex' LE COQ - Stan VEGA - Bwouno - Jean MARMAIN</p>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;
