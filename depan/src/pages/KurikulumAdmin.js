import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useAuth } from "../components/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Layout from '../admin/Layout';
import React, { useState, useEffect } from "react";
import axios from 'axios';


  
  function KurikulumAdmin (){
    const { isLoggedIn, login, logout } = useAuth();
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    useEffect(() => {
      getKuri();
    }, []);

  const getKuri = async () => {
    const response = await axios.get("http://localhost:4000/kuri");
    setProducts(response.data);
  };

  const deleteKuri = async (productId) => {
    try {
      await axios.delete(`http://localhost:4000/kuri/${productId}`);
      getKuri();
    } catch (error) {
      console.log(error);
    }
  };

  
  if(isLoggedIn) {
    return (
      <Layout>
              <Container className="mt-4">
        <Row>
          <Col>
            <div className="p-4 pt-4">
              <h3 className="admin-kurikulum fw-bold text-center" style={{fontSize: '36px'}}>KURIKULUM</h3><hr />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-end">
          <Col xs={4} className="d-flex justify-content-end align-items-center mb-3">
            <Link to="/admin/kurikulum/create">
              <Button className="primary" style={{ fontSize: '18px', padding: '6px', width: '90px' }}>Tambah</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          {products.map((item, idx) => (
            <Col key={idx} className="mb-4" md={3}>
              <Card className="kurikulum-card">
                <Card.Img variant="top" src={item.url} alt={`Image for ${item.bulan}`} />
                <Card.Body>
                  <Card.Title className={`semester${item.semester} judul-smt fw-bold`}>{item.semester}</Card.Title>
                  <Card.Title className="fw-bold">{item.bulan}</Card.Title>
                  <Card.Text>Tema: {item.tema}</Card.Text>
                  <div className="d-flex justify-content-around ">
                    <Link to="/admin/kurikulum/edit">
                      <Button variant="warning" style={{ fontSize: '14px', padding: '6px', width: '90px' }}>Edit</Button>
                    </Link>
                  
                  <a onClick={() => deleteKuri(item.id)}>
                    Delete
                  </a>


                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      </Layout>
    );
  } else {
    return (
    <div className="d-flex flex-column align-items-center justify-content-center bg-warning display-6 vh-100">
        <h1 className="text-center p-3">Anda harus login terlebih dahulu untuk mengakses halaman ini.</h1>
        <Link to="/login" className="btn btn-primary btn-lg mt-3">Login</Link>
      </div>
    );
}

  };
  
  export default KurikulumAdmin;