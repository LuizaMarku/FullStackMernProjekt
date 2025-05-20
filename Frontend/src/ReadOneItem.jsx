import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const ReadOneItem = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("http://localhost:5000/readOneItem/" + id)
        .then((res) => {
          console.log(res);
          setItem(res.data);
        })
        .catch((err) => {
          console.log("Not read " + err);
        });
    };
    getData();
  }, [id]);

  // Delete
  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:5000/deleteItem/" + id)
      .then((res) => {
        nav("/projektet_tona/");
      })
      .catch((err) => {
        console.log("Not deleted " + err);
      });
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Detajet e Projektit</h1>
      <Row className="d-flex align-items-stretch">
        {/* Informacioni i Projektit */}
        <Col xs={12} md={6} className="d-flex mb-4 mb-md-0">
          <Card className="mb-4 shadow-lg w-100">
            <Card.Body>
              <Card.Title className="fs-2" style={{ textAlign: "center" }}>
                {item.itemName}
              </Card.Title>

              <Card.Text>
                <strong>Sipërfaqja:</strong> {item.itemAreaSize}
              </Card.Text>
              <Card.Text>
                <strong>Statusi:</strong> {item.itemStatus}
              </Card.Text>
              <Card.Text>
                <strong>Data e fillimit:</strong> {item.itemStartDate}
              </Card.Text>
              <Card.Text>
                <strong>Data e përfundimit:</strong> {item.itemEndDate}
              </Card.Text>
              <Card.Text>{item.itemDescription}</Card.Text>
              <div className="d-flex">
                <Button
                  variant="danger"
                  onClick={() => handleDelete(item._id)}
                  className="me-2 w-100 mb-2 mb-md-0"
                >
                  Delete
                </Button>
                <Button variant="warning" href={`/updateItem/${item._id}`} className="w-100">
                  Update
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

  
        <Col xs={12} md={6} className="d-flex">
          <div className="text-center w-100">
            <img
              src={`http://localhost:5000/images/${item.itemImage}`}
              alt={item.itemName}
              className="img-fluid rounded shadow-lg"
              style={{
                maxHeight: "600px", 
                objectFit: "cover",
                borderRadius: "15px", 
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
                transition: "transform 0.3s ease-in-out", 
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")} 
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} 
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ReadOneItem;
