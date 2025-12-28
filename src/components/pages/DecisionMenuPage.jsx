import { forwardRef, useState } from 'react'

const DecisionMenuPage = forwardRef(function DecisionMenuPage(props, ref) {
  const [choice, setChoice] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [reason, setReason] = useState('')

  const correct = 'ya'

  const handleChoose = (value) => {
    setChoice(value)
    setShowFeedback(true)
  }

  const stopFlipPropagation = (e) => {
    e.stopPropagation()
    e.preventDefault()
    e.currentTarget.focus()
  }

  return (
    <div className="page" ref={ref}>
      <div className="page-content decision-page">
        <div className="menu-card">
          <div className="menu-top">
            <div className="menu-top-text">
              <h3 className="menu-title">
                Salah satu mahasiswa menyajikan tiga solusi untuk mengatasi persoalan
              </h3>
              <p className="menu-subtitle">
                Perhatikan gambar ilustrasi pompa di samping sebagai referensi.
              </p>
            </div>
            <div className="menu-top-image">
              <img
                src="https://images.pexels.com/photos/159298/pump-pressure-pipes-industrial-159298.jpeg"
                alt="Ilustrasi pompa industri"
                className="menu-image"
              />
            </div>
          </div>

          <div className="menu-divider" />

          <div className="menu-question">
            <p className="question-text">
              Menurut pendapatmu, apakah tiga solusi tersebut tepat?
            </p>
            <div className="menu-options">
              <button
                type="button"
                className={`option-button ${choice === 'ya' ? 'option-selected' : ''}`}
                onClick={() => handleChoose('ya')}
              >
                Ya
              </button>
              <button
                type="button"
                className={`option-button ${choice === 'tidak' ? 'option-selected' : ''}`}
                onClick={() => handleChoose('tidak')}
              >
                Tidak
              </button>
            </div>
            <div className={`answer-feedback ${showFeedback ? 'show' : ''}`}>
              {choice && (
                <p className="feedback-text">
                  {choice === correct
                    ? 'Benar. Solusi yang diajukan relevan dengan konteks permasalahan.'
                    : 'Kurang tepat. Pertimbangkan keterbatasan sumber daya dan kebutuhan lapangan.'}
                </p>
              )}
            </div>
          </div>

          <div className="menu-bottom">
            <label className="bottom-label">Tuliskan alasanmu di bawah ini</label>
            <input
              type="text"
              className="bottom-input"
              placeholder="Jawaban Anda..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              onPointerDown={stopFlipPropagation}
              onMouseDown={stopFlipPropagation}
              onTouchStart={stopFlipPropagation}
            />
          </div>
        </div>

        <div className="page-number">— 6 —</div>
      </div>
    </div>
  )
})

export default DecisionMenuPage

