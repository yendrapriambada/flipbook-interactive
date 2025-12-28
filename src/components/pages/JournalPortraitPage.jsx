import React, { forwardRef } from 'react';

const JournalPortraitPage = forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content journal-page">
        <div className="journal-topbar">
          <span className="journal-edition">NOV. 2023 | VOL. 8</span>
        </div>

        <div className="journal-header">
          <h1 className="journal-title">JOURNAL SCIENCE EDUCATION</h1>
          <p className="journal-subtitle">Official publication of the University of El Dorado</p>
          <div className="journal-divider" />
        </div>

        <div className="journal-content">
          <div className="journal-left">
            <div className="journal-image-box">
              <img
                className="journal-image"
                src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Digital media and water resources"
              />
            </div>
            <div className="journal-article-meta">
              <h3 className="journal-article-title">
                Peran Media Digital dalam Pengelolaan Sumber Daya Air untuk Irigasi Pertanian
              </h3>
              <span className="journal-author">Hamka</span>
            </div>
            <p className="journal-lead">
              Dalam beberapa tahun terakhir, para petani di berbagai wilayah di Indonesia
              menghadapi tantangan yang semakin kompleks terkait pengelolaan sumberdaya air
              untuk irigasi. Media digital menawarkan akses informasi, pelatihan, dan
              kolaborasi yang dapat meningkatkan efektivitas praktik irigasi modern.
            </p>
          </div>

          <div className="journal-right">
            <p>
              Ketersediaan air yang tidak menentu, terutama di daerah yang jauh dari sumber air
              atau yang sering mengalami kekeringan, mengharuskan petani mencari alternatif
              teknologi untuk memastikan tanaman mereka mendapat pasokan air yang cukup.
            </p>
            <p>
              Teknologi irigasi modern, seperti penggunaan pompa tenaga surya dalam sistem
              irigasi pertanian, menjadi salah satu solusi yang banyak diperbincangkan. Meskipun
              menjanjikan berbagai keuntungan, teknologi ini juga membawa dampak yang perlu
              dipertimbangkan secara matang.
            </p>
            <p>
              Dalam situasi ini, keberadaan sumberdaya digital menjadi sangat penting. Internet
              menyediakan beragam sumberdaya digital yang dapat membantu petani memahami,
              menerapkan, dan memanfaatkan teknologi irigasi dengan lebih efektif, misalkan video
              edukasi, e-book, dan jurnal ilmiah.
            </p>
            <p>
              Namun, tidak semua informasi di internet memiliki kredibilitas yang tinggi. Oleh
              karena itu, penting bagi petani untuk dapat memilah mana sumber daya digital yang
              relevan dan dapat dipercaya.
            </p>
          </div>
        </div>

        <div className="page-number">— Journal —</div>
      </div>
    </div>
  );
});

export default JournalPortraitPage;
