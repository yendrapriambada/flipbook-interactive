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
            "Penerapan Teknologi Sensor Perubahan Warna dalam Pembelajaran IPA
            untuk Deteksi Bahan Berbahaya dalam Makanan"
          </h2>
        </div>

        <div className="newsletter-body">
          <p>
            Seorang ilmuwan teknologi pangan telah merancang alat pendeteksi
            bahan kimia berbahaya dalam makanan yang menggunakan sensor kimiawi
            berbasis perubahan warna. Alat ini bekerja dengan meneteskan reagen
            khusus ke sampel makanan, yang kemudian menunjukkan perubahan
            warna jika bahan kimia berbahaya terdeteksi. Misalnya, jika
            terdapat borak dalam makanan, warna sampel akan berubah menjadi
            biru, sedangkan makanan yang aman akan tetap berwarna netral.
          </p>
          <p>
            Seorang guru IPA berencana memanfaatkan teknologi ini dalam
            kegiatan pembelajaran interaktif di kelas. Dengan menggunakan alat
            tersebut, guru ingin mengajak siswa memahami pentingnya teknologi
            deteksi bahan berbahaya dalam menjaga kesehatan konsumen. Untuk
            mendukung pembelajaran, beberapa pilihan media digital disiapkan
            untuk memaksimalkan pemahaman siswa:
          </p>
          <ol className="newsletter-list">
            <li>Artikel ilmiah</li>
            <li>Video Simulasi</li>
            <li>Quiz Interaktif Online</li>
            <li>Virtual Lab</li>
          </ol>
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
