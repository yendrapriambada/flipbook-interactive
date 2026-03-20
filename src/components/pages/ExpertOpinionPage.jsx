import React, { forwardRef, useState, useEffect, useMemo } from 'react';

const ExpertOpinionPage = forwardRef((props, ref) => {
  const [playingIndex, setPlayingIndex] = useState(null);
  const [displayedText, setDisplayedText] = useState('');
  const [revealed, setRevealed] = useState([]);

  const experts = useMemo(() => [
    {
      name: "",
      title: "Pakar Teknologi Pangan",
      quote: "Untuk mengatasi masalah borak dalam makanan, saya percaya bahwa penggunaan teknologi pengawet berbahan kimia yang lebih kuat adalah solusi yang tepat.",
      img: "https://i.pravatar.cc/150?img=68"
    },
    {
      name: "",
      title: "Pakar Keamanan Pangan",
      quote: "Menurut saya, solusi terbaik adalah dengan meningkatkan pendidikan dan pelatihan bagi para produsen makanan tentang bahaya borak dan pentingnya memilih bahan-bahan alami yang aman.",
      img: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "",
      title: "Pakar Teknologi Deteksi Pangan",
      quote: "Saya berpendapat bahwa solusi terbaik adalah pengembangan alat deteksi borak berbasis elektrokimia.",
      img: "https://i.pravatar.cc/150?img=23"
    },
    {
      name: "",
      title: "Pakar Bioteknologi",
      quote: "Solusi jangka panjang untuk masalah borak dalam makanan adalah mengembangkan makanan yang lebih tahan lama melalui modifikasi genetik.",
      img: "https://i.pravatar.cc/150?img=45"
    }
  ], []);

  // Effect untuk menangani animasi teks
  useEffect(() => {
    if (playingIndex === null) {
      return;
    }
    const fullText = experts[playingIndex].quote;
    let index = 0;
    const words = fullText.trim().split(/\s+/).length;
    const rate = 0.9;
    const secs = (words * 60) / (130 * rate);
    const perChar = Math.max(15, Math.min(80, (secs * 1000) / fullText.length));

    const intervalId = setInterval(() => {
      index += 1;
      setDisplayedText(fullText.slice(0, index));
      if (index >= fullText.length) {
        clearInterval(intervalId);
        if (!window.speechSynthesis) {
          setRevealed((prev) =>
            prev.includes(playingIndex) ? prev : [...prev, playingIndex]
          );
        }
      }
    }, perChar);
    return () => clearInterval(intervalId);
  }, [playingIndex, experts]);

  const handlePlay = (text, index) => {
    if (window.speechSynthesis) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      if (playingIndex === index) {
        // If clicking the same button, just stop (toggle behavior)
        setPlayingIndex(null);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'id-ID'; // Set language to Indonesian
      utterance.rate = 0.9; // Slightly slower for clarity
      
      utterance.onend = () => {
        setPlayingIndex(null);
        setRevealed((prev) =>
          prev.includes(index) ? prev : [...prev, index]
        );
      };

      utterance.onerror = () => {
        setPlayingIndex(null);
      };

      setDisplayedText('');
      setPlayingIndex(index);
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Browser Anda tidak mendukung Text-to-Speech.");
    }
  };

  const handlePlayClick = (e, expert, index) => {
    e.stopPropagation();
    e.preventDefault();
    handlePlay(expert.quote, index);
  };

  return (
    <div className="page" ref={ref}>
      <div className="page-content expert-opinion-page">
        {/* Header / Intro Text */}
        <div className="expert-intro-box">
          <p>
            Setelah membaca teks pemberitaan tersebut, seorang mahasiswa berusaha mencari solusi atas permasalahan boraks dalam makanan. Ia kemudian meminta pendapat dari beberapa pakar di bidang terkait mengenai solusi yang mungkin dilakukan.
          </p>
        </div>

        {/* Expert Cards List */}
        <div className="expert-list">
          {experts.map((expert, index) => (
            <div key={index} className="expert-card">
              <div className="expert-img-wrapper">
                <img src={expert.img} alt={expert.name} className="expert-img" />
              </div>
              <div className="expert-content">
                <h3 className="expert-name">
                  {expert.name ? `${expert.name}${expert.title ? ', ' : ''}` : ''}
                  {expert.title && <span className="expert-title">{expert.title}</span>}
                </h3>
                <p className="expert-quote">
                  {revealed.includes(index)
                    ? `"${expert.quote}"`
                    : playingIndex === index
                    ? `"${displayedText}"`
                    : <span className="expert-placeholder">Klik tombol play untuk mendengarkan pendapat ahli ▶</span>}
                </p>
              </div>
              <button 
                className={`expert-play-btn ${playingIndex === index ? 'playing' : ''}`}
                onClick={(e) => handlePlayClick(e, expert, index)}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                disabled={playingIndex !== null && playingIndex !== index}
                title={playingIndex === index ? "Stop" : "Dengarkan"}
              >
                {playingIndex === index ? "⏹" : "▶"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default ExpertOpinionPage;
