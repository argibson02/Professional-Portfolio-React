import React from 'react';
import './Projects.css';
import './Footer.css';
import Footer from './Footer.js';
import ProjectList from './ProjectsList.js';
import { projects } from '../../ProfileData.js';
// import from './images/icons/.png'

export default function Projects() {
  return (
    <div className="page-bg">
      <div className="container">
        <div className="row mb-3">
          <section className="portfolio">
            <h1 className="heading project-h1">projects</h1>
            <hr className="line" />
            <div className="row project-row">
              {projects.map((project) => (
                <ProjectList key={project.id} project={project} />
              ))}
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div >
  );
}
