import { forwardRef, useState, useEffect } from 'react'
import canvaLogo from '../../assets/canva.png'
import publisherLogo from '../../assets/microsoft_publisher.png'
import piktochartLogo from '../../assets/piktochart.png'

const PosterAppsLeftPage = forwardRef(function PosterAppsLeftPage(props, ref) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const fullText = "Gunakan informasi digital yang telah ditemukan dan dipilih sebelumnya untuk menjelaskan kepada audiens. Anda dapat memanfaatkan salah satu aplikasi desain poster yang disarankan."
  const [displayedText, setDisplayedText] = useState('')

  const handlePlayClick = () => {
    if (!isPlaying) {
      setDisplayedText('')
      setIsCompleted(false)
      setIsPlaying(true)
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel()
        const utter = new SpeechSynthesisUtterance(fullText.replace(/\n+/g, ' '))
        utter.lang = 'id-ID'
        utter.rate = 0.9
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
      <div className="page-content presentation-instruction-page poster-left-page">
        <div className="callout-row" style={{ flexDirection: 'column', alignItems: 'center' }}>
          <div className="character-section" style={{ marginTop: '0', marginBottom: '12px', justifyContent: 'center' }}>
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
          
          <div className="speech-bubble" style={{ width: '100%', marginBottom: '16px' }}>
            <p>{displayedText || 'Klik ▶ Play untuk memutar teks'}</p>
          </div>
          {!isCompleted && (
            <button
              type="button"
              className={`student-play-button ${isPlaying ? 'student-play-button-active' : ''}`}
              onClick={handlePlayClick}
              disabled={isPlaying}
              style={{ width: 'fit-content', margin: '0 auto', display: 'flex' }}
            >
              {isPlaying ? 'Listening...' : '▶ Play'}
            </button>
          )}
        </div>

        <div className="page-heading-wrapper page-heading-center">
          <h3 className="instruction-subtitle">
            Berikut ini beberapa aplikasi yang bisa anda gunakan!
          </h3>
        </div>
        <div className="app-links-grid">
          <a
            href="https://www.canva.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="app-link-card"
            onPointerDownCapture={stopFlipPropagation}
            onMouseDownCapture={stopFlipPropagation}
            onTouchStartCapture={stopFlipPropagation}
          >
            <img className="app-logo" src={canvaLogo} alt="Canva" />
            <span className="app-label">Canva</span>
          </a>
          <a
            href="https://www.microsoft.com/microsoft-365/publisher"
            target="_blank"
            rel="noopener noreferrer"
            className="app-link-card"
            onPointerDownCapture={stopFlipPropagation}
            onMouseDownCapture={stopFlipPropagation}
            onTouchStartCapture={stopFlipPropagation}
          >
            <img className="app-logo" src={publisherLogo} alt="Microsoft Publisher" />
            <span className="app-label">Publisher</span>
          </a>
          <a
            href="https://piktochart.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="app-link-card"
            onPointerDownCapture={stopFlipPropagation}
            onMouseDownCapture={stopFlipPropagation}
            onTouchStartCapture={stopFlipPropagation}
          >
            <img className="app-logo" src={piktochartLogo} alt="Piktochart" />
            <span className="app-label">Piktochart</span>
          </a>
        </div>
        <p className="app-note">*klik gambar untuk membuka website</p>
        
      </div>
    </div>
  )
})

export default PosterAppsLeftPage
