import React from 'react';
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

const KurikulumDetail = () => {
  const { month } = useParams();
  const data = [
    { month: 'Juli', theme: 'Sekolah Asyik', image: CalJuli, smt: 'Semester 1'},
    { month: 'Agustus', theme: 'Indonesiaku', image: CalAgustus, smt: 'Semester 1'},
    { month: 'September', theme: 'Mitigasi Bencana', image: CalSeptember, smt: 'Semester 1'},
    { month: 'Oktober', theme: 'Alam Semesta', image: CalOktober, smt: 'Semester 1'},
    { month: 'November', theme: 'Apa Saja di Sekitarku ?', image: CalNovember, smt: 'Semester 1'},
    { month: 'Desember', theme: 'Kesenian Lokal', image: CalDesember, smt: 'Semester 1'},
    { month: 'Januari', theme: 'Cuaca', image: CalJanuari, smt: 'Semester 2'},
    { month: 'Februari', theme: 'Kebun Sekolahku', image: CalFebruari, smt: 'Semester 2'},
    { month: 'Maret', theme: 'Alat Transportasi', image: CalMaret, smt: 'Semester 2'},
    { month: 'April', theme: 'Hari Besar Islam', image: CalApril, smt: 'Semester 2'},
    { month: 'Mei', theme: 'Rekreasi', image: CalMei, smt: 'Semester 2'},
    { month: 'Juni', theme: 'Cita-cita', image: CalJuni, smt: 'Semester 2'},
  ];
  const bulanInfo = data.find(item => item.month === month);
  const theme = bulanInfo?.theme;
  const image = bulanInfo?.image;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = image;
    link.download = `Jadwal ${month}_image.jpg`;
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
        <Col md={{ span: 6, offset: 3 }} className="text-center">
          <h2 className="sem fw-bold">{bulanInfo?.smt}</h2>
          <h5 className="mb-4">Tema : {theme}</h5>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={7} className="d-flex justify-content-center mb-5">
          <img src={image} alt={`Image for ${month}`} className="img-fluid centered-image"/>
        </Col>
      </Row>
      <Row>
        <Col md={7} className="d-flex justify-content-center mb-5">
            <Button variant="primary" className="btn-download" onClick={handleDownload} style={{ fontSize: '16px', padding: '8px', width: '160px' }}>
                Download Jadwal
            </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default KurikulumDetail;
