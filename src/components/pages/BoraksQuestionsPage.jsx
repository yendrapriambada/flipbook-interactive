import { forwardRef } from 'react'
import { useAnswers } from '../../context/AnswersContext'

const BoraksQuestionsPage = forwardRef(function BoraksQuestionsPage(props, ref) {
  const { answers, setQ10Involvement, setQ10TableInfo } = useAnswers()

  const stopFlipPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <div className="page" ref={ref}>
      <div className="page-content boraks-questions-page">
        <div className="analysis-container">
          <div className="question-block">
            <label className="analysis-question">
              Sebagai ketua kelompok, apakah anda melibatkan semua anggota kelompok
              dalam menyusun dan mengelola data? mengapa?
            </label>
            <textarea
              className="analysis-textarea"
              placeholder="Jawaban Anda..."
              value={answers.q10.involvement}
              onChange={(e) => setQ10Involvement(e.target.value)}
              onPointerDownCapture={stopFlipPropagation}
              onMouseDownCapture={stopFlipPropagation}
              onTouchStartCapture={stopFlipPropagation}
              autoComplete="off"
            />
          </div>

          <div className="question-block">
            <label className="analysis-question">
              Buat tabel yang mengorganisasi data tersebut, sehingga diperoleh
              informasi sampel yang mengandung boraks! (Silahkan tulis atau ketik
              link pada kolom di bawah ini!)
            </label>
            <textarea
              className="analysis-textarea"
              placeholder="Jawaban Anda..."
              value={answers.q10.tableInfo}
              onChange={(e) => setQ10TableInfo(e.target.value)}
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

BoraksQuestionsPage.displayName = 'BoraksQuestionsPage'

export default BoraksQuestionsPage
