import React, { forwardRef, useState, useEffect } from 'react';

const ExpertOpinionPage = forwardRef((props, ref) => {
  const [playingIndex, setPlayingIndex] = useState(null);
  const [displayedText, setDisplayedText] = useState('');
  const [revealed, setRevealed] = useState([]);

  const experts = [
    {
      name: "Prof. Patel",
      title: "Ahli Teknologi Lingkungan",
      quote: "Penggunaan teknologi pompa air tenaga surya dapat menjadi solusi yang berkelanjutan untuk mengatasi kekurangan air dalam irigasi pertanian, terutama di wilayah dengan paparan sinar matahari yang cukup tinggi.",
      // Using a placeholder image that looks like a professor
      img: "https://images.pexels.com/photos/3824771/pexels-photo-3824771.jpeg?auto=compress&cs=tinysrgb&w=150" 
    },
    {
      name: "Dr. Lopez",
      title: "Ahli Hidrologi",
      quote: "Pembangunan bendungan besar dapat membantu dalam mengatasi masalah kekurangan air dengan mengumpulkan dan menyimpan air hujan.",
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Prof. Wang",
      title: "Ahli Sumber Daya Air",
      quote: "Sistem irigasi permukaan tradisional seringkali efektif dalam menyediakan air bagi lahan pertanian, terutama di daerah dengan akses yang mudah ke sumber air seperti sungai atau danau.",
      img: "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Dr. Tanaka",
      title: "Ahli Pertanian",
      quote: "Penggunaan Sistem Intensifikasi Beras (SRI), sistem ini dapat meningkatkan keseimbangan ekologi tanah. Tanaman padi SRI ditanam dengan jarak yang lebih lebar dan kedalaman yang lebih dangkal.",
      img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  // Effect untuk menangani animasi teks
  useEffect(() => {
    if (playingIndex === null) {
      setDisplayedText('');
      return;
    }

    const fullText = experts[playingIndex].quote;
    let index = 0;
    // Set teks awal kosong
    setDisplayedText('');
    
    const intervalId = setInterval(() => {
      index += 1;
      setDisplayedText(fullText.slice(0, index));
      if (index >= fullText.length) {
        clearInterval(intervalId);
        setRevealed((prev) =>
          prev.includes(playingIndex) ? prev : [...prev, playingIndex]
        );
      }
    }, 45); // Kecepatan animasi (45ms)

    return () => clearInterval(intervalId);
  }, [playingIndex]);

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
            Setelah membaca teks pemberitahuan tersebut, seorang mahasiswa Prodi Pendidikan IPA berusaha membantu mencarikan solusi dari permasalahan yang ada pada pemberitahuan tersebut. Beberapa rencana solusi yang mungkin dilakukan setelah membaca beberapa artikel dari empat orang pakar di bidangnya sebagai berikut:
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
                  {expert.name}, <span className="expert-title">{expert.title}</span>
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
