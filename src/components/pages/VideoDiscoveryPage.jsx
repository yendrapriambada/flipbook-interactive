import { forwardRef } from 'react'

const VideoDiscoveryPage = forwardRef(function VideoDiscoveryPage(props, ref) {
  return (
    <div className="page" ref={ref}>
      <div className="page-content video-discovery-page">
        <div className="student-board">
          <div className="student-board-inner">
            <div className="cover-bunting student-board-bunting">
              <span className="cover-flag cover-flag-1" />
              <span className="cover-flag cover-flag-2" />
              <span className="cover-flag cover-flag-3" />
              <span className="cover-flag cover-flag-4" />
              <span className="cover-flag cover-flag-5" />
            </div>

            <div className="student-board-body board-body-row">
              <div className="hero-image-frame board-col-image-wide">
                <img
                  src="https://images.pexels.com/photos/4065877/pexels-photo-4065877.jpeg"
                  alt="Mahasiswa menonton video edukasi di komputer"
                  className="hero-image"
                  style={{ flex: 1, height: 'auto', minHeight: 120, objectPosition: '50% 20%' }}
                />
              </div>

              <div className="teacher-text-panel board-col-text">
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Dalam proses pencarian informasi tersebut, seorang mahasiswa Program Studi Pendidikan IPA bernama Budi menemukan sebuah video pembelajaran tentang teknologi uji kertas kunyit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default VideoDiscoveryPage
