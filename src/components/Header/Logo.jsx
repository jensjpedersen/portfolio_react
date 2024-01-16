

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../../global/variables.js'
import { variables } from '../../global/variables.js'



const StyledLogo = styled.div`
  background-color: red; 
  display: flex;
  justify-content: center;
  align-items: center;
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

