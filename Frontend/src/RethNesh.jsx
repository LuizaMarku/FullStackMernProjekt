import React from "react";
import img1 from './RrethNesh/Rrethnesh.jpg';
import img2 from './RrethNesh/abutus.jpg';
import { Row, Card, Col, Container, Image } from 'react-bootstrap';
import './RrethNesh.css'
function RethNesh() {
  return (
    <Container className="container-image" id="rreth-nesh">

      <section>
        <Row className="justify-content-center align-items-center mt-4">
          <Col md={6}>
            <Card className="border-0 bg-transparent p-3">
              <Card.Body className="d-flex flex-column gap-3">
                <Card.Title className="mb-3" style={{ fontSize: "50px", fontFamily: "Times New Roman", textAlign: "center", padding: "40px" }}>
                  Rreth Domus Construction
                </Card.Title>

                <Card.Text className="mb-3" style={{ fontSize: "20px", fontFamily: "Times New Roman" }}>
                  Domus shpk është një shoqëri ndërtimi e cila ushtron aktivitetin e saj në Shqipëri që prej vitit 2013 në rolin e investitorit dhe ndërtuesit.
                  Shoqëria është e specializuar në ndërtime rezidenciale, industriale, vepra publike dhe infrastrukturore.
                </Card.Text>

                <Card.Text className="mb-3" style={{ fontSize: "20px", fontFamily: "Times New Roman" }}>
                  Domus ka përfunduar me sukses 158,053 m2 projekte ndërtimi, përfshirë rezidenca si Domus 1, Domus 2, Rainbow dhe IRIS.
                  Shoqëria gjithashtu ka ndërtuar projekte për organizata si UNDP, Eagle Hills, FARA, ALEAT, Bashkia Tiranë etj.
                </Card.Text>

                <Card.Text className="mb-3" style={{ fontSize: "20px", fontFamily: "Times New Roman" }}>
                  Aktualisht, Domus shpk po zhvillon projekte ndërtimi me një sipërfaqe totale prej 196,363 m2, ku 165,351 m2 janë si investitor dhe 31,012 m2 si kontraktor.
                </Card.Text>

                <Card.Text className="mb-3" style={{ fontSize: "20px", fontFamily: "Times New Roman" }}>
                  Domus shpk angazhohet për cilësinë, sigurinë dhe inovacionin në çdo projekt duke ndërtuar për një të ardhme më të mirë për të gjithë.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Image src={img1} rounded fluid />
          </Col>
        </Row>
      </section>

      
      <section>
     
        <Row className="justify-content-center align-items-center mt-4">
          <Col md={6}>
            <Image src={img2} rounded fluid />
          </Col>

          <Col md={6}>
            <Card className="border-0 bg-transparent p-3">
              <Card.Body className="d-flex flex-column gap-3">
                <Card.Title className="mb-3" style={{ fontSize: "40px", fontFamily: "Times New Roman", textAlign: "center", padding: "30px" }}>
                Struktura e Stafit Tonë
                </Card.Title>

                <Card.Subtitle className="mb-3" style={{ fontSize: "24px", fontFamily: "Helvetica", textAlign: "left" }}>
                Stafi ynë përbëhet nga një ekip i dedikuar dhe i kualifikuar, i ndarë në disa sektorë kyç për të siguruar cilësi dhe efikasitet në çdo projekt:
                </Card.Subtitle>

                <Card.Text className="mb-3" style={{ fontSize: "20px", fontFamily: "Georgia", textAlign: "left" }}>
                Ndërtimi: Menaxhon planifikimin dhe realizimin e projekteve ndërtimore, duke siguruar përmbushjen e standardeve të cilësisë dhe sigurisë.
                </Card.Text>

                <Card.Text className="mb-3" style={{ fontSize: "20px", fontFamily: "Georgia", textAlign: "left"}}>
                Inxhinierët: Sigurojnë zbatimin e zgjidhjeve teknike dhe inovative për çdo fazë të projektit.
                </Card.Text>
                <Card.Text className="mb-3" style={{ fontSize: "20px", fontFamily: "Georgia", textAlign: "left" }}>
                Sektori i Shitjes: Përgjegjës për zhvillimin e marrëdhënieve me klientët dhe menaxhimin e marrëveshjeve.
                </Card.Text>
                <Card.Text className="mb-3" style={{ fontSize: "20px", fontFamily: "Georgia", textAlign: "left" }}>
            Marketingu: Krijon dhe implementon strategji për promovimin e shërbimeve dhe rritjen e pranisë në treg.
                </Card.Text>

                <Card.Text className="mb-3" style={{ fontSize: "20px", fontFamily: "Georgia", textAlign: "left"}}>
                Burimet Njerëzore dhe Administrata: Mbështesin operacionet ditore dhe menaxhojnë zhvillimin e stafit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
      <section>
  <Row className="justify-content-center align-items-center mt-5">
    <Col md={6}>
      <Card className="border-0 bg-transparent p-3">
        <Card.Body>
          <Card.Title className="text-center" style={{ fontSize: "40px", fontFamily: "Times New Roman", marginBottom: "20px" }}>
            Misioni ynë
          </Card.Title>
          <Card.Text style={{ fontSize: "20px", fontFamily: "Georgia", textAlign: "center" }}>
            Të ndërtojmë ambiente të sigurta, moderne dhe të qëndrueshme që përmirësojnë jetën e komunitetit tonë.
            Domus përpiqet për perfeksion në çdo projekt dhe shërbim që ofron.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col md={6}>
      <Card className="border-0 bg-transparent p-3">
        <Card.Body>
          <Card.Title className="text-center" style={{ fontSize: "40px", fontFamily: "Times New Roman", marginBottom: "20px" }}>
            Vizioni ynë
          </Card.Title>
          <Card.Text style={{ fontSize: "20px", fontFamily: "Georgia", textAlign: "center" }}>
            Të jemi lider në industrinë e ndërtimit në rajon, duke sjellë inovacione teknologjike dhe duke ruajtur standardet më të larta të cilësisë dhe etikës profesionale.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</section>
<section>
  <h2 className="text-center mt-5" style={{ fontSize: "45px", fontFamily: "Times New Roman", marginBottom: "40px" }}>
    Çfarë thonë klientët tanë
  </h2>

  <Row className="justify-content-center">
    <Col md={4}>
      <Card className="shadow-sm border-0 p-4 mb-4">
        <Card.Body>
          <Card.Text style={{ fontSize: "18px", fontFamily: "Georgia", fontStyle: "italic" }}>
            "Domus realizoi projektin tonë me përpikmëri dhe profesionalizëm të jashtëzakonshëm. Jemi shumë të kënaqur me cilësinë e ndërtimit dhe shërbimin e ofruar."
          </Card.Text>
          <Card.Subtitle className="text-muted mt-3" style={{ fontSize: "16px" }}>
            — Klient Privat, Tiranë
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>

    <Col md={4}>
      <Card className="shadow-sm border-0 p-4 mb-4">
        <Card.Body>
          <Card.Text style={{ fontSize: "18px", fontFamily: "Georgia", fontStyle: "italic" }}>
            "Bashkëpunimi me Domus për projektet tona rezidenciale ka qenë një sukses i vërtetë. Profesionalizëm në çdo detaj."
          </Card.Text>
          <Card.Subtitle className="text-muted mt-3" style={{ fontSize: "16px" }}>
            — Përfaqësues i Shoqatës FARA
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>

    <Col md={4}>
      <Card className="shadow-sm border-0 p-4 mb-4">
        <Card.Body>
          <Card.Text style={{ fontSize: "18px", fontFamily: "Georgia", fontStyle: "italic" }}>
            "Domus na ofroi një qasje inovative dhe profesionale në çdo fazë të ndërtimit. Një partner i besueshëm!"
          </Card.Text>
          <Card.Subtitle className="text-muted mt-3" style={{ fontSize: "16px" }}>
            — Bashkia Tiranë
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</section>


    </Container>
  );
}

export default RethNesh;
