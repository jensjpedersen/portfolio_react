

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../../global/variables.js'
import { variables } from '../../global/variables.js'



const StyledLogo = styled.nav`
  // background-color: red; 
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  // border-radius: ${variables.border.radiusMd};
  padding: 0 10px;
  // background-color: hsl(218, 11%, 38%); 
  border-color: hsl(0, 0%, 100%); 
`; 

export default function Logo() {
  return (
    <StyledLogo>
      <Link to="/">
      <h2>Logo</h2>
      </Link>
    </StyledLogo>

  )
}

