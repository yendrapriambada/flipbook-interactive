import { forwardRef } from 'react'

const TeacherTaskPage = forwardRef(function TeacherTaskPage(props, ref) {
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

            <div className="teacher-board-body">
              <div className="teacher-avatar-wrapper">
                <img
                  src="https://images.pexels.com/photos/8617771/pexels-photo-8617771.jpeg"
                  alt="Ilustrasi dosen yang memberikan penjelasan"
                  className="teacher-avatar-image"
                />
              </div>

              <div className="teacher-text-panel">
                <p className="teacher-text-intro">
                  Sebagai seorang Dosen, Bapak Hamka meminta mahasiswanya untuk
                  membuat poster, eksperimen ilmiah atau simulasi sederhana terkait
                  topik yang disarankan. Beberapa poin yang akan dibahas di antaranya:
                </p>

                <ul className="teacher-text-list">
                  <li>
                    <span className="teacher-list-number">(1)</span>
                    <span>
                      Permasalahan: kondisi permasalahan yang ditemukan.
                    </span>
                  </li>
                  <li>
                    <span className="teacher-list-number">(2)</span>
                    <span>
                      Solusi: cara menyelesaikan persoalan.
                    </span>
                  </li>
                  <li>
                    <span className="teacher-list-number">(3)</span>
                    <span>
                      Konsekuensi: dampak dari solusi yang dikemukakan.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default TeacherTaskPage

