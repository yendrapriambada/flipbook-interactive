import React, { forwardRef } from 'react';
import boraxImage from '../../assets/borax_detection_news.png';

const JournalPortraitPage = forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content journal-page">
        <div className="journal-topbar">
          <span className="journal-edition">Volume 10, Issue 3 March 2023</span>
        </div>

        <div className="journal-header">
          <h1 className="journal-title">News</h1>
          <h2 className="journal-subtitle">TECHNOLOGY APPLICATIONS</h2>
          <div className="journal-divider" />
        </div>

        <div className="journal-content">
          <div className="journal-left">
            <div className="journal-article-meta">
              <h3 className="journal-article-title">Kesalahan sebuah rancangan teknologi</h3>
            </div>
            <p className="journal-lead">
              Boraks, bahan kimia yang sering kali disalahgunakan dalam makanan, telah menjadi
              masalah serius bagi kesehatan masyarakat. Untuk membantu mendeteksi boraks dalam
              makanan, sebuah tim ilmuwan merancang alat pendeteksi borak yang diharapkan dapat
              digunakan oleh masyarakat umum, termasuk pedagang makanan di pasar tradisional.
              Teknologi ini awalnya diharapkan menjadi solusi praktis untuk mengidentifikasi
              keberadaan borak secara cepat dan mudah. Namun, setelah diuji di lapangan,
              ditemukan sejumlah masalah yang membuat alat ini tidak efektif dan tidak efisien
              digunakan oleh masyarakat umum.
            </p>
            <p className="journal-lead">
              Teknologi tersebut memerlukan beberapa tahapan yang rumit untuk mendapatkan hasil
              yang akurat, mulai dari pengambilan sampel yang presisi hingga pengoperasian alat
              dengan prosedur teknis tertentu. Mayoritas pedagang pasar atau masyarakat umum tidak
              memiliki latar belakang ilmu kimia atau keterampilan teknis yang memadai untuk
              menjalankan alat ini dengan benar. Alat ini juga membutuhkan perawatan berkala dan
              kalibrasi yang sulit dilakukan tanpa bantuan ahli, sehingga malah menjadi beban
              tambahan bagi pengguna.
            </p>
          </div>

          <div className="journal-right">
            <div className="journal-image-box">
              <img
                className="journal-image"
                src={boraxImage}
                alt="Ilustrasi deteksi boraks di lingkungan pasar"
              />
            </div>
            <p>
              Selain itu, harga alat ini relatif mahal, yang menyebabkan kesulitan bagi pedagang
              kecil untuk memilikinya. Alih-alih menyediakan solusi praktis, alat tersebut justru
              meningkatkan biaya operasional mereka tanpa memberikan manfaat yang nyata dalam
              jangka pendek. Akibatnya, banyak pedagang yang enggan menggunakannya, meskipun boraks
              tetap menjadi ancaman dalam industri makanan.
            </p>
            <p>
              Dari segi desain, alat ini juga tidak nyaman untuk digunakan di lapangan. Hal ini
              bertentangan dengan kebutuhan masyarakat yang memerlukan alat yang ringan, mudah
              dibawa, dan cepat digunakan. Masalah lain muncul pada hasil pengukuran yang kadang
              tidak konsisten, terutama dalam lingkungan dengan banyak gangguan, seperti kondisi
              pasar yang ramai dan bising.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
});

export default JournalPortraitPage;
