
import styled from 'styled-components'
import ProjectCard from '../components/ProjectCard' 


const StyledProjects = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


    margin-top: 5rem;
    

`


export default function Projects() {
    return (

        <StyledProjects>


            <h1>Projects</h1>

            Adipisicing quaerat sed laudantium totam recusandae Repellat voluptatem id laborum pariatur officia recusandae! Dolores rerum officiis dolor exercitationem odit. Reiciendis aliquid aliquam impedit perspiciatis cupiditate odit non ex? Commodi rerum


            <ProjectCard />
        </StyledProjects>

            
            

    )
}
