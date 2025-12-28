function WelcomePage() {
  return (
    <div className="page">
      <div className="page-content page-hero-left">
        <div className="hero-image-frame">
          <img
            src="https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg"
            alt="Jalan di hutan dengan cahaya keemasan"
            className="hero-image"
          />
        </div>
        <div className="page-heading-wrapper">
          <h2 className="page-heading">Selamat Datang di Petualangan</h2>
          <div className="heading-underline">
            <span className="heading-line-main" />
            <span className="heading-line-accent" />
          </div>
        </div>
        <p className="page-body-text">
          Ini adalah contoh halaman dengan gambar dan teks. Kamu dapat
          menambahkan berbagai jenis konten dalam flipbook ini untuk
          menciptakan pengalaman membaca yang interaktif dan menarik.
        </p>
        <div className="page-indicator">
          <span className="indicator-dot indicator-dot-active" />
          <span className="indicator-dot" />
          <span className="indicator-dot" />
        </div>
        <div className="page-number">— 2 —</div>
      </div>
    </div>
  )
}

export default WelcomePage

