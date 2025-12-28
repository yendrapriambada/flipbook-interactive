import { forwardRef } from 'react'
import { useAnswers } from '../../context/AnswersContext'

const PresentationSlidesLayoutPage = forwardRef(function PresentationSlidesLayoutPage(props, ref) {
  const { answers, setS3Left, setS3SlideAt } = useAnswers()

  const stopFlipPropagation = (e) => {
    e.stopPropagation()
  }

  const handleSlideChange = (i) => (e) => {
    setS3SlideAt(i, e.target.value)
  }

  return (
    <div className="page" ref={ref}>
      <div className="page-content presentation-slides-page">
        <div className="evaluation-question-card">
          <h5 className="evaluation-question">
            Andi mendapatkan email dari Dosennya berupa tugas presentasi kelompok.
            Sebagai ketua kelompok, perlukah Andi menyampaikan kepada semua anggota
            kelompok bahwasanya ada tugas yang diberikan dosen melalui pesan teks email
            tersebut? Berikan alasannya!
          </h5>
          <div className="evaluation-input-wrapper">
            <textarea
              placeholder="Jawaban Anda..."
              value={answers.s3.left}
              onChange={(e) => setS3Left(e.target.value)}
              onPointerDownCapture={stopFlipPropagation}
              onMouseDownCapture={stopFlipPropagation}
              onTouchStartCapture={stopFlipPropagation}
            />
          </div>
        </div>

        <div className="evaluation-question-card slides-section">
          <h5 className="evaluation-question">
            Berdasarkan pesan teks email di atas, setelah bekerja dengan kelompok, poin utama apa saja yang tepat
            untuk disajikan oleh kelompok Andi pada tugas presentasi tersebut?
          </h5>
          <div className="slides-grid">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className={`slide-card ${['slide-orange','slide-yellow','slide-green','slide-teal','slide-pink'][i]}`}>
                <div className="slide-title">Slide {i + 1}</div>
                <input
                  type="text"
                  className="slide-input"
                  placeholder="Ketik jawabanmu di sini..."
                  value={answers.s3.slides[i]}
                  onChange={handleSlideChange(i)}
                  onPointerDownCapture={stopFlipPropagation}
                  onMouseDownCapture={stopFlipPropagation}
                  onTouchStartCapture={stopFlipPropagation}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="page-indicator">
          <span className="indicator-dot indicator-dot-active" />
          <span className="indicator-dot" />
          <span className="indicator-dot" />
        </div>
        <div className="page-number">— Presentasi —</div>
      </div>
    </div>
  )
})

export default PresentationSlidesLayoutPage
