import { forwardRef } from 'react'
import { useSyncedSpeech } from '../../hooks/useSyncedSpeech'

const fullText =
  'Pada tahap awal, mahasiswa diminta untuk mengeksplorasi dan mencari informasi dari berbagai sumber yang relevan dengan permasalahan yang dikaji.'

const ContextPage = forwardRef(function ContextPage(props, ref) {
  const { displayedText, play, isPlaying, isFinished } = useSyncedSpeech(fullText)

  return (
    <div className="page" ref={ref}>
      <div className="page-content page-hero-right" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <div className="hamka-chat-row">
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
            <h3 className="character-name">Bapak Hamka</h3>
            <p className="character-role">Dosen</p>
          </div>
          <div className="speech-bubble">
            <p>{displayedText || <span>Klik ▶ <i>Play</i> untuk memutar teks</span>}</p>
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
        </div>
      </div>
    </div>
  )
})

export default ContextPage
