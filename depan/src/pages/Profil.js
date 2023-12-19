import Image1 from '../img/about us.png';
import Image2 from '../img/education1.png';
import Image3 from '../img/education2.png';
import Image4 from '../img/education3.png';
import Image5 from '../img/teacher1.png';
import Image6 from '../img/teacher2.png';
import Image7 from '../img/teacher3.png';
import Image8 from '../img/activities1.png';
import Image9 from '../img/activities2.png';
import Image10 from '../img/activities3.png';
import Image11 from '../img/activities4.png';
import Image12 from '../img/activities5.png';
import Image13 from '../img/activities6.png';
import Image16 from '../img/teacher4.png';
import Image17 from '../img/about-pic.png';

const Profil = () => {
    return (
      <div>
        {/*tabel identitas sekolah start*/}
        <h1 className="heading-about text-center mt-3"> <span>About</span> Us</h1>
        <div className="school-info text-center" data-aos="fade-up" data-aos-duration="1000">
          <div className="row-about">
            <ul>
            <h5>Berakhlak Mulia, Berkarakter Unggul, Perkembangan dan Kebutuhan Anak</h5>
            <h5>Terpenuhi saat Bermain Sambil Belajar!</h5>
          </ul>
            <div className="image-about">
              <img className="mb-4" src={Image17} alt="hero-img" />
            </div>
          </div>
        </div>
        {/*tabel identitas sekolah ends*/}
        {/* about us section starts */}
        <section className="about" id="about" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="heading-about text-center"> <span>More</span> About Us</h1>
          <div className="row-about" data-aos="fade-up" data-aos-duration="1000">
            <div className="image-school" data-aos="fade-up" data-aos-duration="1000">
              <img src={Image1} alt="hero-img" />
            </div>
            <div className="content">
              <h3 style={{ fontSize: '34px'}}>Exploring, Characterful, And Thriving Together</h3>
              <h3></h3><br/>
              <p style={{ fontSize: '16px'}}>KB BUNGA MEKAR, sebuah lembaga Pendidikan Anak Usia Dini (PAUD) di Purwakarta, menganggap pendidikan sebagai pilar utama dalam membentuk karakter anak-anak sejak usia dini. Dengan visi untuk menciptakan peserta didik yang unggul, berkarakter, dan berprestasi, sekolah ini fokus pada pengembangan potensi anak-anak sejalan dengan prinsip-prinsip kemanusiaan.</p>
              <p style={{ fontSize: '16px'}}> KB BUNGA MEKAR 4 berkomitmen untuk memberikan pengalaman pendidikan yang positif dengan memperhatikan aspek moral dan keagamaan, memfasilitasi penjelajahan dunia anak-anak, dan mendukung perkembangan mereka dalam aspek sosial, aspek motorik halus dan motorik kasar,  aspek kognitif, serta aspek kesenian.</p>
            </div>
          </div>
        </section>

        {/* education section start */}
        <section className="education" id="education" data-aos="fade-up" data-aos-duration="2000">
          <h1 className="heading-about text-center fw-bold mt-5 mb-5">Our <span> Education</span></h1>
          <div className="box-container" data-aos="fade-up" data-aos-duration="2000">
            <div className="box" data-aos="fade-up" data-aos-duration="3000">
              <h3 className="fw-bold">Moral & Keagamaan</h3>
              <p>Integrasi nilai-nilai keagamaan sebagai landasan moral&spiritual</p>
              <img src={Image2} alt="hero-img" />
            </div>
            <div className="box" data-aos="fade-up" data-aos-duration="3000">
              <h3 className="fw-bold">Motorik</h3>
              <p>Pengembangan keterampilan motorik halus dan kasar</p>
              <img src={Image3} alt="hero-img" />
            </div>
            <div className="box" data-aos="fade-up" data-aos-duration="3000">
              <h3 className="fw-bold">Kesenian</h3>
              <p>Stimulasi kreativitas anak melalui kegiatan seni </p>
              <img src={Image4} alt="hero-img" />
            </div>
          </div>
        </section>
        {/* education section ends */}

        {/* teacher section starts */}
        <section className="teacher" id="teacher" data-aos="fade-up" data-aos-duration="2000">
          <h1 className="heading-about text-center mb-5">Our <span> Teacher</span></h1>
          <div className="box-container" data-aos="fade-up" data-aos-duration="2000">
            <div className="box" data-aos="fade-up" data-aos-duration="3000">
              <img src={Image5} alt="hero-img" />
              <h3>Eli</h3>
              <p>Guru</p>
              <div className="share">
                <a href="https://www.facebook.com/eli.hayati.520" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a>
                <a href="https://wa.me/6287897195246" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" /></a>
                <a href="lhttps://www.instagram.com/elitutihayati" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="box" data-aos="fade-up" data-aos-duration="3000">
              <img src={Image6} alt="hero-img" />
              <h3>Mita Pratiwi</h3>
              <p>Guru</p>
              <div className="share">
                <a href="https://www.facebook.com/mitha.a.pratiwii" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a>
                <a href="https://wa.me/6289503548357" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" /></a>
                <a href="https://www.instagram.com/mitapra_" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="box" data-aos="fade-up" data-aos-duration="3000">
              <img src={Image7} alt="hero-img" />
              <h3>Diva Sofia M.</h3>
              <p>Guru</p>
              <div className="share">
                <a href="https://www.facebook.com/profile.php?id=100086598393398" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a>
                <a href="https://wa.me/6283148931994" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" /></a>
                <a href="https://www.instagram.com/diva6614" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="box" data-aos="fade-up" data-aos-duration="3000">
              <img src={Image16} alt="hero-img" />
              <h3>Shallshabilla</h3>
              <p>Guru</p>
              <div className="share">
              <a href="https://www.facebook.com/mitha.a.pratiwii" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a>
                <a href="https://wa.me/6289503548357" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" /></a>
                <a href="https://www.instagram.com/mitapra_" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </section>
        {/* teacher section ends */}

        {/* activities section starts */}
        <section className="activities" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="heading-about text-center mb-5">Our <span>Activities</span></h1>
          <div className="box-container" data-aos="fade-up" data-aos-duration="1000">
            <div className="box" data-aos="fade-up" data-aos-duration="2000">
              <img src={Image8} alt="hero-img" />
              <h3>Belajar&Bermain</h3>
            </div>
            <div className="box" data-aos="fade-up" data-aos-duration="2000">
              <img src={Image9} alt="hero-img" />
              <h3>Olahraga&Bermain</h3>
            </div>
            <div className="box" data-aos="fade-up" data-aos-duration="2000">
              <img src={Image10} alt="hero-img" />
              <h3>Membuat Karya</h3>
            </div>
            <div className="box" data-aos="fade-up" data-aos-duration="2000">
              <img src={Image11} alt="hero-img" />
              <h3>Pramuka Siaga </h3>
            </div>
            <div className="box" data-aos="fade-up" data-aos-duration="2000">
              <img src={Image12} alt="hero-img" />
              <h3>Pelepasan Wisuda</h3>
            </div>
            <div className="box" data-aos="fade-up" data-aos-duration="2000">
              <img src={Image13} alt="hero-img" />
              <h3>Simulasi Manasik</h3>
            </div>
          </div>
        </section>
        {/* activities section ends */}
        

        </div>
    );
};
  export default Profil;