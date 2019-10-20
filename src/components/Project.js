import React from 'react';
import PropTypes from 'prop-types'; // ES6
import '../css/Projects.css';

// project has a container, image, name, link with more info, github

const Project = (props) => {
    let name = props.name;
    let description = props.description;

    return (
        <div className="project-box">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
}

Project.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
}

export default Project;