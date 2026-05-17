import { forwardRef } from 'react'
import googlebooksIcon from '../../assets/googlebooks.png'
import { useSyncedSpeech } from '../../hooks/useSyncedSpeech'
import springerIcon from '../../assets/springer.png'
import sciencedirectIcon from '../../assets/sciencedirect.png'

const logoSvg = (body) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 120">${body}</svg>`
  )}`

const ieeeLogo = logoSvg(`
  <rect width="320" height="120" fill="white"/>
  <text x="160" y="58" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="46" font-weight="700" fill="#00629b">IEEE</text>
  <text x="160" y="84" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="15" font-style="italic" fill="#00629b">Advancing Technology</text>
`)

const wileyLogo = logoSvg(`
  <rect width="320" height="120" fill="white"/>
  <text x="160" y="58" text-anchor="middle" font-family="Georgia, serif" font-size="44" font-weight="700" fill="#111111">WILEY</text>
  <text x="160" y="86" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="18" fill="#444444">Online Library</text>
`)

const googleScholarLogo = logoSvg(`
  <rect width="320" height="120" fill="white"/>
  <path d="M160 21 90 60l70 39 70-39-70-39Z" fill="#4285f4"/>
  <circle cx="160" cy="78" r="24" fill="#a7c7ff"/>
  <text x="160" y="112" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="14" fill="#555555">Google Scholar</text>
`)

const doajLogo = logoSvg(`
  <rect width="320" height="120" fill="white"/>
  <text x="160" y="50" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="40" fill="#f26a21">DOAJ</text>
  <text x="160" y="75" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="17" fill="#333333">DIRECTORY OF</text>
  <text x="160" y="96" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="17" fill="#333333">OPEN ACCESS JOURNALS</text>
`)

const youtubeLogo = logoSvg(`
  <rect width="320" height="120" fill="white"/>
  <rect x="105" y="32" width="110" height="70" rx="18" fill="#ff0000"/>
  <path d="M149 50v34l32-17-32-17Z" fill="white"/>
`)

const courseraLogo = logoSvg(`
  <rect width="320" height="120" fill="white"/>
  <text x="160" y="77" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="40" font-weight="700" fill="#0056d2">coursera</text>
`)

const tedLogo = logoSvg(`
  <rect width="320" height="120" fill="white"/>
  <text x="160" y="78" text-anchor="middle" font-family="Arial Black, Arial, Helvetica, sans-serif" font-size="56" font-weight="900" fill="#e62b1e">TED</text>
`)

const openLibraryLogo = logoSvg(`
  <rect width="320" height="120" fill="white"/>
  <text x="94" y="69" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" fill="#4d83b8">OPEN</text>
  <text x="198" y="70" text-anchor="middle" font-family="Georgia, serif" font-size="34" fill="#111111">LIBRARY</text>
  <line x1="52" y1="82" x2="268" y2="82" stroke="#d6c7a6" stroke-width="3"/>
`)

const amazonKindleLogo = logoSvg(`
  <rect width="320" height="120" fill="white"/>
  <text x="128" y="65" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="700" fill="#111111">amazon</text>
  <text x="226" y="65" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="32" fill="#ff9900">kindle</text>
  <path d="M76 79c44 21 96 22 143 1" fill="none" stroke="#ff9900" stroke-width="5" stroke-linecap="round"/>
`)

const SITES = [
  {
    name: 'ScienceDirect',
    href: 'https://www.sciencedirect.com/',
    img: sciencedirectIcon,
  },
  {
    name: 'IEEE Xplore',
    href: 'https://ieeexplore.ieee.org/Xplore/home.jsp',
    img: ieeeLogo,
  },
  {
    name: 'Wiley Online Library',
    href: 'https://onlinelibrary.wiley.com/',
    img: wileyLogo,
  },
  {
    name: 'Google Scholar',
    href: 'https://scholar.google.com/',
    img: googleScholarLogo,
  },
  {
    name: 'DOAJ',
    href: 'https://doaj.org/',
    img: doajLogo,
  },
  {
    name: 'Springer',
    href: 'https://link.springer.com/',
    img: springerIcon,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/',
    img: youtubeLogo,
  },
  {
    name: 'Coursera',
    href: 'https://www.coursera.org/',
    img: courseraLogo,
  },
  {
    name: 'TED Talks',
    href: 'https://www.ted.com/talks',
    img: tedLogo,
  },
  {
    name: 'Open Library',
    href: 'https://openlibrary.org/',
    img: openLibraryLogo,
  },
  {
    name: 'Amazon Kindle',
    href: 'https://www.amazon.com/Kindle-eBooks/b?ie=UTF8&node=154606011',
    img: amazonKindleLogo,
  },
  {
    name: 'Google Books',
    href: 'https://books.google.com/',
    img: googlebooksIcon,
  },
]

const DIGITAL_RESOURCE_TEXT = "Carilah informasi dari penyedia sumber daya digital (artikel, video, e-book) di internet tentang teknologi pendeteksi makanan boraks. Berikut ini beberapa situs penyedia sumber daya digital yang bisa anda pilih dan gunakan!"

const DigitalResourceLeftPage = forwardRef(function DigitalResourceLeftPage(props, ref) {
  const { displayedText, play, isPlaying, isFinished } = useSyncedSpeech(DIGITAL_RESOURCE_TEXT)

  const stopFlipPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <div className="page" ref={ref}>
      <div className="page-content digital-left">
        <div className="left-top">
          <img
            className="left-hero"
            src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg"
            alt="Ilustrasi mencari informasi sumber daya digital"
          />
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

        <div className="site-grid" style={{ marginTop: '16px' }}>
          {SITES.map((s) => (
            <a
              key={s.name}
              className="site-card"
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.name}
              onPointerDownCapture={stopFlipPropagation}
              onMouseDownCapture={stopFlipPropagation}
              onTouchStartCapture={stopFlipPropagation}
            >
              <img src={s.img} alt={s.name} className="site-logo" />
              <span className="site-label">{s.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
})

DigitalResourceLeftPage.displayName = 'DigitalResourceLeftPage'

export default DigitalResourceLeftPage
