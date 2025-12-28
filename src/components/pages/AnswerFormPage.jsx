import { forwardRef } from 'react'
import { useAnswers } from '../../context/AnswersContext'

const AnswerFormPage = forwardRef(function AnswerFormPage(props, ref) {
  const { onInputFocusChange } = props
  const { answers: ctxAnswers, setQ1At } = useAnswers()

  const handleChange = (index, value) => {
    setQ1At(index, value)
  }

  const stopFlipPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <div className="page" ref={ref}>
      <div className="page-content answer-form-page">
        <div className="speech-bubble answer-speech">
          <p>Mahasiswa diminta menuliskan identifikasi permasalahan berdasarkan wacana.</p>
        </div>

        <div className="answer-form-card">
          <h3 className="answer-form-title">
            Menurutmu, apa saja permasalahan yang dihadapi di dalam wacana?
          </h3>
          <div className="answers-grid">
            {ctxAnswers.q1.map((val, idx) => (
              <input
                key={idx}
                type="text"
                className="answer-input"
                placeholder="Jawaban Anda..."
                value={val}
                onChange={(e) => handleChange(idx, e.target.value)}
                onPointerDownCapture={stopFlipPropagation}
                onMouseDownCapture={stopFlipPropagation}
                onTouchStartCapture={stopFlipPropagation}
                autoComplete="off"
              />
            ))}
          </div>
        </div>

        <div className="page-number">— 5 —</div>
      </div>
    </div>
  )
})

export default AnswerFormPage
