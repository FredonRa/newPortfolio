import React, { useCallback } from 'react';
import { ProjectsArray } from './ProjectsArray'
import { GrGithub } from 'react-icons/gr'
import { FaRocket } from 'react-icons/fa'
import { Fade } from 'react-reveal'

import useWindowSize from '../hooks/useWindowSize' 

const Projects = () => {
    const size = useCallback(useWindowSize());
    const _renderProjects = ProjectsArray.map((project, index) => {
        return (
            <Fade key={index}>  
                <div className="containerProject">
                    <div className="containerPhotoProject">
                        <img src={size.width > 991 ? project.photoDesktop : project.photoMobile} alt={`Preview de proyecto ${project.name}`} />
                    </div>
                    <div>
                        <p>{project.name}</p>
                        <p>{project.tech}</p>
                        <p>{project.description}</p>
                    </div>
                    <div className="containerLinks">
                        {project.source ? <a href={project.source}><GrGithub /></a> : <></> }
                        {project.deploy ? <a href={project.deploy}><FaRocket /></a> : <></> }
                    </div>
                </div>
            </Fade>
        )
    })

    return (  
        <section className="container projects" id="projects">
            <h2>Proyectos</h2>
            <div>
            {_renderProjects}

            </div>
            {/* <Carousel breakPoints={breakPoints}>
                {_renderProjects}
            </Carousel> */}
        </section>
    );
}
 
export default Projects;