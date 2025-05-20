import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';

const KartaProjektet = ({ id, image, title, area, description }) => {
  return (


<Card className="custom-card">
       
<Card.Img
  variant="top" 
  src={image} 
  className="project-image" />
<Card.Body className="card-body " style={{ backgroundColor: '#f0f0f0', textAlign: "left"}}>
        <Card.Title className="card-title" style={{ backgroundColor: '#f0f0f0', textAlign: "left"}}>{title}</Card.Title>
        <Card.Subtitle className="card-text" style={{ backgroundColor: '#f0f0f0', textAlign: "left"}}>{area}</Card.Subtitle>
        <Card.Text className="card-text" style={{ backgroundColor: '#f0f0f0', textAlign: "left"}}>{description}</Card.Text>
        
        <Link to={`/readOneItem/${id}`}>
  <Button variant="primary">Shiko më shumë</Button>
</Link>
      </Card.Body>
    </Card>

  );
};

export default KartaProjektet;
