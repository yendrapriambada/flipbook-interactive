import { forwardRef } from 'react'

const VideoDiscoveryPage = forwardRef(function VideoDiscoveryPage(props, ref) {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <div className="student-board">
          <div className="student-board-inner">
            <div className="cover-bunting student-board-bunting">
              <span className="cover-flag cover-flag-1" />
              <span className="cover-flag cover-flag-2" />
              <span className="cover-flag cover-flag-3" />
              <span className="cover-flag cover-flag-4" />
              <span className="cover-flag cover-flag-5" />
            </div>

            <div
              className="student-board-body"
              style={{ flexDirection: 'column', gap: 12 }}
            >
              <div className="hero-image-frame" style={{ width: '100%' }}>
                <img
                  src="https://images.pexels.com/photos/4065877/pexels-photo-4065877.jpeg"
                  alt="Mahasiswa menonton video edukasi di komputer"
                  className="hero-image"
                  style={{ height: 170 }}
                />
              </div>

              <div className="teacher-text-panel">
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Seorang mahasiswa prodi Pendidikan IPA bernama Budi menemukan sebuah
                  video pembelajaran tentang Teknologi
                </p>
                <p style={{ fontSize: '1.05rem', fontWeight: 700, marginTop: 6 }}>
                  “Teknologi Uji kertas Kunyit”
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
