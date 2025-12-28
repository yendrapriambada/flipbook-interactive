import { forwardRef, useState } from 'react'

const SITES = [
  {
    name: 'ScienceDirect',
    href: 'https://www.sciencedirect.com/',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/ScienceDirect_logo.svg/512px-ScienceDirect_logo.svg.png',
  },
  {
    name: 'PubMed',
    href: 'https://pubmed.ncbi.nlm.nih.gov/',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/PubMedLogo.png/512px-PubMedLogo.png',
  },
  {
    name: 'Springer',
    href: 'https://link.springer.com/',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Springer_Nature.svg/512px-Springer_Nature.svg.png',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png',
  },
  {
    name: 'Coursera',
    href: 'https://www.coursera.org/',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Coursera-logo.svg/512px-Coursera-logo.svg.png',
  },
  {
    name: 'TED Talks',
    href: 'https://www.ted.com/talks',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/TED_Logo.svg/512px-TED_Logo.svg.png',
  },
  {
    name: 'Open Library',
    href: 'https://openlibrary.org/',
    img: 'https://openlibrary.org/static/images/openlibrary-logo-tighter.svg',
  },
  {
    name: 'Amazon Kindle',
    href: 'https://www.amazon.com/Kindle-eBooks/b?ie=UTF8&node=154606011',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Amazon_Kindle_logo.svg/512px-Amazon_Kindle_logo.svg.png',
  },
  {
    name: 'Google Books',
    href: 'https://books.google.com/',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Google_Books_logo_2015.PNG/512px-Google_Books_logo_2015.PNG',
  },
]

const DigitalResourcePage = forwardRef(function DigitalResourcePage(props, ref) {
  const [link, setLink] = useState('')
  const [summary, setSummary] = useState('')

  const stopFlipPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <div className="page" ref={ref}>
      <div className="page-content digital-resource-page">
        <div className="student-board">
          <div className="student-board-inner">
            <div className="cover-bunting student-board-bunting">
              <span className="cover-flag cover-flag-1" />
              <span className="cover-flag cover-flag-2" />
              <span className="cover-flag cover-flag-3" />
              <span className="cover-flag cover-flag-4" />
              <span className="cover-flag cover-flag-5" />
            </div>

            <div className="resource-layout">
              <section className="resource-left">
                <div className="hero-image-frame">
                  <img
                    className="hero-image"
                    src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg"
                    alt="Ilustrasi mencari informasi sumber daya digital"
                  />
                </div>
                <div className="speech-bubble">
                  <p>
                    Carilah informasi dari penyedia sumber daya digital (artikel, video, e-book)
                    di internet tentang teknologi irigasi modern.
                  </p>
                </div>

                <div className="resource-sites">
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
              </section>

              <section className="resource-right">
                <div className="instruction-card">
                  <h3 className="instruction-title">
                    Berdasarkan pilihan sumber daya digital yang disediakan, temukan 1
                    artikel/video/e-book yang berisi informasi atau konten online tentang
                    teknologi irigasi modern.
                  </h3>
                  <input
                    type="url"
                    className="link-input"
                    placeholder="Ketik link artikel/video/e-book yang anda temukan di sini!"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    onPointerDownCapture={stopFlipPropagation}
                    onMouseDownCapture={stopFlipPropagation}
                    onTouchStartCapture={stopFlipPropagation}
                    autoComplete="off"
                  />
                </div>

                <div className="instruction-card">
                  <h3 className="instruction-title">
                    Jelaskan apa yang dibahas dalam artikel/video/e-book yang anda temukan!
                  </h3>
                  <textarea
                    className="analysis-textarea"
                    placeholder="Jawaban Anda..."
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    onPointerDownCapture={stopFlipPropagation}
                    onMouseDownCapture={stopFlipPropagation}
                    onTouchStartCapture={stopFlipPropagation}
                    autoComplete="off"
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

DigitalResourcePage.displayName = 'DigitalResourcePage'

export default DigitalResourcePage

