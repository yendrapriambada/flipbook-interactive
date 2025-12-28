import { forwardRef, useCallback, useRef } from 'react'
import { useAnswers } from '../../context/AnswersContext'

const VideoGalleryPage = forwardRef(function VideoGalleryPage(props, ref) {
  const { answers, setS1Answer } = useAnswers()
  const textareaRef = useRef(null)
  const stopFlipbookEvents = useCallback((e) => {
    e.stopPropagation()
  }, [])
  const focusTextarea = useCallback(() => {
    textareaRef.current?.focus()
  }, [])

  return (
    <div className="page" ref={ref}>
      <div className="page-content video-gallery-page">
        <div className="video-gallery-container">
          <h2 className="video-title">
            Perhatikan teknologi yang disajikan dalam video di bawah ini
          </h2>

          <div className="video-wrapper">
            <iframe
              className="video-frame"
              src="https://www.youtube.com/embed/zHK8wu5BcS4?si=RPghvehLdxAgxUDP"
              title="Video Irigasi"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div
            className="video-card"
            onMouseDown={stopFlipbookEvents}
            onClick={(e) => {
              stopFlipbookEvents(e)
              focusTextarea()
            }}
            onTouchStart={stopFlipbookEvents}
            onPointerDown={stopFlipbookEvents}
            onFocusCapture={stopFlipbookEvents}
            onKeyDownCapture={stopFlipbookEvents}
          >
            <label className="video-question">
              Menurut pendapatmu, apa kelebihan dan kekurangan teknologi pada video tersebut?
            </label>
            <textarea
              className="video-answer"
              value={answers.s1.answer}
              onChange={(e) => setS1Answer(e.target.value)}
              placeholder="Tulis jawabanmu di sini..."
              ref={textareaRef}
            />
          </div>

          <p className="video-gallery-note">
            *tekan tombol play, video mungkin membutuhkan waktu untuk memunculkan gambar
          </p>
        </div>
      </div>
    </div>
  )
})

export default VideoGalleryPage
