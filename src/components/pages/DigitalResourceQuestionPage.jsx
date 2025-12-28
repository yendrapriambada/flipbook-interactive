import { forwardRef, useEffect, useState } from 'react'
import { useAnswers } from '../../context/AnswersContext'

const DigitalResourceQuestionPage = forwardRef(function DigitalResourceQuestionPage(props, ref) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const fullText =
    '"Mahasiswa diminta mengidentifikasi media digital yang tepat berdasarkan wacana yang telah disajikan sebelumnya."'
  const [displayedText, setDisplayedText] = useState('')
  const { answers, setQ7Answer } = useAnswers()

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
            Berdasarkan wacana tersebut, sumber daya digital manakah yang tepat untuk membantu petani memahami, menerapkan, dan memanfaatkan teknologi irigasi modern dengan lebih efektif? Berikan alasannya!
          </h3>
          <div className="evaluation-input-wrapper">
            <textarea
              placeholder="Tulis jawaban dan alasannya di sini..."
              value={answers.q7.answer}
              onChange={(e) => setQ7Answer(e.target.value)}
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

export default DigitalResourceQuestionPage
