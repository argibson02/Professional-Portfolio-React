import React from 'react';
import './ProjectsList.css';

// import from './images/icons/.png'

export default function ProjectList(props) {
  return (
    <div className="col-md-4">
      <div className="shadow card-style card">
        {/* <div className="card-img" variant="top" src={props.project.picUrl} /> */}
        <div className="card-body" >
          <img src={props.project.picUrl} alt="projectImage" className="rounded-circle" width="140" height="140" preserveAspectRatio="xMidYMid slice" focusable="false" />
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
