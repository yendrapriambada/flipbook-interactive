import { forwardRef, useEffect, useState } from 'react'

const ContextPage = forwardRef(function ContextPage(props, ref) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const fullText =
    '"Mahasiswa diminta untuk mengeksplorasi dan mencari informasi dari berbagai sumber terkait permasalahan."'
  const [displayedText, setDisplayedText] = useState('')

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

  return (
    <div className="page" ref={ref}>
      <div className="page-content page-hero-right">
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

        <div className="character-section">
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

        <div className="page-indicator page-indicator-right">
          <span className="indicator-dot indicator-dot-active" />
          <span className="indicator-dot" />
          <span className="indicator-dot" />
        </div>
        <div className="page-number page-number-right">— 1 —</div>
      </div>
    </div>
  )
})

export default ContextPage
