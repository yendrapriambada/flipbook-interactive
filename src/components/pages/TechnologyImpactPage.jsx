import { forwardRef } from 'react'
import { useAnswers } from '../../context/AnswersContext'

const TechnologyImpactPage = forwardRef(function TechnologyImpactPage(props, ref) {
  const { answers, setQ4Tech, setQ4Reason } = useAnswers()

  const stopFlipPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <div className="page" ref={ref}>
      <div className="page-content technology-impact-page">
        <div className="tech-impact-container">
          <div className="tech-impact-section">
            <label className="tech-impact-label">
              Menurut pendapatmu, teknologi manakah yang memberikan dampak positif terhadap
              penghematan air dan pengurangan pemborosan?
            </label>
            <textarea
              className="tech-impact-input"
              placeholder="Jawaban Anda..."
              value={answers.q4.tech}
              onChange={(e) => setQ4Tech(e.target.value)}
              onPointerDownCapture={stopFlipPropagation}
              onMouseDownCapture={stopFlipPropagation}
              onTouchStartCapture={stopFlipPropagation}
              autoComplete="off"
            />
          </div>

          <div className="tech-impact-section">
            <label className="tech-impact-label">
              Tuliskan alasanmu di bawah ini
            </label>
            <textarea
              className="tech-impact-input"
              placeholder="Jawaban Anda..."
              value={answers.q4.reason}
              onChange={(e) => setQ4Reason(e.target.value)}
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

TechnologyImpactPage.displayName = 'TechnologyImpactPage'

export default TechnologyImpactPage
