import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Juli from '../img/juli.jpg';
import Agustus from '../img/agustus.jpg';
import September from '../img/september.jpg';
import Oktober from '../img/oktober.jpg';
import November from '../img/november.jpg';
import Desember from '../img/desember.jpg';
import Januari from '../img/januari.jpg';
import Februari from '../img/februari.jpg';
import Maret from '../img/maret.jpg';
import April from '../img/april.jpg';
import Mei from '../img/mei.jpg';
import Juni from '../img/juni.jpg';
import Music from '../img/music.png';
import Footer from './Footer';
import axios from 'axios';

  
  const KurikulumUser = () => {

    const [products, setProducts] = useState([]);

      useEffect(() => {
      getKuri();
      }, []);

      const getKuri = async () => {
        const response = await axios.get("http://localhost:4000/kuri");
        setProducts(response.data);
      };

    return (
      <div>
        <Container className="kurikulum-background mt-4 position-relative">
        <Row>
          {products.map((item, idx) => (
            <Col key={idx} className="mb-4 mt-4" md={3}>
              <Card className="kurikulum-card">
                <Card.Img variant="top" src={item.url} alt={`Image for ${item.bulan}`} />
                <Card.Body>
                  <Card.Title className={`semester${item.semester} judul-smt fw-bold`}>{item.semester}</Card.Title>
                  <Card.Title className="fw-bold">{item.bulan}</Card.Title>
                  <Card.Text>Tema: {item.tema}</Card.Text>
                  <Button className="primary-lihat" as={Link} to={`${item.id}`} variant={`primary-smt${item.semester}`}>
                    Lihat
                  </Button>
                  <img className="music-image" src={Music} alt="music-img"/>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
      </div>
    );
  };
  
  export default KurikulumUser;