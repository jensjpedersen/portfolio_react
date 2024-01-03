
import styled from 'styled-components'
import heroImage from '/hero.jpeg'
import { variables } from '../global/variables.js'

console.log(heroImage);

// console.log(heroImage);
//
const StyledHero = styled.section`
  div#image-container {
    position: relative;

    padding: ${variables.navHeight};
    padding-top: 0;
    width: 100vw;
    min-width: 600px; 
    min-height: 300px;
  
    height: calc(100vh - ${variables.navHeight});

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .hero-text {
      position: absolute;
      bottom: 40%;
      left: 20%;
      // top: 100%;

    }

  }

  @media (max-width: 600px) {
    div#image-container {
      padding: 0;
      min-width: 0;

      .hero-text {
        bottom: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
    
      }
    }
  }

`


export default function Hero() {

  return (
    <StyledHero>
      <div id="image-container">
        <img src={heroImage} alt="som text"/>
        <div className="hero-text">
          <h1> Hello, I'm Jens </h1>
          <h2> This is some text</h2>
        </div>
      </div>
    </StyledHero>
  )

}
