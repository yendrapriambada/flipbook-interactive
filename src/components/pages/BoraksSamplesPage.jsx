import { forwardRef } from 'react'
import dataSample from '../../assets/data_sample.png';

const BoraksSamplesPage = forwardRef(function BoraksSamplesPage(props, ref) {
  return (
    <div className="page" ref={ref}>
      <div className="page-content boraks-page">
            <img
              src={dataSample}
              alt="Ilustrasi data hasil pengujian makanan Boraks"
            />

        <p className="boraks-note">
          Sebuah kelompok diminta oleh Dosennya untuk mengorganisasikan data tersebut ke dalam Tabel, sehingga
          dari data hasil pengujian tersebut diperoleh informasi terhadap sampel yang mengandung boraks.
        </p>
      </div>
    </div>
  )
})

BoraksSamplesPage.displayName = 'BoraksSamplesPage'

export default BoraksSamplesPage
