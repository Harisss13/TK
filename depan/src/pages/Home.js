import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import HeroImage from '../img/home.png';
import Juli from '../img/juli.jpg';
import Agustus from '../img/agustus.jpg';
import September from '../img/september.jpg';
import KurikulumBG from '../img/kurikulumBG.png';
import Image17 from '../img/about-pic.png';
import Music from '../img/music.png';
import Image1 from '../img/about us.png';
import Card from 'react-bootstrap/Card';

const Home = () => {
  let navigate = useNavigate();
  const data = [
    { month: 'Juli', theme: 'Sekolah Asyik', src: Juli},
    { month: 'Agustus', theme: 'Indonesiaku', src: Agustus},
    { month: 'September', theme: 'Mitigasi Bencana', src: September},
  ];
  return ( 
    <div className="home">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4" style={{ color: '#8938BF' }}>Selamat Datang di<br /><span className="bunga-mekar">KB Bunga Mekar 4</span></h1><hr style={{ color: 'white' }}/>
              <p className="mb-4" style={{ color: '#432700'}}>Selamat datang di website resmi PAUD KB Bunga Mekar 4, tempat di mana kami dengan bangga menawarkan pendidikan terbaik untuk anak usia dini. Temukan informasi lengkap seputar program, kegiatan, dan perkembangan anak-anak di PAUD KB Bunga Mekar 4 melalui website ini.</p>
              <button className="btn-join btn-lg rounded-1 me-2 mb-xs-0 mb-2" style={{ fontSize: '16px', padding: '8px 15px', width:'120px' }} onClick={() => navigate("/pendaftaran")}>Ayo Gabung</button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5 ms-auto" style={{backgroundImage: {KurikulumBG}}}>
            <img src={HeroImage} alt="hero-img"/>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="tentang w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="heading-about text-center mt-3" style={{fontSize: '50px'}}> <span>About</span> Us</h1>
            </Col>
          </Row>
          <Row>
            <Col lg="6" className="pt-lg-0 pt-5 ms-auto">
                <img src={Image17} alt="hero-img" style={{ maxWidth: '100%', height: 'auto' }}/>
            </Col>
            <Col>
              <div style={{ textAlign: 'center' }}>
                <div style={{ textAlign: 'right', maxWidth: '600px', marginTop: '170px'}}>
                  <h5 style={{fontSize: '25px', color: '#E9768F'}}>Berakhlak Mulia, Berkarakter Unggul, Perkembangan dan Kebutuhan Anak</h5>
                  <h5 style={{fontSize: '25px', color: '#E9768F'}}>Terpenuhi saat Bermain Sambil Belajar!</h5>
                </div>
                <button className="primary-lihat rounded-5 btn-lg fw-bold mt-4" style={{ fontSize: '18px', padding: '10px 20px', width: '280px', marginLeft: '250px' }} onClick={() => navigate("/profil")}>
                  Lihat Selengkapnya 
                <i className="fa-solid fa-chevron-right ms-3"></i></button>
                <img style={{ width: '400px', marginLeft: '200px', position: 'absolute', right: '0' }} src={Music} alt="music-img"/>
               </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="kurikulum w-100 min-vh-100" style={{backgroundColor: '#FFDEB0'}}>
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col>
              <h1 className="text-center fw-bold" style={{fontSize: '50px'}}>Kurikulum</h1>
            </Col>
          </Row>
          <Row xs={1} md={3} className="g-4 justify-content-center">
            {Array.from({ length: 3 }).map((_, idx) => (
              <Col key={idx} className="mb-4">
                <Card className="card-hoverable">
                  <Card.Img variant="top" src={data[idx].src} alt={`Image for ${data[idx].month}`}/>
                  <Card.Body>
                    <Card.Title className="semester1 fw-bold">Semester 1</Card.Title>
                    <Card.Title className="fw-bold">{data[idx].month}</Card.Title>
                    <Card.Text>
                      Tema : {data[idx].theme}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row>
            <Col className="text-center">
              <button className="primary-lihat rounded-5 btn-lg fw-bold" style={{ fontSize: '18px', padding: '15px 30px', width: '400px' }} onClick={() => navigate("/kurikulum")}>
                Lihat Selengkapnya 
              <i className="fa-solid fa-chevron-right ms-3"></i></button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* KONTAK */}
      <section className="contact" id="contact">
        <h1 className="heading-contact text-center fw-bold mt-5 mb-5" style={{color: '#F9BA60'}}>
          <span >Kontak</span>
        </h1>
        <div className="icons-container">
        <div className="icons">
        <a href="https://maps.google.com/?q=Kp.+Sukasirna+RT+004/RW+002+Ds.+Sukahaji+Kec.+Tegalwaru+Kab.+Purwakarta+Jawa+Barat" target="_blank" rel="noopener noreferrer"><i className="fas fa-map-marker-alt" /></a>
            <h3>Alamat</h3>
            <p>Kp. Sukasirna RT 004/RW 002 Ds. Sukahaji Kec. Tegalwaru Kab. Purwakarta Jawa Barat </p>
          </div>
          <div className="icons">
            <i className="fas fa-clock"></i>
            <h3>Jam Operasional :</h3>
            <p>Senin-Kamis: 07:00-11:00 WIB</p>
            <p>Jumat: 07:00-10:00 WIB</p>
          </div>

          <div className="icons">
          <a href="mailto:kbbungamekar04@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope" /></a>
            <h3>Email</h3>
            <p>kbbungamekar04@gmail.com</p>
            <p>kbbungamekar04@gmail.com</p>
          </div>

          <div className="icons">
            <a href="https://wa.me/6287897195246" target="_blank" rel="noopener noreferrer"><i className="fas fa-phone" /></a>
            <h3>Nomor Telepon</h3>
            <p>087897195246</p>
            <p>087897195246</p>
          </div>
        </div>
      </section> 


    </div>
  );
};

export default Home;