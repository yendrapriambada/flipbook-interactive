import { forwardRef } from 'react'

const TeacherBoardPage = forwardRef(function TeacherBoardPage(props, ref) {
  return (
    <div className="page" ref={ref}>
      <div className="page-content teacher-board-page">
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
                  src="https://images.pexels.com/photos/3772620/pexels-photo-3772620.jpeg"
                  alt="Ilustrasi dosen yang sedang mengajar"
                  className="teacher-avatar"
                />
              </div>

              <div className="teacher-text-wrapper">
                <div className="teacher-text-inner">
                  <p>
                    Sebagai seorang Dosen, Bapak Hamka meminta mahasiswanya untuk
                    menyelesaikan tugas terkait sistem irigasi pertanian Kota X.
                    Beberapa poin yang akan dibahas di antaranya:
                  </p>

                  <ol>
                    <li>
                      Permasalahan: kondisi permasalahan yang ditemukan pada
                      sistem irigasi.
                    </li>
                    <li>
                      Solusi: cara menyelesaikan persoalan yang muncul pada
                      sistem tersebut.
                    </li>
                    <li>
                      Konsekuensi: dampak dari solusi yang dikemukakan terhadap
                      lingkungan dan masyarakat.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default TeacherBoardPage

