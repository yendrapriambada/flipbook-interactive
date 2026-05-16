import { forwardRef } from 'react'
import useAnswers from '../../context/useAnswers'

const PosterTaskRightPage = forwardRef(function PosterTaskRightPage(props, ref) {
  const { answers, setQ9PosterLink, setQ9NeedDiscussion, setQ9Reason } = useAnswers()

  const stopFlipPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <div className="page" ref={ref}>
      <div className="page-content presentation-instruction-page">
        <div className="evaluation-question-card">
          <h3 className="evaluation-question">
            Buatlah satu desain poster yang menjelaskan teknologi pendeteksi boraks pada makanan kepada audiens, kemudian tuliskan tautan (link) hasil desain yang telah Anda buat pada bagian yang disediakan.
          </h3>
          <div className="evaluation-input-wrapper">
            <textarea
              placeholder="Jawaban Anda..."
              value={answers.q9.posterLink}
              onChange={(e) => setQ9PosterLink(e.target.value)}
              onPointerDownCapture={stopFlipPropagation}
              onMouseDownCapture={stopFlipPropagation}
              onTouchStartCapture={stopFlipPropagation}
            />
          </div>
        </div>

        <div className="evaluation-question-card">
          <h3 className="evaluation-question">
            Sebagai anggota kelompok, apakah Anda perlu melakukan diskusi bersama anggota kelompok dalam memilih informasi yang sesuai untuk menyelesaikan tugas pembuatan poster tersebut? Jelaskan alasan Anda.
          </h3>
          <div className="evaluation-choices">
            <button
              type="button"
              className={`evaluation-btn evaluation-btn-yes ${answers.q9.needDiscussion === true ? 'evaluation-selected' : ''}`}
              onPointerDownCapture={stopFlipPropagation}
              onMouseDownCapture={stopFlipPropagation}
              onTouchStartCapture={stopFlipPropagation}
              onClick={() => setQ9NeedDiscussion(true)}
            >
              {answers.q9.needDiscussion === true ? 'Ya (✓)' : 'Ya'}
            </button>
            <button
              type="button"
              className={`evaluation-btn evaluation-btn-no ${answers.q9.needDiscussion === false ? 'evaluation-selected' : ''}`}
              onPointerDownCapture={stopFlipPropagation}
              onMouseDownCapture={stopFlipPropagation}
              onTouchStartCapture={stopFlipPropagation}
              onClick={() => setQ9NeedDiscussion(false)}
            >
              {answers.q9.needDiscussion === false ? 'Tidak (✓)' : 'Tidak'}
            </button>
          </div>
          <div className="evaluation-input-wrapper">
            <label>Tulis alasanmu di bawah ini!</label>
            <textarea
              placeholder="Jawaban Anda..."
              value={answers.q9.reason}
              onChange={(e) => setQ9Reason(e.target.value)}
              onPointerDownCapture={stopFlipPropagation}
              onMouseDownCapture={stopFlipPropagation}
              onTouchStartCapture={stopFlipPropagation}
            />
          </div>
        </div>

        
      </div>
    </div>
  )
})

export default PosterTaskRightPage
