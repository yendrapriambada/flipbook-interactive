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
                  Sebagai tindak lanjut dari kegiatan tersebut, Bapak Hamka selaku dosen meminta mahasiswa untuk mengembangkan media atau kegiatan edukatif sesuai topik yang telah ditentukan. Dalam tugas ini, mahasiswa diminta menguraikan permasalahan yang ditemukan, solusi yang ditawarkan, serta konsekuensi atau dampak dari solusi tersebut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default TeacherTaskPage

