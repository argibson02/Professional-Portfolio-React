import React from 'react';
import Footer from './Footer.js';
import './Projects.css';
import './Footer.css';
import ProjectList from './ProjectsList.js';
import { projects } from '../../ProfileData.js';

export default function Projects() {
  return (
    // add a vh-100 here when fixing mobile view
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
