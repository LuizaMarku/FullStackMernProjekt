import React from "react";
import img1 from './Karriera/office.jpg';
import { Image, Container,Card, Row, Col, Button } from 'react-bootstrap';
import './Karriera.css';
import img3 from './Karriera/luizamarku.jpg';
import img4 from './Karriera/imgphotocard.jpg';
import img2 from './Karriera/mencard.jpg';
import img5 from './Karriera/imgcard1.jpg';
import img6 from './Karriera/imgcard2.jpg';
import img7 from './Karriera/cardimagemen.jpg'

export function Karriera () {

    return (
        <Container fluid style={{ padding: 0 }}>
        <div className="karriera-wrapper">
          <Image src={img1} fluid className="karriera-img" />
  
          <div className="karriera-overlay" />
  
          <div className="karriera-text">
            <p>Karriera në Domus</p>
            <h1>Bashkohuni me Ekipin e Domus</h1>
            <h5>
              Zbuloni mundësi joshëse karriere në Domus. Ne jemi të përkushtuar për të ndërtuar një ekip dinamik dhe inovativ profesionistësh që ndajnë vizionin tonë për ekselencë në inxhinieri, ndërtim dhe menaxhim projektesh. Eksploroni se si mund të kontribuoni në suksesin tonë dhe të rriteni me ne.
            </h5>
          </div>
        </div>
     


     <h1
  style={{
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "40px",
    fontFamily: "Georgia, serif",
    fontWeight: "bold",
    color: "#2c3e50", 
    borderBottom: "4px solid #3498db", 
    paddingBottom: "10px", 
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease", 
  }}
  onMouseOver={(e) => e.target.style.color = "#3498db"} 
  onMouseOut={(e) => e.target.style.color = "#2c3e50"} 
>
  Kush Jemi Ne ?
</h1>

<Row className="justify-content-center gap-4 my-5">
   
      <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
        <Card className="card-custom"> 
          <Card.Img variant="top" src={img5} className="card-custom-img" /> 
          <Card.Body className="text-center">
            <Card.Title className="card-custom-title">John Doe</Card.Title> 
            <Card.Subtitle className="card-custom-subtitle mb-2">CEO & Founder</Card.Subtitle>
            <Card.Text className="card-custom-text">
              Me mbi 20 vite përvojë në industrinë e ndërtimit dhe pasurive të paluajtshme.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

         
           <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
        <Card className="card-custom"> 
          <Card.Img variant="top" src={img2} className="card-custom-img" /> 
          <Card.Body className="text-center">
            <Card.Title className="card-custom-title">Andrea Jan</Card.Title> 
            <Card.Subtitle className="card-custom-subtitle mb-2">Inxhinier Kryesor</Card.Subtitle>
            <Card.Text className="card-custom-text">
            Ekspert në drejtimin e projekteve të ndërtimit dhe zgjidhjeve teknike moderne.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>


      <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
        <Card className="card-custom">
          <Card.Img variant="top" src={img3} className="card-custom-img" />
          <Card.Body className="text-center">
            <Card.Title className="card-custom-title">Luiza Marku</Card.Title>
            <Card.Subtitle className="card-custom-subtitle mb-2">Drejtor i Shitjeve</Card.Subtitle>
            <Card.Text className="card-custom-text">
              Specialiste e pasurive të paluajtshme, me eksperience 5 vjecare ne kete sektor.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <h1
  style={{
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "40px",
    fontFamily: "Georgia, serif",
    fontWeight: "bold",
    color: "#2c3e50",
    borderBottom: "4px solid #3498db", 
    paddingBottom: "10px", 
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", 
    transition: "all 0.3s ease", 
  }}
  onMouseOver={(e) => e.target.style.color = "#3498db"} 
  onMouseOut={(e) => e.target.style.color = "#2c3e50"} 
>
Bashkohuni me Ekipin tone<br/>
Po kerkojme:
</h1>

<Row className="justify-content-center gap-4 my-5">
  
      <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
        <Card className="card-custom"> 
          <Card.Img variant="top" src={img4} className="card-custom-img" />
          <Card.Body className="text-center">
            <Card.Title className="card-custom-title">Kerkojme Specialiste Shitje</Card.Title> 
            <Card.Subtitle className="card-custom-subtitle mb-2"></Card.Subtitle>
            <Card.Text className="card-custom-text">
            Specialiste me përvojë në sektorin e shitjeve dhe këshillimit të klientëve. E aftë të ndërtojë marrëdhënie afatgjata dhe të shtojë vlerë në çdo bashkëpunim.
        
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>


      <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
        <Card className="card-custom">
          <Card.Img variant="top" src={img7} className="card-custom-img" />
          <Card.Body className="text-center">
            <Card.Title className="card-custom-title">Kerkojme Inxhinier Ndertimi</Card.Title>
            <Card.Subtitle className="card-custom-subtitle mb-2"></Card.Subtitle>
            <Card.Text className="card-custom-text">
            Inxhinier ndërtimi me eksperiencë të gjerë në projekte infrastrukturore dhe struktura civile. I specializuar në menaxhimin e kantierëve dhe kontrollin e cilësisë.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
       
           <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
        <Card className="card-custom">
          <Card.Img variant="top" src={img6} className="card-custom-img" />
          <Card.Body className="text-center">
            <Card.Title className="card-custom-title">Kerkojme Arkitekte</Card.Title>
            <Card.Subtitle className="card-custom-subtitle mb-2"></Card.Subtitle>
            <Card.Text className="card-custom-text">
            Arkitekte me përvojë të gjerë në projektimin rezidencial dhe komercial. Njohëse e shkëlqyer e softuerëve arkitektonikë dhe trendeve moderne.

            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
        
           
    </Row>
       
      </Container>
    )
}

export default Karriera;