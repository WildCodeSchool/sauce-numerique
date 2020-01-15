import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import Header from '../Header';

const CollapseWrapper = styled(animated.div)`
  background: #3e53ce;
  top: 4.5rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  position: fixed;
  align-content: center;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
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
    width: 100px;
    margin: auto 0;
    margin-top: 20px;
`;

const Container = styled.div`
    display: grid;
    position: fixed;
    bottom: 1rem;
    left: 0rem;
    right: 0rem;
    font-size: 90%;

    & a {
      text-decoration: none;
      margin-right: 2px;
      margin-left: 2px;
    }

    & a:last-child {
      margin-right: 0
    }  
    & a:link {
      color: #FFFFFF
    }

    & a:visited {
      color: #FFFFFF
    }
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
          <Container>
            <a href="https://www.facebook.com" target="_blank">
              <Image src={'https://i.imgur.com/HOLM9VN.png'} alt="Facebook" />
            </a>
            <a href="https://www.eventbrite.com/o/nicolas-brondin-bernard-20254074974" target="_blank">
              <Image src={'https://i.imgur.com/8pSf4Kh.png'} alt="Eventbrite" />
            </a>
            <a href="https://www.helloasso.com/associations/la-sauce-numerique" target="_blank">
              <Image src={'https://i.imgur.com/SvjyzIR.png'} alt="Helloasso" />
            </a>
            <p>Crédits :
                  <a href="https://www.wildcodeschool.com/fr-FR" target="_blank">
                Wild Code School
                  </a>
              -
                  <a href="https://www.linkedin.com/in/alex-le-coq-a7b695101/" target="_blank">
                Alex' LE COQ
                  </a>
              -
                  <a href="https://www.linkedin.com/in/stanislas-vega-807b89163/" target="_blank">
                Stan VEGA
                  </a>
              -
                  <a href="https://www.linkedin.com/in/bruno-hoarau-dev-full-stack-javascript-893066137/" target="_blank">
                Bruno HOARAU
                  </a>
              -
                  <a href="https://www.linkedin.com/in/jean-marmain-2967a5168/" target="_blank">
                Jean MARMAIN
                  </a>
            </p>
          </Container>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;
