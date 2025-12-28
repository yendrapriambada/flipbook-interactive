import { forwardRef } from 'react'

const ExperiencePage = forwardRef(function ExperiencePage(props, ref) {
  const { story, onStoryChange } = props

  return (
    <div className="page" ref={ref}>
      <div className="page-content page-experience-left">
        <div className="page-heading-wrapper page-heading-with-icon">
          <div className="heading-icon">
            <span>✏️</span>
          </div>
          <h2 className="page-heading">Ceritakan Pengalamanmu</h2>
        </div>
        <div className="heading-underline">
          <span className="heading-line-main" />
          <span className="heading-line-accent" />
        </div>

        <p className="page-body-text page-body-muted">
          Tuliskan cerita atau pengalaman menarik yang ingin kamu bagikan di
          sini.
        </p>

        <div className="experience-input-wrapper">
          <textarea
            className="experience-textarea"
            placeholder="Tuliskan cerita atau pengalamanmu di sini..."
            value={story}
            onChange={onStoryChange}
            maxLength={600}
          />
          <div className="experience-textarea-footer">
            <span className="experience-hint">Tuliskan ceritamu di sini</span>
            <span className="experience-counter">{story.length} karakter</span>
          </div>
        </div>

        <div className="page-number">— 3 —</div>
      </div>
    </div>
  )
})

export default ExperiencePage

