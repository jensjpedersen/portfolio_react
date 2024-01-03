
import styled from 'styled-components'

const StyledNav = styled.nav`

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
