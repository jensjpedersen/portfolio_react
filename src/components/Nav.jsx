
import styled from 'styled-components'

import { variables } from '../global/variables.js'

const StyledNav = styled.nav`
    background-color: ${variables.colors.background};
    height: ${variables.navHeight};
    ul {
        display: flex;
        list-style: none;
        justify-content: end; 
        gap: 1rem;
    }


    

`

export default function Nav() {
    return (
      <StyledNav>

            <ul>
                <li><a href="">Link 1</a></li>
                <li><a href="">Link 2</a></li>
                <li><a href="">Link 3</a></li>
            </ul>
        
        
      </StyledNav>
    )
  
  }
