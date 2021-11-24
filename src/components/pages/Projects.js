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
      <div className="container page-bg">
        <div className="row">
          <section className="portfolio">
            <h1 className="heading project-h1">projects</h1>
            <hr className="line" />
            <br />
            <div className="row project-row">
              {projects.map((project) => (
                <ProjectList key={project.id} project={project} />
              ))}
            </div>
            <br />
            <br />
          </section>
        </div>
        <Footer />
      </div>
    </div >
  );
}
