import { forwardRef, useEffect, useState } from 'react'

const ProblemAnswersPage = forwardRef(function ProblemAnswersPage(props, ref) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const fullText =
    'Mahasiswa diminta menuliskan hasil identifikasi permasalahan berdasarkan berita sebelumnya.'
  const [displayedText, setDisplayedText] = useState('')

  const [answers, setAnswers] = useState(Array(6).fill(''))

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

  const handleAnswerChange = (i) => (e) => {
    const next = [...answers]
    next[i] = e.target.value
    setAnswers(next)
  }

  return (
    <div className="page" ref={ref}>
      <div className="page-content answers-page">
        <div className="speech-bubble">
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

        <div className="answers-panel">
          <h2 className="answers-question">
            Menurutmu, apa saja permasalahan yang dihadapi di dalam wacana di atas?
          </h2>
          <div className="answers-list">
            {answers.map((value, i) => (
              <input
                key={i}
                type="text"
                className="answer-input"
                placeholder="Jawaban Anda..."
                value={value}
                onChange={handleAnswerChange(i)}
              />
            ))}
          </div>
        </div>

        <div className="page-indicator">
          <span className="indicator-dot indicator-dot-active" />
          <span className="indicator-dot" />
          <span className="indicator-dot" />
        </div>
        
      </div>
    </div>
  )
})

export default ProblemAnswersPage

