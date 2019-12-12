import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import Header from '../Header';


const CollapseWrapper = styled(animated.div)`
  background: #2d3436;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 50rem 2rem;
  text-align: center;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    display: block;
    font-size: 1.7rem;
    line-height: 2.5;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    text-align: center;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }

  & p {
    text-align: center;
    
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
            <p>Prout</p>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;
