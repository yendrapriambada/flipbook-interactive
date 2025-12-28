import { forwardRef, useEffect, useState } from 'react'
import { useAnswers } from '../../context/AnswersContext'

const HamkaSpeechQuestionPage = forwardRef(function HamkaSpeechQuestionPage(props, ref) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const fullText =
    '"Mahasiswa diminta menjawab pertanyaan berdasarkan wacana Classroom Newsletter yang telah disajikan diatas."'
  const [displayedText, setDisplayedText] = useState('')
  const { answers, setS7A1, setS7A2 } = useAnswers()

  const handlePlayClick = () => {
    if (!isPlaying) {
      setDisplayedText('')
      setIsCompleted(false)
      setIsPlaying(true)
    }
  }

  useEffect(() => {
    if (!isPlaying) return
    let index = 0
    const intervalId = setInterval(() => {
      index += 1
      setDisplayedText(fullText.slice(0, index))
      if (index >= fullText.length) {
        clearInterval(intervalId)
        setIsPlaying(false)
        setIsCompleted(true)
      }
    }, 35)
    return () => clearInterval(intervalId)
  }, [isPlaying, fullText])

  const stopFlipPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <div className="page" ref={ref}>
      <div className="page-content answer-form-page">
        <div className="speech-bubble answer-speech">
          <p>{displayedText || 'Klik ▶ Play untuk memutar teks'}</p>
        </div>
        {!isCompleted && (
          <button
            type="button"
            className={`student-play-button ${isPlaying ? 'student-play-button-active' : ''}`}
            onClick={handlePlayClick}
            disabled={isPlaying}
          >
            {isPlaying ? 'Listening...' : '▶ Play'}
          </button>
        )}

        <div className="evaluation-question-card">
          <h3 className="evaluation-question">
            Jika tujuan guru adalah memberikan pengalaman pembelajaran interaktif dan visual, media digital mana
            yang paling tepat untuk digunakan? Jelaskan alasannya.
          </h3>
          <div className="evaluation-input-wrapper">
            <textarea
              placeholder="Jawaban Anda..."
              value={answers.s7.a1}
              onChange={(e) => setS7A1(e.target.value)}
              onPointerDownCapture={stopFlipPropagation}
              onMouseDownCapture={stopFlipPropagation}
              onTouchStartCapture={stopFlipPropagation}
            />
          </div>
        </div>

        <div className="evaluation-question-card">
          <h3 className="evaluation-question">
            Jika siswa diminta untuk mempelajari boraks secara mendalam dan menulis laporan ilmiah, media mana
            yang paling tepat digunakan? Jelaskan mengapa?
          </h3>
          <div className="evaluation-input-wrapper">
            <textarea
              placeholder="Jawaban Anda..."
              value={answers.s7.a2}
              onChange={(e) => setS7A2(e.target.value)}
              onPointerDownCapture={stopFlipPropagation}
              onMouseDownCapture={stopFlipPropagation}
              onTouchStartCapture={stopFlipPropagation}
            />
          </div>
        </div>

        <div className="page-number">— 1 —</div>
      </div>
    </div>
  )
})

export default HamkaSpeechQuestionPage
