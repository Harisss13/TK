import React from 'react';

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3> <i className="fas fa-school"></i> KB Bunga mekar 4 </h3>
          <p>Berakhlak Mulia, Berkarakter Unggul, Perkembangan dan Kebutuhan Anak Terpenuhi saat Bermain Sambil Belajar!</p>
        </div>

        <div className="box">
          <h3>Kontak</h3>
          <a href="https://maps.google.com/?q=Kp.+Sukasirna+RT+004/RW+002+Ds.+Sukahaji+Kec.+Tegalwaru+Kab.+Purwakarta+Jawa+Barat" target="_blank" rel="noopener noreferrer"><i className="fas fa-map-marker-alt" /> Alamat: Kp. Sukasirna RT 004/RW 002 Ds. Sukahaji Kec. Tegalwaru Kab. Purwakarta Jawa Barat</a>
          <a href="mailto:kbbungamekar04@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope" /> Email: kbbungamekar4@gmail.com</a>
          <a href="https://wa.me/6287897195246" target="_blank" rel="noopener noreferrer"><i className="fas fa-phone" /> Telepon: 087897195246</a>
        </div>

        <div class="box">
                <h3>Kategori</h3>
                <a href="/profil"> <i class="fas fa-caret-right"></i> Profil</a>
                <a href="/fasilitas"> <i class="fas fa-caret-right"></i> Fasilitas</a>
                <a href="/kurikulum"> <i class="fas fa-caret-right"></i> Kurikulum</a>
                <a href="/galeri"> <i class="fas fa-caret-right"></i> Galeri</a>
                <a href="/pendaftaran"> <i class="fas fa-caret-right"></i> Pendaftaran</a>
            </div>
      </div>

      <div className="credit">Copyright &copy; 2023 KB Bunga Mekar 4. All rights reserved.<span></span></div>
    </section>
  );
}

export default Footer;
