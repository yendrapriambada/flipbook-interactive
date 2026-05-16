import { forwardRef } from 'react'
import canvaLogo from '../../assets/canva.png'
import publisherLogo from '../../assets/microsoft_publisher.png'
import piktochartLogo from '../../assets/piktochart.png'
import { useSyncedSpeech } from '../../hooks/useSyncedSpeech'

const POSTER_TEXT = "Gunakan informasi digital yang telah ditemukan dan dipilih sebelumnya untuk menjelaskan kepada audien. Anda dapat memanfaatkan salah satu aplikasi desain poster yang di sarankan."

const PosterAppsLeftPage = forwardRef(function PosterAppsLeftPage(props, ref) {
  const { displayedText, play, isPlaying, isFinished } = useSyncedSpeech(POSTER_TEXT)

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
          {!isFinished && (
            <button
              type="button"
              className={`student-play-button ${isPlaying ? 'student-play-button-active' : ''}`}
              onClick={play}
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
