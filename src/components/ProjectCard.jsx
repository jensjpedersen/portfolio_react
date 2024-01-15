
import styled from 'styled-components'

const StyledProjectCard = styled.div`

    background-color: gray; 
    width: 500px;
    height: 300px;
    position: relative;
    border-radius: 10px;

    overflow: hidden;


    .background-image {
        width: 100%; 
        height: 100%;
        background-image: url(${props => props.img});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

    }

    .overlay {
        position: absolute;
        top: -50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: top 0.5s ease-in-out;
    }


    &:hover .overlay {
        width: 100%;
        height: 100%;
        top: 50%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex; 
        justify-content: center;
        align-items: center;

    }


    
`

export default function ProjectCard({ img }) {
    console.log('hello', img);

    return (
        <StyledProjectCard img={img}>
            <div className="background-image"></div>
            <div className="overlay">

                <div className="text">
                    <h3>Project title</h3>
                    <p>Short description </p>
                </div>
            </div>
        </StyledProjectCard>


    )

}
