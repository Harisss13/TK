import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Img1 from '../img/1.png';
import Img2 from '../img/2.jpg';
import Img3 from '../img/3.jpg';
import Img4 from '../img/4.jpg';
import Img5 from '../img/5.jpg';

const Fasilitas = () => {
    return <div>
      <div className="App">
      <header className="App-header">
        <h1>Fasilitas KB Bunga Mekar 4</h1><br/>
        <h5 style={{ color: 'white', fontSize: '16px' }}>Temukan fasilitas yang mendukung perkembangan anak-anak!</h5>
      </header>
      <section className="facilities-container">
        <Card className="card-fasilitas">
          <img src={Img1} alt="hero-img" />
          <Card.Body>
            <Button variant="primary">Gedung Sekolah</Button>
            <Card.Text>
              <br/>
              Tempat berbagai kegiatan pendidikan dan non-pendidikan dijalankan.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card-fasilitas">
          <img src={Img2} alt="hero-img" />
          <Card.Body>
            <Button variant="primary">Ruangan Belajar</Button>
            <Card.Text>
            <br/>
              Ruangan Belajar adalah tempat nyaman untuk belajar dan bermain.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card-fasilitas">
          <img src={Img3} alt="hero-img" />
          <Card.Body>
            <Button variant="primary">Taman Bermain</Button>
            <Card.Text>
            <br/>
              Area outdoor dengan permainan yang aman dan mendidik.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card-fasilitas">
          <img src={Img4} alt="hero-img" />
          <Card.Body>
            <Button variant="primary">Lapangan Olahraga</Button>
            <Card.Text>
            <br/>
              Lapangan Olahraga adalah ruang terbuka untuk kegiatan olahraga dan rekreasi fisik.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card-fasilitas">
          <img src={Img5} alt="hero-img" />
          <Card.Body>
            <Button variant="primary">Kantin</Button>
            <Card.Text>
            <br/>
              Kantin adalah tempat yang menyediakan makanan untuk anak-anak.
            </Card.Text>
          </Card.Body>
        </Card>

      </section>
      </div>
    </div>;
  };
  
export default Fasilitas;
