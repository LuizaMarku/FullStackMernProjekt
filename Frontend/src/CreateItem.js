import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const CreateItem = () => {
  const nav = useNavigate();
  const [newItem, setNewItem] = useState({
    itemName: "",
    itemDescription: "",
    itemImage: "",
    itemLocation: "",
    itemType: "",
    itemAreaSize: "",
    itemStartDate: "",
    itemEndDate: "",
    itemStatus: "",
  });
  const [imageShow, setImageShow] = useState(null);

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setNewItem({ ...newItem, itemImage: e.target.files[0] });
    setImageShow(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(newItem).forEach(([key, value]) => {
      formData.append(key, value);
    });
    await axios
      .post("http://localhost:5000/createItem/", formData)
      .then((res) => {
        console.log(res);
        nav('/projektet_tona/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <h1>Krijo Produkt</h1>
      <Form onSubmit={handleSubmit} encType='multipart/form-data'>
        <Form.Group className="mb-4" controlId="itemTitle">
          <Form.Label>Titulli i Produktit</Form.Label>
          <Form.Control
            type="text"
            name="itemName"
            value={newItem.itemName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="itemImage">
          <Form.Label>Imazhi i Produktit</Form.Label>
          <Form.Control
            type="file"
            name="itemImage"
            onChange={handleImage}
            multiple
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="itemDescription">
          <Form.Label>Përshkrimi i Produktit</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="itemDescription"
            value={newItem.itemDescription}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="itemLocation">
          <Form.Label>Vendodhja e Produktit</Form.Label>
          <Form.Control
            as="textarea"
            rows={1}
            name="itemLocation"
            value={newItem.itemLocation}
            onChange={handleChange}
          />
        </Form.Group>

        <Row>
          <Col sm={12} md={6}>
            <Form.Group className="mb-4" controlId="itemAreaSize">
              <Form.Label>Siperfaqja</Form.Label>
              <Form.Control
                type="text"
                name="itemAreaSize"
                value={newItem.itemAreaSize}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col sm={12} md={6}>
            <Form.Group className="mb-4" controlId="itemStartDate">
              <Form.Label>Data e Fillimit</Form.Label>
              <Form.Control
                type="date"
                name="itemStartDate"
                value={newItem.itemStartDate}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={6}>
            <Form.Group className="mb-4" controlId="itemEndDate">
              <Form.Label>Data e Mbarimit</Form.Label>
              <Form.Control
                type="date"
                name="itemEndDate"
                value={newItem.itemEndDate}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col sm={12} md={6}>
            <Form.Group className="mb-4" controlId="itemStatus">
              <Form.Label>Statusi</Form.Label>
              <Form.Control
                type="text"
                name="itemStatus"
                value={newItem.itemStatus}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button type="submit">Shto Produkt</Button>
      </Form>

      {imageShow && <img src={imageShow} className='img-fluid mt-3' alt="Imazhi i Produktit" />}
    </Container>
  );
};

export default CreateItem;
