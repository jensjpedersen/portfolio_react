
import { Outlet, Link } from 'react-router-dom'

import styled from 'styled-components'

import { variables } from '../../global/variables.js'

const StyledNav = styled.nav`
background-color: ${variables.colors.background};
  height: ${variables.navHeight};
display: flex;
justify-content: end;
align-items: center;
margin-right: ${variables.navHeight};

ul {
  display: flex;
  list-style: none;
  justify-content: end; 
  gap: 1rem;


}


@media ${variables.media.sm} {

  justify-content: center;
  margin-right: 0;


`;

export default function Nav() {
  return (
    <>
      <StyledNav>

        <ul>
          <li><a href="">Link 2</a></li>
          <li><a href="">Link 3</a></li>

          <li>
            <Link to="/">Hjem</Link>
          </li>

          <li>
            <Link to="/projects">Prosjekter</Link>
          </li>
          <li><a href="">Link 2</a></li>
          <li><a href="">Link 3</a></li>
        </ul>



      </StyledNav>

      <Outlet/>
    </>
  )

}
