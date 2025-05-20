import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

function FooterCom() {
  return (
    <footer className="footer bg-dark text-light mt-5">
      <Container>
        <Row className="py-4">
  
          <Col xs={12} sm={6} md={4}>
            <h5>Menu</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Kreu</Link></li>
              <li><Link to="/rreth_nesh" className="footer-link">Rreth Nesh</Link></li>
              <li><Link to="/projektet_tona" className="footer-link">Projektet</Link></li>
              <li><Link to="/na_kontaktoni" className="footer-link">Kontakt</Link></li>
            </ul>
          </Col>

  
          <Col xs={12} sm={6} md={4}>
            <h5>Kontakt</h5>
            <p>Email: info@shembull.com</p>
            <p>Tel: +355 68 123 4567</p>
            <p>Adresa: Tirana, Albania</p>
          </Col>

          <Col xs={12} sm={6} md={4} className="text-md-end">
            <p>© {new Date().getFullYear()} Të gjitha të drejtat e rezervuara.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterCom;
