import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Row, Form, Card, Col, Container, Image } from 'react-bootstrap'; 
import img1 from './Kontakt/sofa1.jpg';
import './FormContact.css';
import axios from "axios";

function FormContact(props) {

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
    <Container fluid className="px-5">
      <Row className="justify-content-center align-items-center mt-4">
        <Col xs={12} md={6}>
          <Image src={img1} style={{
            width: "100%",
            height: "500px",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)"}} 
          />
        </Col>
        <Col xs={12} md={6}>
          <Card className="border-0 bg-transparent p-3">
            <Card.Body className="d-flex flex-column gap-3">
              <Card.Title className="mb-3" style={{fontSize: "50px", fontFamily: "Time New Roman", textAlign: "center", padding:"40px"}}>
                Kontakt
              </Card.Title>
              <Card.Subtitle className="mb-3" style={{fontSize: "30px", fontFamily: "Helvetica", textAlign: "center"}}>Le të qëndrojmë në lidhje</Card.Subtitle>

              <Card.Text className="mb-3" style={{fontSize: "20px", fontFamily: "Time New Roman"}}>
                Gati për të gjetur shtëpinë tuaj të ëndrrave apo pronën për të investuar? Kontaktoni Domus për udhëzime ekspertësh në pasuritë e paluajtshme në Shqipëri. Le të bëjmë realitet ëndrrat tuaja për pronën!
              </Card.Text>
              <Card.Text className="mb-3" style={{fontSize: "20px", fontFamily: "Georgia"}}>
                Plotësoni formularin ne fund te faqes dhe një nga ekspertët tanë do të ju kontaktojë sa më shpejt.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center align-items-center mt-5 mb-5">
        <Col xs={12} md={6} className="mb-4">
          <div style={{
            width: "100%",
            height: "500px",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}>
            <iframe 
              title="Harta" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.987031012707!2d19.80793657587563!3d41.330895371307136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13503108e63a6ae5%3A0xe9d0ad8c8577203d!2sRruga%20e%20Durr%C3%ABsit%2C%20Tiran%C3%AB%2C%20Albania!5e0!3m2!1sen!2s!4v1745344618700!5m2!1sen!2s"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </Col>

        <Col xs={12} md={6}>
          <Card className="border-0 p-4" style={{ borderRadius: "15px", backgroundColor: "#f4f4f4" }}>
            <Card.Body>
              <Card.Title style={{ fontSize: "36px", fontWeight: "600", textAlign: "center", fontFamily: "Georgia", marginBottom: "20px" }}>
                Adresa
              </Card.Title>

              <Card.Subtitle className="mb-3 text-center" style={{ fontSize: "20px", fontFamily: "Arial" }}>
                Rruga e Durrësit, 1001, Tiranë
              </Card.Subtitle>

              <Card.Text className="mb-2 text-center" style={{ fontSize: "18px", fontFamily: "Arial" }}>
                📧 Email: <a href="mailto:domusconstruction@gmail.com">domusconstruction@gmail.com</a>
              </Card.Text>

              <Card.Text className="text-center" style={{ fontSize: "18px", fontFamily: "Arial" }}>
                ☎️ Tel: 044 235 67 <br />
                📱 Cel: +355 68 200 700
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="contact-background">
        <Card.Body className="contact-body">
          <Row className="justify-content-center">
            <Col md={8}>
              <Card.Title className="contact-title">
                Kontaktoni <i><strong>Domus Construction</strong></i> për Nevojat Tuaja në Prona!
              </Card.Title>

             
              {successMessage && (
                <div className="alert alert-success" role="alert">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="alert alert-danger" role="alert">
                  {errorMessage}
                </div>
              )}

              <div className="form-container">
                <Form onSubmit={handleSubmit}>
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
            </Col>
          </Row>
        </Card.Body>
      </div>
    </Container>
  );
}

export default FormContact;
