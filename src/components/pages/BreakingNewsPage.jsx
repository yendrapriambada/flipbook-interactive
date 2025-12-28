import React, { forwardRef } from 'react';
import breakingNewsImg from '../../assets/breaking_news.png';

const BreakingNewsPage = forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div
        className="page-content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '30px',
          paddingBottom: '30px',
          height: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            flex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <img
            src={breakingNewsImg}
            alt="Berita Terkini"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
        <div className="page-number" style={{ textAlign: 'center', flexShrink: 0 }}>
          — Berita Terkini —
        </div>
      </div>
    </div>
  );
});

export default BreakingNewsPage;
