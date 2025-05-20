import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
const UpdateItem = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [updateItem, setUpdateItem] = useState({
    itemName: "",
    itemDescription: "",
    itemImage: "",
    itemLocation: "",
      itemAreaSize: "",
    itemStartDate: "",
    itemEndDate: "",
    itemStatus: ""
  });
  const [imageShow, setImageShow] = useState(null);
  useEffect(() => {
    const getData = async () => {
      await axios
        .get("http://localhost:5000/readOneItem/" + id)
        .then((res) => {
          console.log(res);
          setUpdateItem(res.data);
        })
        .catch((err) => {
          console.log("Not read " + err);
        });
    };
    getData();
  }, [id]);
  const handleChange = (e) => {
    setUpdateItem({ ...updateItem, [e.target.name]: e.target.value });
  };
  const handleImage = (e) => {
    setUpdateItem({ ...updateItem, itemImage: e.target.files[0] });
    setImageShow(URL.createObjectURL(e.target.files[0]));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(updateItem).forEach(([key, value]) => {
      formData.append(key, value);
    });
    await axios
      .patch("http://localhost:5000/updateItem/" + id, formData)
      .then((res) => {
        console.log(res);
        nav("/projektet_tona/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container>

      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Form.Group className="mb-3" controlId="itemTitle">
          <Form.Label>Item Title</Form.Label>
          <Form.Control
            type="text"
            name="itemName"
            value={updateItem.itemName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="itemImage">
          <Form.Label>Item Image</Form.Label>
          <Form.Control type="file" name="itemImage" onChange={handleImage} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="itemDescription">
          <Form.Label>Item Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="itemDescription"
            value={updateItem.itemDescription}
            onChange={handleChange}
          />
             
        <Form.Group className="mb-3" controlId="itemAreaSize">
          <Form.Label>Item AreaSize</Form.Label>
          <Form.Control
            type="text"
            name="itemAreaSize"
            value={updateItem.itemAreaSize}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="itemStatus">
          <Form.Label>Item Status</Form.Label>
          <Form.Control
            type="text"
            name="itemStatus"
            value={updateItem.itemStatus}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="itemStartDate">
          <Form.Label>Item StartDate</Form.Label>
          <Form.Control
            type="text"
            name="itemStartDate"
            value={updateItem.itemStartDate}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="itemEndDate">
          <Form.Label>Item EndDate</Form.Label>
          <Form.Control
            type="text"
            name="itemEndDate"
            value={updateItem.itemEndDate}
            onChange={handleChange}
          />
        </Form.Group>
        
        </Form.Group>
        <Button type="submit" variant="warning">
          Update Item
        </Button>
      </Form>
      <img src={imageShow} className="img-fluid" />
    </Container>
  );
};

export default UpdateItem;
