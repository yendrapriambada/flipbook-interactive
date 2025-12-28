import { forwardRef, useEffect, useState } from 'react'
import studentImage from '../../assets/mahasiswapenelitian.png'

const StudentFieldPage = forwardRef(function StudentFieldPage(props, ref) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [displayedText, setDisplayedText] = useState('Klik play untuk memutar teks...')

  const fullText =
    'Pada mata kuliah Pendidikan IPA Terpadu, mahasiswa diminta untuk mengerjakan tugas dengan tema Teknologi Ramah Lingkungan untuk Irigasi.\n\n' +
    'Setelah disepakati bersama, konteks yang akan dibahas terkait tema tersebut adalah Sistem Irigasi Pertanian.\n\n' +
    'Secara spesifik akan membahas tentang bagaimana kondisi sistem irigasi di lingkungan Kota X dalam mengatasi ketersediaan air yang semakin terbatas.'

  const handlePlayClick = () => {
    if (!isPlaying) {
      setDisplayedText('')
      setIsPlaying(true)
      setIsFinished(false)
    }
  }

  useEffect(() => {
    if (!isPlaying) {
      return
    }

    let index = 0

    const intervalId = setInterval(() => {
      index += 1
      setDisplayedText(fullText.slice(0, index))

      if (index >= fullText.length) {
        clearInterval(intervalId)
        setIsFinished(true)
        // Keep playing true or set false? If false, play button logic needs check.
        // But we hide the button when isFinished is true.
      }
    }, 35)

    return () => {
      clearInterval(intervalId)
    }
  }, [isPlaying, fullText])

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
                style={isFinished ? { maxHeight: 'none', flex: 1 } : {}}
              >
                <div className="student-text-inner">
                  {displayedText.split('\n\n').map((block, idx) => (
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
            onClick={handlePlayClick}
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
