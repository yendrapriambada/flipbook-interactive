import { forwardRef } from 'react'
import useAnswers from '../../context/useAnswers'

const ExpertSelectionPage = forwardRef(function ExpertSelectionPage(props, ref) {
  const { answers, setQ5Choice, setQ5Reason } = useAnswers()

  const stopFlipPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <div className="page" ref={ref}>
      <div className="page-content technology-impact-page">
        <div className="tech-impact-container">
          <div className="tech-impact-section">
            <label className="tech-impact-label">
              Berdasarkan wacana, pendapat pakar mana yang paling tepat sebagai solusi teknologi untuk mengatasi masalah boraks dalam makanan? Jelaskan alasan pemilihan Anda dibandingkan alternatif lainnya.
            </label>
            <textarea
              className="tech-impact-input"
              placeholder="Jawaban Anda..."
              value={answers.q5.choice}
              onChange={(e) => setQ5Choice(e.target.value)}
              onPointerDownCapture={stopFlipPropagation}
              onMouseDownCapture={stopFlipPropagation}
              onTouchStartCapture={stopFlipPropagation}
              autoComplete="off"
            />
          </div>

          <div className="tech-impact-section">
            <label className="tech-impact-label">Tuliskan alasanmu di bawah ini</label>
            <textarea
              className="tech-impact-input"
              placeholder="Jawaban Anda..."
              value={answers.q5.reason}
              onChange={(e) => setQ5Reason(e.target.value)}
              onPointerDownCapture={stopFlipPropagation}
              onMouseDownCapture={stopFlipPropagation}
              onTouchStartCapture={stopFlipPropagation}
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </div>
  )
})

ExpertSelectionPage.displayName = 'ExpertSelectionPage'

export default ExpertSelectionPage
