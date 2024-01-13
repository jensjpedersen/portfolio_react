
import styled from 'styled-components';


const StyledIconMenu = styled.div`
    display: flex;
    // flex-direction: column;
    // align-items: center;

    transform: translateY(-60px);
    height: 0;

    img {
        filter: grayscale(100%);
        height: 50px; 
        width: 50px;
        transition: all 0.2s ease-in-out;

        &:hover {
            filter: grayscale(0%);
            scale: 1.5;
            z-index: 1;
            cursor: pointer;
        }
    }
`

export default function IconMenu() {
    return (
        <StyledIconMenu>
            <img src="/icons/devicon_neovim.svg" alt="neovim"/>
            <img src="/icons/logos_bash-icon.svg" alt="bash"/>
            <img src="/icons/logos_lua.svg" alt="lua"/>
        </StyledIconMenu>
    )
}
