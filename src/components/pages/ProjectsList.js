import React from 'react';
import './Projects.css';
import './Footer.css';
import { Card, Button } from 'react-bootstrap';

// import from './images/icons/.png'

export default function ProjectList(props) {
  return (
    <div className="col-4">
      <Card className="shadow card-style" style={{ borderRadius: '10px', backgroundColor: '#ffffff', textAlign: 'center', }} >
        <Card.Img variant="top" src={props.project.picUrl} />
        <Card.Body style={{ paddingTop: '0' }}>
          <Card.Title style={{ fontSize: '1.3em', color: '#444444' }}><strong>{props.project.title}</strong></Card.Title>
          <Card.Text style={{ fontSize: '1.2em', textAlign: 'left', color: '#505050', padding: '15px' }}>{props.project.description}</Card.Text>
          <div>
            <Button />
            <Button />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
