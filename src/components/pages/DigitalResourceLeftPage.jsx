import { forwardRef, useState, useEffect } from 'react'
import googlebooksIcon from '../../assets/googlebooks.png'
import springerIcon from '../../assets/springer.png'
import pubmedIcon from '../../assets/pubmed.jpg'
import sciencedirectIcon from '../../assets/sciencedirect.png'
import wileyIcon from '../../assets/wiley_logo.png'
import doajIcon from '../../assets/doaj_logo.png'

const SITES = [
  {
    name: 'ScienceDirect',
    href: 'https://www.sciencedirect.com/',
    img: sciencedirectIcon,
  },
  {
    name: 'IEEE Xplore',
    href: 'https://ieeexplore.ieee.org/Xplore/home.jsp',
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/21/IEEE_logo.svg',
  },
  {
    name: 'Wiley Online Library',
    href: 'https://onlinelibrary.wiley.com/',
    img: wileyIcon,
  },
  {
    name: 'Google Scholar',
    href: 'https://scholar.google.com/',
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Scholar_logo.svg',
  },
  {
    name: 'DOAJ',
    href: 'https://doaj.org/',
    img: doajIcon,
  },
  {
    name: 'Springer',
    href: 'https://link.springer.com/',
    img: springerIcon,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/',
    img: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/youtube.svg',
  },
  {
    name: 'Coursera',
    href: 'https://www.coursera.org/',
    img: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/coursera.svg',
  },
  {
    name: 'TED Talks',
    href: 'https://www.ted.com/talks',
    img: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ted.svg',
  },
  {
    name: 'Open Library',
    href: 'https://openlibrary.org/',
    img: 'https://openlibrary.org/static/images/openlibrary-logo-tighter.svg',
  },
  {
    name: 'Amazon Kindle',
    href: 'https://www.amazon.com/Kindle-eBooks/b?ie=UTF8&node=154606011',
    img: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazon.svg',
  },
  {
    name: 'Google Books',
    href: 'https://books.google.com/',
    img: googlebooksIcon,
  },
]

const DigitalResourceLeftPage = forwardRef(function DigitalResourceLeftPage(props, ref) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const fullText = "Carilah informasi dari penyedia sumber daya digital (artikel, video, e-book) di internet tentang teknologi pendeteksi makanan boraks."
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
      <div className="page-content digital-left">
        <div className="left-top">
          <img
            className="left-hero"
            src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg"
            alt="Ilustrasi mencari informasi sumber daya digital"
          />
          <div className="left-callout">
            <div className="character-section" style={{ marginTop: '0', marginBottom: '12px' }}>
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
            
            <div className="speech-bubble" style={{ marginBottom: '16px', marginTop: '16px' }}>
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
