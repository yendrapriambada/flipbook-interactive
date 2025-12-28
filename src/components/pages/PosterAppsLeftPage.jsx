import { forwardRef } from 'react'
import canvaLogo from '../../assets/canva.png'
import publisherLogo from '../../assets/microsoft_publisher.png'
import piktochartLogo from '../../assets/piktochart.png'

const PosterAppsLeftPage = forwardRef(function PosterAppsLeftPage(props, ref) {
  const stopFlipPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <div className="page" ref={ref}>
      <div className="page-content presentation-instruction-page poster-left-page">
        <div className="callout-row">
          <div className="callout-image">
            <img
              src="https://images.pexels.com/photos/8617727/pexels-photo-8617727.jpeg"
              alt="Karakter Dosen"
            />
          </div>
          <div className="speech-bubble">
            <p>
              Gunakan informasi digital yang telah ditemukan dan dipilih sebelumnya
              untuk menjelaskan kepada audiens. Anda dapat memanfaatkan salah satu
              aplikasi desain poster yang disarankan.
            </p>
          </div>
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
        <div className="page-number">— Aplikasi —</div>
      </div>
    </div>
  )
})

export default PosterAppsLeftPage
