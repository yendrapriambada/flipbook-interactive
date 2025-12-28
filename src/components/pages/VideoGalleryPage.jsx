import { forwardRef } from 'react'

const VideoGalleryPage = forwardRef(function VideoGalleryPage(props, ref) {
  // Use dummy YouTube video IDs (or placeholders) if real ones aren't provided.
  // The user requested 2 videos.
  // Video 1: "https://www.youtube.com/embed/dQw4w9WgXcQ" (Placeholder - Rick Roll) - replaced with a generic nature one or leave blank
  // Better to use generic educational/nature placeholders related to irrigation if possible, or just placeholders.
  // Let's use generic placeholders for now.

  return (
    <div className="page" ref={ref}>
      <div className="page-content video-gallery-page">
        <div className="notebook-paper">
          <div className="video-gallery-container">
            <p className="video-gallery-intro">
              Tonton 2 video di bawah ini. Pada masing-masing video terdapat
              teknologi yang digunakan pada Sistem Irigasi pertanian.
            </p>

            <div className="video-wrapper">
              <iframe
                className="video-frame"
                src="https://www.youtube.com/embed/zHK8wu5BcS4?si=RPghvehLdxAgxUDP" // Replace with actual ID
                title="Video Irigasi 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="video-wrapper">
              <iframe
                className="video-frame"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=placeholder2" // Replace with actual ID
                title="Video Irigasi 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <p className="video-gallery-note">
              *tekan tombol play, video mungkin membutuhkan waktu untuk memunculkan
              gambar
            </p>
          </div>
        </div>
      </div>
    </div>
  )
})

export default VideoGalleryPage
