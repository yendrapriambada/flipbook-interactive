import { forwardRef } from 'react'
import useAnswers from '../../context/useAnswers'

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
              Sebagai ketua kelompok, jelaskan apakah Anda melibatkan seluruh anggota kelompok dalam menyusun dan mengelola data. Sertakan alasan Anda!
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

          <div className="question-block">
            <label className="analysis-question">
              Susun data hasil pengujian ke dalam tabel yang sistematis, kemudian tentukan sampel yang mengandung boraks dan yang tidak mengandung boraks berdasarkan informasi tekstur, warna, dan daya tahan!
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
        </div>
      </div>
    </div>
  )
})

BoraksQuestionsPage.displayName = 'BoraksQuestionsPage'

export default BoraksQuestionsPage
