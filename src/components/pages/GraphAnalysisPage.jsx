import { forwardRef } from 'react'
import { useAnswers } from '../../context/AnswersContext'

const GraphAnalysisPage = forwardRef(function GraphAnalysisPage(props, ref) {
  const { answers, setQ3Analysis, setQ3PeerReview } = useAnswers()

  const stopFlipPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <div className="page" ref={ref}>
      <div className="page-content graph-analysis-page">
        <div className="analysis-container">
          <div className="question-block">
              <label className="analysis-question">
                Jelaskan informasi apa yang didapatkan dari grafik batang tersebut!
              </label>
              <textarea
                className="analysis-textarea"
                placeholder="Jawaban Anda...."
                value={answers.q3.analysis}
                onChange={(e) => setQ3Analysis(e.target.value)}
                onPointerDownCapture={stopFlipPropagation}
                onMouseDownCapture={stopFlipPropagation}
                onTouchStartCapture={stopFlipPropagation}
                autoComplete="off"
              />
            </div>

            <div className="question-block">
              <label className="analysis-question">
                Sebagai anggota kelompok, apakah anda meminta saran atau revisi kepada
                teman dalam kelompok setelah grafik batang (bar chart) dibuat?
                Mengapa?
              </label>
              <textarea
                className="analysis-textarea"
                placeholder="Jawaban Anda...."
                value={answers.q3.peerReview}
                onChange={(e) => setQ3PeerReview(e.target.value)}
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

GraphAnalysisPage.displayName = 'GraphAnalysisPage'

export default GraphAnalysisPage
