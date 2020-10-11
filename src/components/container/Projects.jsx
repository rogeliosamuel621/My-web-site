import React from 'react';
import '../../assets/styles/containers/projects.css';

import { ProjectsData } from '../../assets/Projects.js';
import { Project } from '../molecules';
import { Title, GreenText } from '../atoms';
import CodeIcon from '../../assets/img/code.svg';

const Projects = () => {
  return (
    <main className="Projects">
      <div className="Projects-Title">
        <Title content="Projects" />
        <img src={CodeIcon} alt="Code icon" width="30px" height="30px" />
      </div>
      <div className="Projects-project-container">
        {ProjectsData.map((project, index) => (
          <Project
            key={project.ID}
            projectTitle={project.title}
            projectImage={project.image}
            projectDescription={project.littleDescription}
            projectCode={project.Repo}
            projectDemo={project.demo}
          />
        ))}
      </div>
      <div className="Projects-ViewAll">
        <GreenText content="View all" />
      </div>
    </main>
  );
};

export default Projects;