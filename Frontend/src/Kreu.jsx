import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import img1 from './Kreu/Aluna.jpg';
import img2 from './Kreu/art.jpg';
import img3 from './Kreu/img2.jpg';
import { Button } from 'react-bootstrap';
import {Row, Col, Card, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';



function Kreu() {
  const [contact, setContact] = useState({
    emri: "",
    mbiemri: "",
    email: "",
    fushainteresit: "",
    mesazhi: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/contactForm/", contact);
      setSuccessMessage("Të dhënat u dërguan me sukses!");
      setErrorMessage("");  
      setContact({ emri: "", mbiemri: "", email: "", fushainteresit: "", mesazhi: "" });  
    } catch (err) {
      setErrorMessage("Ndodhi një gabim gjatë dërgimit të të dhënave, ju lutemi provoni përsëri.");
      setSuccessMessage(""); 
    }
  };
  return (
    <>
    <Carousel fade interval={2000} pause={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Projekti i parë"
          style={{ objectFit: 'cover', height: '600px', maxHeight: '600px' }}
          
        />
        <Carousel.Caption
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '20px',
            borderRadius: '10px',
            maxWidth: '80%',
            margin: '0 auto'
          }}
        >
          <h1 style={{ fontSize: '60px', fontFamily: 'Arial', color: 'white' }}>
            Ndërtojmë të Ardhmen
          </h1>
          <h4 style={{ fontSize: '30px', color: 'white' }}>
            Eksperiencë, cilësi dhe profesionalizëm në çdo projekt.
          </h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Projekti i dytë"
          style={{ objectFit: 'cover', height: '600px', maxHeight: '600px' }}
        />
        <Carousel.Caption
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '20px',
            borderRadius: '10px',
            maxWidth: '80%',
            margin: '0 auto'
          }}
        >
          <h1 style={{ fontSize: '60px', fontFamily: 'Arial', color: 'white' }}>
            Projekte Infrastrukturore
          </h1>
          <h4 style={{ fontSize: '30px', color: 'white' }}>
            Rrugë, ura dhe sisteme moderne të ndërtuara me kujdes.
          </h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Projekti i tretë"
          style={{ objectFit: 'cover', height: '600px', maxHeight: '600px' }}
        />
        <Carousel.Caption
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '20px',
            borderRadius: '10px',
            maxWidth: '80%',
            margin: '0 auto'
          }}
        >
          <h1 style={{ fontSize: '60px', fontFamily: 'Arial', color: 'white' }}>
            Rinovime dhe Zhvillim Urban
          </h1>
          <h4 style={{ fontSize: '30px', color: 'white' }}>
            Transformim estetik dhe funksional për çdo ambient.
          </h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 
          <div style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#f8f9fa' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 'bold' }}>E ARDHMJA E JETËS URBANE</h2>
          <p style={{ fontSize: '20px', maxWidth: '800px', margin: '20px auto' }}>
            Domus është një revolucion civilizues që vendos njerëzit në qendër, duke ofruar një përvojë të unike të jetës urbane duke ruajtur natyrën përreth. 
            Ai riformulon konceptin e zhvillimit urban dhe atë se si duhet të duket shtëpia e së ardhmes.
          </p>
          <Link to="/projektet_tona">
          <Button variant="dark" size="lg">Shih të gjitha projektet</Button>
          </Link>
        </div>

        <div >
        <Row className="justify-content-center align-items-center mt-4">
  <Col xs={12}  md={6}>

 
  <video
  src="/videos/Aluna.mp4"  
  autoPlay
  muted
  loop
  style={{ width: '100%', height: 'auto', maxHeight: '600px', objectFit: 'cover', borderRadius: '10px' }}

/>
  </Col>
  
  <Col xs={12} md={6}>
    <Card className="border-0 bg-transparent p-3">
      <Card.Body className="d-flex flex-column gap-3">
        <Card.Title className="mb-3" style={{ fontSize: "50px", fontFamily: "Time New Roman", textAlign: "center", padding: "40px" }}>PROJEKTET E
        ARDHSHME</Card.Title>
        <Card.Subtitle className="mb-3" style={{ fontSize: "30px", fontFamily: "Helvetica", textAlign: "center" }}>2030</Card.Subtitle>

        <Card.Text className="mb-3" style={{ fontSize: "20px", fontFamily: "Time New Roman",  textAlign: "center" }}>
        PREZANTIMI I JETËS LUKSOZE: REZIDENCAT LOTUS VILLAGE
        </Card.Text>
        <Card.Text className="mb-3" style={{ fontSize: "20px", fontFamily: "Georgia" }}>
        Nisuni në një udhëtim për të krijuar strehën tuaj mes bashkimit të opulencës dhe gjelbërimit. Fshati Lotus, perla më e re rezidenciale në Tiranë, pozicionohet strategjikisht në një nga zonat më të kërkuara të qytetit. Duke ofruar vila luksoze me një arkitekturë unike që ndërthuret harmonikisht me natyrën.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
</Row>
</div>
<Row className="justify-content-center mt-5">
<Col xs={12} md={6} className="d-flex align-items-center" style={{ padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
          <div style={{ textAlign: 'center' }}>
           
            <h2 style={{ color: '#343a40' }}>Kontaktoni me Ne</h2>
            <p style={{ fontSize: '20px', color: '#6c757d' }}>
              Dërgoni një mesazh dhe ne do t'ju kontaktojmë sa më shpejt që të jetë e mundur. Ne jemi gjithmonë këtu për t'ju ndihmuar.
            </p>
           
          </div>
        </Col>


        <Col xs={12} md={6}>
          <div
            style={{
              backgroundColor: '#f8f9fa',
              padding: '30px',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div className="form-container">
                            <Form onSubmit={handleSubmit}>
                            {successMessage && (
  <div style={{ color: 'green', marginBottom: '10px', fontWeight: 'bold' }}>
    {successMessage}
  </div>
)}

{errorMessage && (
  <div style={{ color: 'red', marginBottom: '10px', fontWeight: 'bold' }}>
    {errorMessage}
  </div>
)}
                              <Form.Group className="mb-3" controlId="formBasicEmri">
                                <Form.Label>Emri</Form.Label>
                                <Form.Control type="text" placeholder="Emri" name="emri" value={contact.emri} onChange={handleChange} />
                              </Form.Group>
            
                              <Form.Group className="mb-3" controlId="formBasicMbiemri">
                                <Form.Label>Mbiemri</Form.Label>
                                <Form.Control type="text" placeholder="Mbiemri" name="mbiemri" value={contact.mbiemri} onChange={handleChange} />
                              </Form.Group>
            
                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" name="email" value={contact.email} onChange={handleChange} />
                              </Form.Group>
            
                              <Form.Group className="mb-3" controlId="formBasicInteresi">
                                <Form.Label>Fusha e Interesit</Form.Label>
                                <Form.Control type="text" placeholder="Fusha e Interesit" name="fushainteresit" value={contact.fushainteresit} onChange={handleChange} />
                              </Form.Group>
            
                              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Mesazhi</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Mesazhi" name="mesazhi" value={contact.mesazhi} onChange={handleChange} />
                              </Form.Group>
            
                              <Button variant="primary" type="submit">
                                Submit
                              </Button>
                            </Form>
                          </div>
          </div>
        </Col>
      </Row>
        </>
  );
}

export default Kreu;
