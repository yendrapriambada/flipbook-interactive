import { forwardRef, useState } from 'react'

const PresentationInstructionPage = forwardRef(function PresentationInstructionPage(props, ref) {
  const [willDelegate, setWillDelegate] = useState(null)
  const [reason, setReason] = useState('')
  const [workLink, setWorkLink] = useState('')

  const stopFlipPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <div className="page" ref={ref}>
      <div className="page-content presentation-instruction-page">
        <div className="presentation-layout">
          <div className="presentation-left">
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
                  Struktur presentasi meliputi: pendahuluan yang menarik
                  perhatian; isi yang membahas inti masalah, tantangan, serta
                  solusi; penutup yang berisi kesimpulan dan ajakan untuk
                  bertindak.
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
            </div>
          </div>

          <div className="presentation-right">
            <div className="evaluation-question-card">
              <h3 className="evaluation-question">
                Berdasarkan teks tugas di atas, jika Anda berperan sebagai ketua
                kelompok, apakah Anda akan membagi tugas kepada setiap anggota
                kelompok dalam menyiapkan presentasi tersebut? Mengapa?
              </h3>
              <div className="evaluation-choices">
                <button
                  type="button"
                  className="evaluation-btn evaluation-btn-yes"
                  onPointerDownCapture={stopFlipPropagation}
                  onMouseDownCapture={stopFlipPropagation}
                  onTouchStartCapture={stopFlipPropagation}
                  onClick={() => setWillDelegate(true)}
                >
                  Ya
                </button>
                <button
                  type="button"
                  className="evaluation-btn evaluation-btn-no"
                  onPointerDownCapture={stopFlipPropagation}
                  onMouseDownCapture={stopFlipPropagation}
                  onTouchStartCapture={stopFlipPropagation}
                  onClick={() => setWillDelegate(false)}
                >
                  Tidak
                </button>
              </div>
              <div className="evaluation-input-wrapper">
                <label>
                  {willDelegate === null
                    ? 'Tuliskan alasanmu di sini'
                    : willDelegate
                    ? 'Mengapa memilih membagi tugas?'
                    : 'Mengapa tidak membagi tugas?'}
                </label>
                <textarea
                  placeholder="Tuliskan alasanmu di sini"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  onPointerDownCapture={stopFlipPropagation}
                  onMouseDownCapture={stopFlipPropagation}
                  onTouchStartCapture={stopFlipPropagation}
                />
              </div>
            </div>

            <div className="evaluation-question-card">
              <h3 className="evaluation-question">
                Berdasarkan teks tugas di atas, setelah Anda bekerja dengan
                kelompok, buat sebuah presentasi multimedia dengan topik "Desain
                Irigasi Hemat Energi: Solusi untuk Daerah dengan Keterbatasan
                Sumber Daya" sesuai instruksi presentasi.
              </h3>
              <p className="page-body-text page-body-muted">
                (Silahkan gunakan aplikasi membuat presentasi yang ketahui)
              </p>
              <div className="evaluation-input-wrapper">
                <label>Tuliskan link hasil kerja di sini</label>
                <textarea
                  placeholder="Tuliskan link hasil kerja di sini"
                  value={workLink}
                  onChange={(e) => setWorkLink(e.target.value)}
                  onPointerDownCapture={stopFlipPropagation}
                  onMouseDownCapture={stopFlipPropagation}
                  onTouchStartCapture={stopFlipPropagation}
                />
              </div>
            </div>

            <div className="page-number page-number-right">— 6 —</div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default PresentationInstructionPage
