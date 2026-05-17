import { forwardRef } from 'react'
import dataSample from '../../assets/data_sample.png'

const BoraksSamplesPage = forwardRef(function BoraksSamplesPage(props, ref) {
  return (
    <div className="page" ref={ref}>
      <div className="page-content boraks-page">
        <p className="boraks-note" style={{ fontWeight: 600, marginBottom: '4px' }}>
          Perhatikan dan bacalah Data Hasil Pengujian Boraks di bawah ini!
        </p>
        <img
          src={dataSample}
          alt="Ilustrasi data hasil pengujian makanan Boraks"
          style={{ minHeight: '420px', width: '100%', objectFit: 'contain' }}
        />
        <p className="boraks-note">
          Sebuah kelompok diminta oleh dosen untuk mengorganisasikan data tersebut ke dalam tabel sehingga diperoleh informasi mengenai sampel yang mengandung boraks sesuai peraturan keamanan pangan (BPOM RI).
        </p>
      </div>
    </div>
  )
})

BoraksSamplesPage.displayName = 'BoraksSamplesPage'

export default BoraksSamplesPage
