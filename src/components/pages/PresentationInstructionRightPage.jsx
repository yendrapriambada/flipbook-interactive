import { forwardRef } from 'react'
import { useAnswers } from '../../context/AnswersContext'

const PresentationInstructionRightPage = forwardRef(function PresentationInstructionRightPage(props, ref) {
  const { answers, setQ6WillDelegate, setQ6Reason, setQ6WorkLink } = useAnswers()

  const stopFlipPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <div className="page" ref={ref}>
      <div className="page-content presentation-instruction-page">
        <div className="evaluation-question-card">
          <h3 className="evaluation-question">
            Berdasarkan teks tugas di atas, jika Anda berperan sebagai ketua
            kelompok, apakah Anda akan membagi tugas kepada setiap anggota
            kelompok dalam menyiapkan presentasi tersebut? Mengapa?
          </h3>
          <div className="evaluation-choices">
            <button
              type="button"
              className={`evaluation-btn evaluation-btn-yes ${answers.q6.willDelegate === true ? 'evaluation-selected' : ''}`}
              onPointerDownCapture={stopFlipPropagation}
              onMouseDownCapture={stopFlipPropagation}
              onTouchStartCapture={stopFlipPropagation}
              onClick={() => setQ6WillDelegate(true)}
            >
              {answers.q6.willDelegate === true ? 'Ya (✓)' : 'Ya'}
            </button>
            <button
              type="button"
              className={`evaluation-btn evaluation-btn-no ${answers.q6.willDelegate === false ? 'evaluation-selected' : ''}`}
              onPointerDownCapture={stopFlipPropagation}
              onMouseDownCapture={stopFlipPropagation}
              onTouchStartCapture={stopFlipPropagation}
              onClick={() => setQ6WillDelegate(false)}
            >
              {answers.q6.willDelegate === false ? 'Tidak (✓)' : 'Tidak'}
            </button>
          </div>
          <div className="evaluation-input-wrapper">
            <label>
              {answers.q6.willDelegate === null
                ? 'Tuliskan alasanmu di sini'
                : answers.q6.willDelegate
                ? 'Mengapa memilih membagi tugas?'
                : 'Mengapa tidak membagi tugas?'}
            </label>
            <textarea
              placeholder="Tuliskan alasanmu di sini"
              value={answers.q6.reason}
              onChange={(e) => setQ6Reason(e.target.value)}
              onPointerDownCapture={stopFlipPropagation}
              onMouseDownCapture={stopFlipPropagation}
              onTouchStartCapture={stopFlipPropagation}
            />
          </div>
        </div>

        <div className="evaluation-question-card">
          <h3 className="evaluation-question">
            Berdasarkan teks tugas di atas, setelah Anda bekerja dengan kelompok,
            buat sebuah presentasi multimedia dengan topik "Desain Irigasi Hemat
            Energi: Solusi untuk Daerah dengan Keterbatasan Sumber Daya" sesuai
            instruksi presentasi.
          </h3>
          <p className="page-body-text page-body-muted">
            (Silahkan gunakan aplikasi membuat presentasi yang ketahui)
          </p>
          <div className="evaluation-input-wrapper">
            <label>Tuliskan link hasil kerja di sini</label>
            <textarea
              placeholder="Tuliskan link hasil kerja di sini"
              value={answers.q6.workLink}
              onChange={(e) => setQ6WorkLink(e.target.value)}
              onPointerDownCapture={stopFlipPropagation}
              onMouseDownCapture={stopFlipPropagation}
              onTouchStartCapture={stopFlipPropagation}
            />
          </div>
        </div>

        <div className="page-number page-number-right">— Pertanyaan —</div>
      </div>
    </div>
  )
})

export default PresentationInstructionRightPage
