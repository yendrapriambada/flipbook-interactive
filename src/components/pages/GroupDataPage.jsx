import { forwardRef } from 'react'
import { useAnswers } from '../../context/AnswersContext'

const GroupDataPage = forwardRef(function GroupDataPage(props, ref) {
  const { answers, setQ3Link } = useAnswers()

  const stopFlipPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <div className="page" ref={ref}>
      <div className="page-content group-data-page">
        <div className="group-data-container">
          <p className="group-data-intro">
              Dua kelompok mempresentasikan data hasil pengamatan. Data pada table di
              bawah ini menunjukkan jumlah air yang dipompa dan air yang terbuang
              selama periode 3 hari yang disajikan oleh masing-masing kelompok.
            </p>

            <div className="data-box-pink">
              <div className="group-section">
                <strong>Kelompok 1:</strong>
                <ul>
                  <li>
                    <strong>Hari 1:</strong> Volume air yang tercatat adalah{' '}
                    <strong>100 m³</strong>, dengan debit sebesar{' '}
                    <strong>50 m³/hari</strong>.
                  </li>
                  <li>
                    <strong>Hari 2:</strong> Volume air meningkat menjadi{' '}
                    <strong>120 m³</strong>, dengan debit bertambah menjadi{' '}
                    <strong>60 m³/hari</strong>.
                  </li>
                  <li>
                    <strong>Hari 3:</strong> Volume menurun sedikit menjadi{' '}
                    <strong>110 m³</strong>, dengan debit sebesar{' '}
                    <strong>55 m³/hari</strong>.
                  </li>
                </ul>
              </div>
              <div className="group-section">
                <strong>Kelompok 2:</strong>
                <ul>
                  <li>
                    <strong>Hari 1:</strong> Volume air yang tercatat adalah{' '}
                    <strong>90 m³</strong>, dengan debit sebesar{' '}
                    <strong>40 m³/hari</strong>.
                  </li>
                  <li>
                    <strong>Hari 2:</strong> Volume meningkat menjadi{' '}
                    <strong>110 m³</strong>, dengan debit bertambah menjadi{' '}
                    <strong>60 m³/hari</strong>.
                  </li>
                  <li>
                    <strong>Hari 3:</strong> Volume menurun kembali menjadi{' '}
                    <strong>100 m³</strong>, dengan debit tetap di{' '}
                    <strong>55 m³/hari</strong>.
                  </li>
                </ul>
              </div>
            </div>

            <p className="group-data-instruction">
              Berdasarkan data di atas, gambarkan dalam bentuk grafik batang (bar
              chart) yang menunjukkan hubungan perbandingan volume dan debit air
              perhari dari 2 kelompok tersebut!
            </p>
            <p className="group-data-note">
              (Silahkan gunakan aplikasi pembuat grafik yang anda biasa gunakan dan
              ketahui, kemudian unggah (upload) hasil kerja melalui link di bawah
              ini)
            </p>

            <div className="input-group">
              <input
                type="text"
                className="link-input"
                placeholder="masukkan link hasil kerja...."
                value={answers.q3.link}
                onChange={(e) => setQ3Link(e.target.value)}
                onPointerDownCapture={stopFlipPropagation}
                onMouseDownCapture={stopFlipPropagation}
                onTouchStartCapture={stopFlipPropagation}
                autoComplete="off"
              />
            </div>
        </div>
      </div>
    </div>
  )
})

GroupDataPage.displayName = 'GroupDataPage'

export default GroupDataPage
