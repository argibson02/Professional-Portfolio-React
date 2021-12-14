import React from 'react';
import './ProjectsList.css';

export default function ProjectList(props) {
  return (
    <div className="col-lg-4">
      <div className="shadow card-style card">
        {/* <div className="card-img" variant="top" src={props.project.picUrl} /> */}
        <div className="card-body project-card" >
          <img src={props.project.pic} alt="projectImage" className="project-img" width="200" height="200" focusable="false" />
          <h4 className="card-title card-h4" >{props.project.title}</h4>
          <div className="card-text">{props.project.description}</div>
          <div className="center project-btn-box">
            {/* swap out these button color schemes later */}
            <button className="btn btn-secondary mx-2 project-btn"> <a href={props.project.appUrl} className="project-link" target="_blank" rel="noreferrer">Demo</a></button>
            <button className="btn btn-secondary mx-2 project-btn"> <a href={props.project.gitUrl} className="project-link" target="_blank" rel="noreferrer">Repo</a></button>
          </div>
        </div>
      </div>
    </div>
  );
}


