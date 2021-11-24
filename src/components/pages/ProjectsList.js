import React from 'react';
import './Projects.css';
import './Footer.css';

// import from './images/icons/.png'

export default function ProjectList(props) {
  return (
    <div className="col-md-4">
      <div className="shadow card-style card">
        <div className="card-img" variant="top" src={props.project.picUrl} />
        <div className="card-body" >
          <div className="card-title" ><strong>{props.project.title}</strong></div>
          <div className="card-text">{props.project.description}</div>
          <div className="center">
            {/* swap out these button color schemes later */}
            <button className="btn btn-secondary mx-1"  >Demo</button>
            <button className="btn btn-secondary mx-1"  >Git</button>
          </div>
        </div>
      </div>
    </div>
  );
}
