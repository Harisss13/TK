import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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

  
  const KurikulumUser = () => {
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
      <div>
        <Container className="kurikulum-background mt-4 position-relative">
        <Row>
          {data.map((item, idx) => (
            <Col key={idx} className="mb-4 mt-4" md={3}>
              <Card className="kurikulum-card">
                <Card.Img variant="top" src={item.image} alt={`Image for ${item.month}`} />
                <Card.Body>
                  <Card.Title className={`semester${item.smt} judul-smt fw-bold`}>{item.smt}</Card.Title>
                  <Card.Title className="fw-bold">{item.month}</Card.Title>
                  <Card.Text>Tema: {item.theme}</Card.Text>
                  <Button className="primary-lihat" as={Link} to={`/kurikulum/${item.month}`} variant={`primary-smt${item.smt}`}>
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