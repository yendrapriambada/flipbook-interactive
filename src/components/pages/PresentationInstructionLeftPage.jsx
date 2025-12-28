import { forwardRef } from 'react'

const PresentationInstructionLeftPage = forwardRef(function PresentationInstructionLeftPage(props, ref) {
  return (
    <div className="page" ref={ref}>
      <div className="page-content presentation-instruction-page">
        <div className="instruction-card">
          <div className="page-heading-wrapper page-heading-with-icon">
            <div className="heading-icon">📢</div>
            <h2 className="page-heading">Tugas</h2>
          </div>
          <div className="heading-underline">
            <span className="heading-line-main" />
            <span className="heading-line-accent" />
          </div>

          <h3 className="instruction-subtitle">Intruksi Presentasi</h3>
          <ul className="instruction-list">
            <li>
              Anda dan tim Anda diminta untuk membuat presentasi kelompok
              mengenai "Desain Irigasi Hemat Energi: Solusi untuk Daerah
              dengan Keterbatasan Sumber Daya".
            </li>
            <li>Setiap kelompok terdiri dari 4 orang.</li>
            <li>
              Gunakan maksimal 5 slide untuk menyampaikan ide utama, data
              pendukung, dan kesimpulan.
            </li>
            <li>
              Setiap slide harus kombinasi antara teks dan visual (gambar,
              grafik, atau diagram) yang mendukung.
            </li>
            <li>
              Struktur presentasi meliputi: pendahuluan yang menarik perhatian;
              isi yang membahas inti masalah, tantangan, serta solusi; penutup
              yang berisi kesimpulan dan ajakan untuk bertindak.
            </li>
          </ul>

          <h3 className="instruction-subtitle">Kriteria Penilaian</h3>
          <ul className="instruction-list">
            <li>Kejelasan dan keringkasan penyampaian ide.</li>
            <li>Relevansi konten dengan topik yang diberikan.</li>
            <li>Penggunaan media visual yang membantu memperkuat pesan.</li>
            <li>
              Keterlibatan aktif setiap anggota dalam diskusi kelompok dan
              penyelesaian tugas.
            </li>
            <li>
              Kemampuan bekerja sama dalam tim untuk membagi tugas secara
              merata.
            </li>
          </ul>

          <div className="page-number">— Instruksi —</div>
        </div>
      </div>
    </div>
  )
})

export default PresentationInstructionLeftPage
