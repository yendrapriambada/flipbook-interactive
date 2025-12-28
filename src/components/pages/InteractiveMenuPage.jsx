import { forwardRef, useState } from 'react'

const InteractiveMenuPage = forwardRef(function InteractiveMenuPage(props, ref) {
  const [choice, setChoice] = useState(null)
  const [reason, setReason] = useState('')
  const [showFeedback, setShowFeedback] = useState(false)

  const correct = 'tidak'

  const handleChoose = (val) => {
    setChoice(val)
    setShowFeedback(true)
  }

  const stopFlipPropagation = (e) => {
    e.stopPropagation()
    e.preventDefault()
    e.currentTarget.focus()
  }

  const isCorrect = choice && choice.toLowerCase() === correct

  return (
    <div className="page" ref={ref}>
      <div className="page-content interactive-menu-page">
        <div className="menu-card">
          <div className="menu-hero">
            <div className="menu-text">
              <h3 className="menu-title">Solusi yang Diusulkan</h3>
              <p>
                Salah satu mahasiswa menyajikan tiga solusi menggunakan pompa untuk mengatasi
                permasalahan pada wacana sebelumnya. Perhatikan ilustrasi berikut.
              </p>
            </div>
            <div className="menu-image-frame">
              <img
                className="menu-image"
                src="https://images.pexels.com/photos/159298/pump-water-pressure-hardware-159298.jpeg"
                alt="Ilustrasi pompa air"
              />
            </div>
          </div>

          <div className="menu-question">
            <h4 className="question-title">
              Menurut pendapatmu, apakah solusi tersebut sudah tepat?
            </h4>
            <div className="options-row">
              <button
                type="button"
                className={`option-button ${choice === 'ya' ? 'option-active' : ''}`}
                onClick={() => handleChoose('ya')}
              >
                <span className="option-icon">👍</span>
                <span>Ya</span>
              </button>
              <button
                type="button"
                className={`option-button ${choice === 'tidak' ? 'option-active' : ''}`}
                onClick={() => handleChoose('tidak')}
              >
                <span className="option-icon">👎</span>
                <span>Tidak</span>
              </button>
            </div>

            <div className={`feedback-panel ${showFeedback ? 'feedback-show' : ''}`}>
              {choice && (
                <div className={`feedback-result ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}`}>
                  {isCorrect ? 'Jawaban benar' : 'Jawaban kurang tepat'}
                </div>
              )}
              {choice && (
                <p className="feedback-explain">
                  {isCorrect
                    ? 'Penggunaan pompa perlu dianalisis ulang: efisiensi energi, ketersediaan sumber daya, dan dampak lingkungan harus dipertimbangkan.'
                    : 'Pertimbangkan kembali aspek efisiensi, biaya operasional, dan dampak lingkungan sebelum memilih solusi berbasis pompa.'}
                </p>
              )}
            </div>
          </div>

          <div className="menu-bottom">
            <h4 className="bottom-title">Tuliskan alasanmu di bawah ini</h4>
            <textarea
              className="bottom-input"
              placeholder="Jawaban dan alasan Anda..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              onPointerDown={stopFlipPropagation}
              onMouseDown={stopFlipPropagation}
              onTouchStart={stopFlipPropagation}
              rows={4}
              maxLength={500}
            />
          </div>
        </div>
        <div className="page-number">— 6 —</div>
      </div>
    </div>
  )
})

export default InteractiveMenuPage

