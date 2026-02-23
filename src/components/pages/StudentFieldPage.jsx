import { forwardRef, useEffect, useState } from 'react'
import studentImage from '../../assets/penelitian.png'

const StudentFieldPage = forwardRef(function StudentFieldPage(props, ref) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [displayedText, setDisplayedText] = useState('Klik play untuk memutar teks...')

  const fullText =
    'Program Studi Pendidikan IPA mengadakan sebuah pameran edukatif bertema "Inovasi teknologi mendeteksi makanan berbahaya".\n\n' +
    'Pameran ini bertujuan untuk meningkatkan kesadaran masyarakat mengenai bahaya penggunaan boraks dalam makanan, terutama dalam konteks kesehatan. Mahasiswa prodi Pendidikan IPA menampilkan berbagai poster, eksperimen ilmiah, serta simulasi sederhana yang memperlihatkan cara mendeteksi kandungan boraks dalam makanan.\n\n' +
    'Selain itu, pengunjung diberikan informasi tentang dampak negatif konsumsi boraks dan diajarkan cara memilih produk makanan yang aman.'

  const handlePlayClick = () => {
    if (!isPlaying) {
      setDisplayedText('')
      setIsPlaying(true)
      setIsFinished(false)
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel()
        const utter = new SpeechSynthesisUtterance(fullText.replace(/\n+/g, ' '))
        utter.lang = 'id-ID'
        utter.rate = 0.9
        window.speechSynthesis.speak(utter)
      }
    }
  }

  useEffect(() => {
    if (!isPlaying) {
      return
    }

    let index = 0

    const words = fullText.trim().split(/\s+/).length
    const rate = 0.9
    const secs = (words * 60) / (160 * rate)
    const perChar = Math.max(15, Math.min(80, (secs * 1000) / fullText.length))

    const intervalId = setInterval(() => {
      index += 1
      setDisplayedText(fullText.slice(0, index))

      if (index >= fullText.length) {
        clearInterval(intervalId)
        setIsFinished(true)
        setIsPlaying(false)
      }
    }, perChar)

    return () => {
      clearInterval(intervalId)
      if (window.speechSynthesis) window.speechSynthesis.cancel()
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
