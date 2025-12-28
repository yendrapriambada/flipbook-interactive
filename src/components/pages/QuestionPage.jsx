import { forwardRef } from 'react'

const QuestionPage = forwardRef(function QuestionPage(props, ref) {
  return (
    <div className="page" ref={ref}>
      <div className="page-content page-question-right">
        <div className="question-icon-wrapper">
          <div className="question-icon">
            <span>?</span>
          </div>
        </div>
        <h2 className="page-heading page-heading-center">
          Apakah kamu menikmati flipbook ini?
        </h2>
        <p className="page-body-text page-body-center page-body-muted">
          Pilih jawaban yang sesuai dengan perasaanmu
        </p>

        <div className="question-choices">
          <button type="button" className="choice-card choice-yes">
            <span className="choice-icon">✓</span>
            <span className="choice-label">Ya</span>
          </button>
          <button type="button" className="choice-card choice-no">
            <span className="choice-icon">✕</span>
            <span className="choice-label">Tidak</span>
          </button>
        </div>

        <div className="page-number page-number-right">— 4 —</div>
      </div>
    </div>
  )
})

export default QuestionPage

