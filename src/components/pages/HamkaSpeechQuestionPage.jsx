import { forwardRef, useEffect, useState } from 'react'
import useAnswers from '../../context/useAnswers'

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
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel()
        const utter = new SpeechSynthesisUtterance(fullText.replace(/\n+/g, ' '))
        utter.lang = 'id-ID'
        utter.onend = () => {
          setIsPlaying(false)
          setIsCompleted(true)
        }
        utter.onerror = () => {
          setIsPlaying(false)
          setIsCompleted(true)
        }
        window.speechSynthesis.speak(utter)
      }
    }
  }

  useEffect(() => {
    if (!isPlaying) return
    let index = 0
    const words = fullText.trim().split(/\s+/).length
    const rate = 0.9
    const secs = (words * 60) / (130 * rate)
    const perChar = Math.max(15, Math.min(80, (secs * 1000) / fullText.length))
    const intervalId = setInterval(() => {
      index += 1
      setDisplayedText(fullText.slice(0, index))
      if (index >= fullText.length) {
        clearInterval(intervalId)
        if (!window.speechSynthesis) {
          setIsPlaying(false)
          setIsCompleted(true)
        }
      }
    }, perChar)
    return () => {
      clearInterval(intervalId)
      if (window.speechSynthesis) window.speechSynthesis.cancel()
    }
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

        <div className="character-section" style={{ marginTop: '0', marginBottom: '16px' }}>
          <div className="avatar-ring">
            <div className="avatar-ring-inner">
              <img
                src="https://images.pexels.com/photos/8617727/pexels-photo-8617727.jpeg"
                alt="Karakter Dosen"
                className="character-avatar"
              />
            </div>
          </div>
          <div className="character-info">
            <h3 className="character-name">Bapak Hamka</h3>
            <p className="character-role">Dosen</p>
          </div>
        </div>

        <div className="evaluation-question-card">
          <h3 className="evaluation-question">
            Berdasarkan karakteristik media digital yang disediakan pada wacana, media mana yang paling tepat untuk memberikan pengalaman pembelajaran interaktif dan visual? Jelaskan alasan Anda.
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
            Berdasarkan tujuan pembelajaran untuk memahami boraks secara mendalam dan menyusun laporan ilmiah, media digital mana yang paling tepat digunakan? Jelaskan alasan pemilihan Anda.
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
        
      </div>
    </div>
  )
})

export default HamkaSpeechQuestionPage
