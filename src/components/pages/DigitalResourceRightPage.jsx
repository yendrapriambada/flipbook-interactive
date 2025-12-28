import { forwardRef } from 'react'
import { useAnswers } from '../../context/AnswersContext'

const DigitalResourceRightPage = forwardRef(function DigitalResourceRightPage(props, ref) {
  const { answers, setQ8Link, setQ8Summary } = useAnswers()

  const stopFlipPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <div className="page" ref={ref}>
      <div className="page-content digital-right">
        <div className="instruction-card instruction-compact">
          <h3 className="instruction-title instruction-compact-title">
            Berdasarkan pilihan sumber daya digital yang disediakan, temukan 1 artikel/video/e-book
            yang berisi informasi atau konten online tentang teknologi pendeteksi makanan boraks.
          </h3>
          <input
            type="url"
            className="link-input input-compact"
            placeholder="Tempelkan link di sini"
            value={answers.q8.link}
            onChange={(e) => setQ8Link(e.target.value)}
            onPointerDownCapture={stopFlipPropagation}
            onMouseDownCapture={stopFlipPropagation}
            onTouchStartCapture={stopFlipPropagation}
            autoComplete="off"
          />
        </div>

        <div className="instruction-card instruction-compact">
          <h3 className="instruction-title instruction-compact-title">
            Jelaskan apa yang dibahas dalam artikel/video/e-book yang anda temukan!
          </h3>
          <textarea
            className="analysis-textarea textarea-compact"
            placeholder="Jawaban singkat Anda"
            value={answers.q8.summary}
            onChange={(e) => setQ8Summary(e.target.value)}
            onPointerDownCapture={stopFlipPropagation}
            onMouseDownCapture={stopFlipPropagation}
            onTouchStartCapture={stopFlipPropagation}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  )
})

DigitalResourceRightPage.displayName = 'DigitalResourceRightPage'

export default DigitalResourceRightPage
