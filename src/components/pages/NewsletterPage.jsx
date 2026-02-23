import { forwardRef } from 'react'

const NewsletterPage = forwardRef(function NewsletterPage(props, ref) {
  const stopFlipPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <div className="page" ref={ref}>
      <div className="page-content newsletter-page">
        <div className="newsletter-topbar">
          <span className="newsletter-brand">Classroom Newsletter</span>
          <span className="newsletter-volume">Vol. 09</span>
        </div>

        <div className="newsletter-banner">
          <h2 className="newsletter-title">
            "Pemanfaatan Teknologi Deteksi Boraks dalam Pembalajaran IPA"
          </h2>
        </div>

        <div className="newsletter-body">
          <p>
            Seorang ilmuwan teknologi pangan telah merancang alat pendeteksi
            bahan kimia berbahaya dalam makanan yang bekerja menggunakan sensor kimia
            berbasis perubahan warna. Alat ini digunakan dengan meneteskan reagen
            khusus ke sampel makanan. Jika sampel mengandung boraks, warna akan berubah 
            menjadi biru, sedangkan jika aman, warna akan tetap netral.
          </p>
          <p>
            Seorang guru IPA berencana memanfaatkan teknologi ini sebagai bagian
            dari pembelajaran untuk membantu siswa memahami peran teknologi dalam menjaga
            keamanan pangan dan kesehatan masyarakat. Guru tersebut tidak hanya ingin siswa mengetahui
            hasil deteksi, tetapi juga memahami proses kerja alat, makna hasil pengujian, serta
            implikasinya bagi kehidupan sehari-hari.
          </p>
          <p>
            Untuk mendukung tujuan pembelajaran tersebut, guru mempertimbangkan beberapa media digital
            yang memiliki karakteristik berbeda dalam hal visualisasi, interaktivitas, dan kedalaman materi, yaitu:
          </p>
          <ol className="newsletter-list">
            <li>Artikel ilmiah</li>
            <li>Video Simulasi</li>
            <li>Quiz Interaktif Online</li>
            <li>Virtual Lab</li>
          </ol>
          <p>
            Guru perlu memilih media yang paling sesuai dengan tujuan pembelajaran yang ingin
            dicapai pada setiap kegiatan.
          </p>
        </div>

        <div className="newsletter-footer">
          <a
            href="https://www.indonesiaschool.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="newsletter-readmore"
            onPointerDownCapture={stopFlipPropagation}
            onMouseDownCapture={stopFlipPropagation}
            onTouchStartCapture={stopFlipPropagation}
          >
            READ MORE · www.IndonesiaSchool.com
          </a>
          <span className="newsletter-mark">❀</span>
        </div>
      </div>
    </div>
  )
})

NewsletterPage.displayName = 'NewsletterPage'

export default NewsletterPage
