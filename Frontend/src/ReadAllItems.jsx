import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";


import KartaProjektet from "./KartaProjektet";
const ReadAllItem = () => {
  const [allItem, setItem] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:5000/readAllItem/")
        .then((res) => {
          console.log(res.data);
          setItem(res.data);
        })
        .catch((err) => {
          console.log("Not Show " + err);
        });
    };
    fetchData();
  }, []);
  return (
    <Container className="mt-4">

      <Row className="gx-4 gy-4">
        {allItem.map((item) => {
          return (
            <Col  xs={12} sm={6} md={4} lg={3} key={item._id}>
          
             
               
                <KartaProjektet
  id={item._id}
  image={`http://localhost:5000/images/${item.itemImage}`}
  title={item.itemName}
  area={item.itemLocation}
  description={item.itemStatus}

/>



              
             
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ReadAllItem;
