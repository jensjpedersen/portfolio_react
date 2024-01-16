
import { variables } from '../../global/variables';
import Logo from './Logo';
import Nav from './Nav';

import styled from 'styled-components';

const StyledHeader = styled.header`
  // background-color: #000;
  display: flex;
  justify-content: space-between;
  // margin: 10px ${variables.dimensions.verticalMargin}; 
  // margin: 0px 110px; 

  top: 120px; 
  margin: 0px 120px;
  z-index: 1000;
  position: relative;


  nav {
    border: 2px solid; 
    border-color:  hsl(32, 6%, 55%); 
    background-color: hsla(0, 0%, 14%, 0.6); 
    border-radius: 20px; 


    a {
      color: hsl(0, 0%, 100%);
    }

  }



`



export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Nav />

    </StyledHeader>
  )
}

