import React from 'react';
import Project from './Project';
import '../css/Projects.css';

const projectsData = [
    {
        id: 1,
        name: "Reading Champ",
        description: "Keep track of books read. React, GraphQL"
    },
    {
        id: 2,
        name: "Book Master",
        description: "Keep track of books read. React, GraphQL"
    },
    {
        id: 3,
        name: "Context app",
        description: "Keep track of books read. React, GraphQL"
    },
    {
        id: 4,
        name: "anderslundback.com",
        description: "Keep track of books read. React, GraphQL"
    }
]

const Projects = () => (
    <div>
        <h1>Projects</h1>
        <div className="projects-wrapper">
            {projectsData.map(project =>
                <Project name={project.name} description={project.description} />)};
            {console.log(projectsData)}
            {console.log(...projectsData)}



        </div>
    </div>
)

export default Projects
