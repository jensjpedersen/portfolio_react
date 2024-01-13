
import styled from 'styled-components'
import ProjectCard from '../components/ProjectCard' 
import IconMenu from '../components/IconMenu'
import rangerImg from "/project-cards/ranger_nvim.png"


const StyledProjects = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;


    margin-top: 5rem;
    

`


export default function Projects() {
    return (

        <StyledProjects>


            <h1>Projects</h1>
            <p>Feel free to check out some of my projects</p>



            <ProjectCard img={rangerImg} />
            <ProjectCard />
            <ProjectCard />


            <ProjectCard>

            </ProjectCard>

            <IconMenu />




        </StyledProjects>

            
            

    )
}
