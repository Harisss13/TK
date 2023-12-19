import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
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
  
  function KurikulumAdmin (){
    
    const data = [
        { month: 'Juli', theme: 'Sekolah Asyik', image: Juli, smt: 'Semester 1'},
        { month: 'Agustus', theme: 'Indonesiaku', image: Agustus, smt: 'Semester 1'},
        { month: 'September', theme: 'Mitigasi Bencana', image: September, smt: 'Semester 1'},
        { month: 'Oktober', theme: 'Alam Semesta', image: Oktober, smt: 'Semester 1'},
        { month: 'November', theme: 'Apa Saja di Sekitarku ?', image: November, smt: 'Semester 1'},
        { month: 'Desember', theme: 'Kesenian Lokal', image: Desember, smt: 'Semester 1'},
        { month: 'Januari', theme: 'Cuaca', image: Januari, smt: 'Semester 2'},
        { month: 'Februari', theme: 'Kebun Sekolahku', image: Februari, smt: 'Semester 2'},
        { month: 'Maret', theme: 'Alat Transportasi', image: Maret, smt: 'Semester 2'},
        { month: 'April', theme: 'Hari Besar Islam', image: April, smt: 'Semester 2'},
        { month: 'Mei', theme: 'Rekreasi', image: Mei, smt: 'Semester 2'},
        { month: 'Juni', theme: 'Cita-cita', image: Juni, smt: 'Semester 2'},
      ];
    return (
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
            <Link to="/Kurikulum-Create">
              <Button className="primary" style={{ fontSize: '18px', padding: '6px', width: '90px' }}>Tambah</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          {data.map((item, idx) => (
            <Col key={idx} className="mb-4" md={3}>
              <Card className="kurikulum-card">
                <Card.Img variant="top" src={item.image} alt={`Image for ${item.month}`} />
                <Card.Body>
                  <Card.Title className={`semester${item.smt} judul-smt fw-bold`}>{item.smt}</Card.Title>
                  <Card.Title className="fw-bold">{item.month}</Card.Title>
                  <Card.Text>Tema: {item.theme}</Card.Text>
                  <div className="d-flex justify-content-around ">
                    <Link to="/Kurikulum-Edit">
                      <Button variant="warning" style={{ fontSize: '14px', padding: '6px', width: '90px' }}>Edit</Button>
                    </Link>
                    <Button variant="danger" style={{ fontSize: '14px', padding: '6px', width: '90px' }}>Hapus</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
  
  export default KurikulumAdmin;