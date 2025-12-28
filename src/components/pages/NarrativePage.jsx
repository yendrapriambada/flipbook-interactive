function NarrativePage() {
  return (
    <div className="page">
      <div className="page-content page-hero-right">
        <div className="speech-bubble">
          <p>
            &quot;
            Pada mata kuliah Pendidikan IPA Terpadu mahasiswa diminta untuk
            mengerjakan tugas dengan tema Teknologi Ramah Lingkungan untuk
            Irigasi.
            <br />
            <br />
            Setelah disepakati bersama, konteks yang akan dibahas terkait tema
            tersebut adalah Sistem Irigasi Pertanian.
            <br />
            <br />
            Secara spesifik akan membahas tentang bagaimana kondisi sistem
            irigasi di lingkungan Kota X dalam mengatasi ketersediaan air yang
            semakin terbatas.&quot;
          </p>
        </div>

        <div className="character-section">
          <div className="avatar-ring">
            <div className="avatar-ring-inner">
              <img
                src="https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg"
                alt="Karakter Sarah"
                className="character-avatar"
              />
            </div>
          </div>
          <div className="character-info">
            <h3 className="character-name">Sarah</h3>
            <p className="character-role">Karakter</p>
          </div>
        </div>

        <div className="page-indicator page-indicator-right">
          <span className="indicator-dot indicator-dot-active" />
          <span className="indicator-dot" />
          <span className="indicator-dot" />
        </div>
        <div className="page-number page-number-right">— 1 —</div>
      </div>
    </div>
  )
}

export default NarrativePage

