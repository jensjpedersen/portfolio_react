
import Logo from './Logo';
import Nav from './Nav';
//

import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #000;
`



export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Nav />

    </StyledHeader>
  )
}

