import { forwardRef } from 'react'
import studentImage from '../../assets/penelitian.png'
import { useSyncedSpeech } from '../../hooks/useSyncedSpeech'

const fullText =
  'Sebagai upaya meningkatkan kesadaran masyarakat terhadap bahaya penggunaan boraks dalam makanan, Program Studi Pendidikan IPA mengadakan pameran edukatif bertema "Inovasi Teknologi Mendeteksi Makanan Berbahaya". Dalam kegiatan tersebut, mahasiswa menyajikan poster, eksperimen ilmiah, dan simulasi sederhana untuk memperlihatkan cara mendeteksi kandungan boraks pada makanan, sekaligus memberikan edukasi tentang dampak negatifnya bagi kesehatan serta pentingnya memilih produk makanan yang aman.'

const StudentFieldPage = forwardRef(function StudentFieldPage(props, ref) {
  const { displayedText, play, isPlaying, isFinished } = useSyncedSpeech(fullText)

  return (
    <div className="page" ref={ref}>
      <div className="page-content student-field-page">
        <div className="student-board">
          <div className="student-board-inner">
            <div className="cover-bunting student-board-bunting">
              <span className="cover-flag cover-flag-1" />
              <span className="cover-flag cover-flag-2" />
              <span className="cover-flag cover-flag-3" />
              <span className="cover-flag cover-flag-4" />
              <span className="cover-flag cover-flag-5" />
            </div>

            <div className="student-board-body">
              <div className="student-image-wrapper">
                <img
                  src={studentImage}
                  alt="Mahasiswa belajar bersama di area persawahan"
                  className="student-image"
                />
              </div>

              <div
                className={`student-text-wrapper ${
                  isPlaying ? 'student-text-animate' : ''
                }`}
              >
                <div className="student-text-inner">
                  {(displayedText || 'Klik play untuk memutar teks...').split('\n\n').map((block, idx) => (
                    <p key={idx}>{block}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {!isFinished && (
          <button
            type="button"
            className={`student-play-button ${
              isPlaying ? 'student-play-button-active' : ''
            }`}
            onClick={play}
            disabled={isPlaying}
          >
            {isPlaying ? 'Listening...' : '▶ Play'}
          </button>
        )}
      </div>
    </div>
  )
})

export default StudentFieldPage
