import React from 'react';
import './ProjectsList.css';

export default function ProjectList(props) {
  return (
    <div className="col-md-4">
      <div className="shadow card-style card">
        {/* <div className="card-img" variant="top" src={props.project.picUrl} /> */}
        <div className="card-body project-card" >
          <img src={props.project.pic} alt="projectImage" className="rounded-circle" width="200" height="200" focusable="false" />
          <div className="card-title" ><strong>{props.project.title}</strong></div>
          <div className="card-text">{props.project.description}</div>
          <div className="center">
            {/* swap out these button color schemes later */}
            <button className="btn btn-secondary mx-1"> <a href={props.project.appUrl} className="project-link" target="_blank" rel="noreferrer">Demo</a></button>
            <button className="btn btn-secondary mx-1"> <a href={props.project.gitUrl} className="project-link" target="_blank" rel="noreferrer">Git</a></button>
          </div>
        </div>
      </div>
    </div>
  );
}


