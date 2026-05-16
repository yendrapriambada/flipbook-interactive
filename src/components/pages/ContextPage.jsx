import { forwardRef } from 'react'
import { useSyncedSpeech } from '../../hooks/useSyncedSpeech'

const fullText =
  'Pada tahap awal, mahasiswa diminta untuk mengeksplorasi dan mencari informasi dari berbagai sumber yang relevan dengan permasalahan yang dikaji.'

const ContextPage = forwardRef(function ContextPage(props, ref) {
  const { displayedText, play, isPlaying, isFinished } = useSyncedSpeech(fullText)

  return (
    <div className="page" ref={ref}>
      <div className="page-content page-hero-right">
        <div className="speech-bubble">
          <p>{displayedText || 'Klik ▶ Play untuk memutar teks'}</p>
        </div>
        {!isFinished && (
          <button
            type="button"
            className={`student-play-button ${isPlaying ? 'student-play-button-active' : ''}`}
            onClick={play}
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

      </div>
    </div>
  )
})

export default ContextPage
