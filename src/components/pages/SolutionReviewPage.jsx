import { forwardRef, useState } from 'react'

const SolutionReviewPage = forwardRef(function SolutionReviewPage(props, ref) {
  const [reason, setReason] = useState('')
  const [choice, setChoice] = useState(null) // 'yes' | 'no' | null

  const handleChoice = (val) => {
    setChoice(val)
  }

  const stopFlipPropagation = (e) => {
    e.stopPropagation()
    e.preventDefault()
    e.currentTarget.focus()
  }

  return (
    <div className="page" ref={ref}>
      <div className="page-content teacher-task-page">
        <div className="student-board">
          <div className="student-board-inner">
            <div className="cover-bunting student-board-bunting">
              <span className="cover-flag cover-flag-1" />
              <span className="cover-flag cover-flag-2" />
              <span className="cover-flag cover-flag-3" />
              <span className="cover-flag cover-flag-4" />
              <span className="cover-flag cover-flag-5" />
            </div>

            <div className="solution-board-body">
              <div className="solution-left">
                <p className="solution-intro">
                  Salah satu mahasiswa menyajikan tiga solusi yang dapat digunakan untuk
                  menyelesaikan persoalan pada wacana sebelumnya. Ketiga solusi tersebut
                  menggunakan pompa seperti gambar yang disajikan di bawah ini.
                </p>
                <div className="solution-gallery">
                  <div className="solution-card">
                    <img
                      src="https://images.pexels.com/photos/574068/pexels-photo-574068.jpeg"
                      alt="Pompa Hidram"
                    />
                    <span>Pompa Hidram</span>
                  </div>
                  <div className="solution-card">
                    <img
                      src="https://images.pexels.com/photos/2820876/pexels-photo-2820876.jpeg"
                      alt="Pompa Submersible"
                    />
                    <span>Pompa Submersible</span>
                  </div>
                  <div className="solution-card">
                    <img
                      src="https://images.pexels.com/photos/4792473/pexels-photo-4792473.jpeg"
                      alt="Pompa Diesel"
                    />
                    <span>Pompa Diesel</span>
                  </div>
                </div>
              </div>

              <div className="solution-right">
                <div className="qa-card">
                  <h3 className="qa-title">
                    Menurut pendapatmu, apakah ketiga solusi yang dikemukakan mahasiswa
                    tersebut sudah tepat? Mengapa?
                  </h3>
                  <div className="qa-choices">
                    <button
                      type="button"
                      className={`qa-button ${choice === 'yes' ? 'qa-button-active' : ''}`}
                      onClick={() => handleChoice('yes')}
                    >
                      Ya
                    </button>
                    <button
                      type="button"
                      className={`qa-button ${choice === 'no' ? 'qa-button-active' : ''}`}
                      onClick={() => handleChoice('no')}
                    >
                      Tidak
                    </button>
                  </div>
                  <div className="qa-reason">
                    <label className="qa-label">Tuliskan alasanmu di bawah ini</label>
                    <textarea
                      className="qa-input"
                      placeholder="Jawaban Anda..."
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      onPointerDown={stopFlipPropagation}
                      onMouseDown={stopFlipPropagation}
                      onTouchStart={stopFlipPropagation}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default SolutionReviewPage

