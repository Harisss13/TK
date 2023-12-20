import React, { useState, useEffect } from "react";
import { useParams,Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CalJuli from '../img/1juli.png';
import CalAgustus from '../img/1agustus.png';
import CalSeptember from '../img/1september.png';
import CalOktober from '../img/1oktober.png';
import CalNovember from '../img/1november.png';
import CalDesember from '../img/1desember.png';
import CalJanuari from '../img/2januari.png';
import CalFebruari from '../img/2februari.png';
import CalMaret from '../img/2maret.png';
import CalApril from '../img/2april.png';
import CalMei from '../img/2mei.png';
import CalJuni from '../img/2juni.png';
import ColorMix from '../img/color-mix.png';
import axios from "axios";


const KurikulumDetail = () => {

  const [tema, setTema] = useState('');
  const [semester, setSemester] = useState('');
  const [bulan, setBulan] = useState('');
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const { id } = useParams();


  useEffect(() => {
    getKuriById();
  }, []);

  const getKuriById = async () => {

    try {
      const response = await axios.get(`http://localhost:4000/kuri/${id}`);
      if (response.data) {
        setTema(response.data.tema);
        setBulan(response.data.bulan);
        setSemester(response.data.semester);
        setPreview(response.data.url2);
      } else {
        console.log("Data is null or undefined");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = preview;
    link.download = `Jadwal_${preview}_image.jpg`;
    link.click();
  };
  
  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col className="text-start">
          <Link to="/kurikulum">
            <Button variant="secondary" className="primary-back rounded-5 btn-sm" style={{ fontSize: '18px', padding: '8px', width: '100px' }}>Kembali</Button>
          </Link>
        </Col>
      </Row>

    <Row>

        <Row>
          <Col md={{ span: 6, offset: 3 }} className="text-center">
            <h2 className="sem fw-bold">{semester}</h2>
            <h2 className="sem fw-bold">{bulan}</h2>
            <h5 className="mb-4">Tema : {tema}</h5>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={7} className="d-flex justify-content-center mb-5">
            <img src={preview} className="img-fluid centered-image"/>
          </Col>
        </Row>
        <Row>
          <Col md={7} className="d-flex justify-content-center mb-5 ">
            <div>
            <Button variant="primary" className="btn-download" onClick={handleDownload} style={{ fontSize: '16px', padding: '8px', width: '160px' }}>
                  Download Jadwal
              </Button>
            </div>

          </Col>
        </Row>
    </Row>


    </Container>
  );
};

export default KurikulumDetail;
