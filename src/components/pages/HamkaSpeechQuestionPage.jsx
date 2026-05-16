import { forwardRef } from 'react'
import useAnswers from '../../context/useAnswers'
import { useSyncedSpeech } from '../../hooks/useSyncedSpeech'

const fullText =
  'Selanjutnya, mahasiswa diminta menjawab pertanyaan berdasarkan wacana Classroom Newsletter yang telah disajikan sebelumnya.'

const HamkaSpeechQuestionPage = forwardRef(function HamkaSpeechQuestionPage(props, ref) {
  const { displayedText, play, isPlaying, isFinished } = useSyncedSpeech(fullText)
  const { answers, setS7A1, setS7A2 } = useAnswers()

  const stopFlipPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <div className="page" ref={ref}>
      <div className="page-content answer-form-page">
        <div className="speech-bubble answer-speech">
          <p>{displayedText || 'Klik ▶ Play untuk memutar teks'}</p>
        </div>
        {!isFinished && (
          <button
            type="button"
            className={`student-play-button ${isPlaying ? 'student-play-button-active' : ''}`}
            onClick={play}
            disabled={isPlaying}
          >
            {isPlaying ? 'Listening...' : '▶ Play'}
          </button>
        )}

        <div className="character-section" style={{ marginTop: '0', marginBottom: '16px' }}>
          <div className="avatar-ring">
            <div className="avatar-ring-inner">
              <img
                src="https://images.pexels.com/photos/8617727/pexels-photo-8617727.jpeg"
                alt="Karakter Dosen"
                className="character-avatar"
              />
            </div>
          </div>
          <div className="character-info">
            <h3 className="character-name">Bapak Hamka</h3>
            <p className="character-role">Dosen</p>
          </div>
        </div>

        <div className="evaluation-question-card">
          <h3 className="evaluation-question">
            Berdasarkan karakteristik media digital yang terdapat dalam wacana, media apa yang paling tepat digunakan untuk memberikan pengalaman pembelajaran interaktif dan visual? Sertakan alasan Anda.
          </h3>
          <div className="evaluation-input-wrapper">
            <textarea
              placeholder="Jawaban Anda..."
              value={answers.s7.a1}
              onChange={(e) => setS7A1(e.target.value)}
              onPointerDownCapture={stopFlipPropagation}
              onMouseDownCapture={stopFlipPropagation}
              onTouchStartCapture={stopFlipPropagation}
            />
          </div>
        </div>

        <div className="evaluation-question-card">
          <h3 className="evaluation-question">
            Untuk mencapai tujuan pembelajaran dalam memahami boraks secara mendalam dan menyusun laporan ilmiah, media digital apa yang paling tepat digunakan? Jelaskan alasan Anda.
          </h3>
          <div className="evaluation-input-wrapper">
            <textarea
              placeholder="Jawaban Anda..."
              value={answers.s7.a2}
              onChange={(e) => setS7A2(e.target.value)}
              onPointerDownCapture={stopFlipPropagation}
              onMouseDownCapture={stopFlipPropagation}
              onTouchStartCapture={stopFlipPropagation}
            />
          </div>
        </div>

      </div>
    </div>
  )
})

export default HamkaSpeechQuestionPage
