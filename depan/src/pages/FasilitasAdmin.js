import Img1 from '../img/1.png';
import Img2 from '../img/2.jpg';
import Img3 from '../img/3.jpg';
import Img4 from '../img/4.jpg';
import Img5 from '../img/5.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../admin/Layout';
import { Col, Card, Button, Row } from 'react-bootstrap';
import { useAuth } from '../components/AuthContext';


const FasilitasAdmin = () => {
  const { isLoggedIn, login, logout } = useAuth();
  const navigate = useNavigate();

  if(isLoggedIn) {
    return (
      <Layout>
        <div>
      <div className="App">
      <header className="App-header">
        <h1>Fasilitas KB Bunga Mekar 4</h1>
        <h7>Temukan fasilitas yang mendukung perkembangan anak-anak!</h7>
      </header>

      <Row lg={2}>

        <Card className='flex'>
          <img src={Img1} alt="hero-img" />
          <Card.Body>
          Gedung Sekolah
            <Card.Text>
              <br/>
              Tempat berbagai kegiatan pendidikan dan non-pendidikan dijalankan.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <img src={Img2} alt="hero-img" />
          <Card.Body>
          Ruangan Belajar
            <Card.Text>
            <br/>
              Ruangan Belajar adalah tempat nyaman untuk belajar dan bermain.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <img src={Img3} alt="hero-img" />
          <Card.Body>
          Taman Bermain
            <Card.Text>
            <br/>
              Area outdoor dengan permainan yang aman dan mendidik.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <img src={Img4} alt="hero-img" />
          <Card.Body>
          Lapangan Olahraga
            <Card.Text>
            <br/>
              Lapangan Olahraga adalah ruang terbuka untuk kegiatan olahraga dan rekreasi fisik.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <img src={Img5} alt="hero-img" />
          <Card.Body>
          Kantin
            <Card.Text>
            <br/>
              Kantin adalah tempat yang menyediakan makanan untuk anak-anak.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
      <button className="primary-lihat rounded-5 btn-lg fw-bold" style={{ fontSize: '18px', padding: '15px 30px' }}>
        <Link to="/admin/fasilitas/kelola" style={{ color: 'white', textDecoration: 'none' }}>
          Kelola Fasilitas
        </Link>
        <i className="fa-solid fa-chevron-right ms-3"></i>
        </button>
      </div>
    </div>
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
  
export default FasilitasAdmin;
