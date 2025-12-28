import { forwardRef } from 'react'
import googlebooksIcon from '../../assets/googlebooks.png'
import springerIcon from '../../assets/springer.png'
import pubmedIcon from '../../assets/pubmed.jpg'
import sciencedirectIcon from '../../assets/sciencedirect.png'

const SITES = [
  {
    name: 'ScienceDirect',
    href: 'https://www.sciencedirect.com/',
    img: sciencedirectIcon,
  },
  {
    name: 'PubMed',
    href: 'https://pubmed.ncbi.nlm.nih.gov/',
    img: pubmedIcon,
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
            <p>
              Carilah informasi dari penyedia sumber daya digital (artikel, video, e-book)
              di internet tentang teknologi irigasi modern.
            </p>
          </div>
        </div>

        <div className="site-grid">
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
