
import styled from 'styled-components'

const StyledProjectCard = styled.div`

    background-color: gray; 
    width: 500px;
    height: 200px;


`



export default function ProjectCard({ img }) {

    return (
        <StyledProjectCard>
            <h3>Project title</h3>

            <p>Proejct discriptio: Adipisicing ullam hic officia dicta mollitia. Earum aperiam natus perspiciatis animi fugit! Quia eveniet sint ipsa eos incidunt vero. Voluptatem quisquam dolore consequuntur alias tempora sequi Nam architecto voluptate odio</p>
        </StyledProjectCard>


    )





}
