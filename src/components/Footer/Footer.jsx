

import styled from 'styled-components'


const StyledFooter = styled.footer`
  background-color: hsl(0, 0%, 50%);
  border-radius: 10px;
  margin-top: 20px; 
  margin: 80px 80px 0px 80px;


`; 



export default function Footer() {
  return (
    <StyledFooter>
      <div>Footer</div>
    </StyledFooter>
  )
}
