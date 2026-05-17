import { forwardRef } from 'react'
import useAnswers from '../../context/useAnswers'

const DigitalResourceQuestionPage = forwardRef(function DigitalResourceQuestionPage(props, ref) {
  const { answers, setQ7Answer, setQ8Features, setQ9Benefits } = useAnswers()

  const stopFlipPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <div className="page" ref={ref}>
      <div className="page-content answer-form-page">

        <div className="evaluation-question-card">
          <h3 className="evaluation-question">
            Berdasarkan informasi dari <i>Newspaper</i> di atas, bagaimana anda akan mendesain alat tersebut agar
            lebih mudah digunakan oleh pedagang di pasar tradisional!
          </h3>
          <div className="evaluation-input-wrapper">
            <textarea
              placeholder="Jawaban Anda..."
              rows={3}
              value={answers.q7.answer}
              onChange={(e) => setQ7Answer(e.target.value)}
              onPointerDownCapture={stopFlipPropagation}
              onMouseDownCapture={stopFlipPropagation}
              onTouchStartCapture={stopFlipPropagation}
            />
          </div>
        </div>

        <div className="evaluation-question-card">
          <h3 className="evaluation-question">
            Sebutkan fitur tambahan yang perlu ditambahkan pada alat tersebut agar lebih efektif, praktis, dan
            ramah pengguna!
          </h3>
          <div className="evaluation-input-wrapper">
            <textarea
              placeholder="Jawaban Anda..."
              rows={3}
              value={answers.q8.features}
              onChange={(e) => setQ8Features(e.target.value)}
              onPointerDownCapture={stopFlipPropagation}
              onMouseDownCapture={stopFlipPropagation}
              onTouchStartCapture={stopFlipPropagation}
            />
          </div>
        </div>

        <div className="evaluation-question-card">
          <h3 className="evaluation-question">
            Jelaskan manfaat dari desain alatmu untuk membantu menyelesaikan masalah yang dihadapi para pedagang!
          </h3>
          <div className="evaluation-input-wrapper">
            <textarea
              placeholder="Jawaban Anda..."
              rows={3}
              value={answers.q9.benefits}
              onChange={(e) => setQ9Benefits(e.target.value)}
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

export default DigitalResourceQuestionPage
