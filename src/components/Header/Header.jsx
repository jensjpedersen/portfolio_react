
import { variables } from '../../global/variables';
import Logo from './Logo';
import Nav from './Nav';
//

import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #000;
  display: flex;
  justify-content: space-between;
  margin: 0 ${variables.dimensions.verticalMargin}; 
`



export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Nav />

    </StyledHeader>
  )
}

