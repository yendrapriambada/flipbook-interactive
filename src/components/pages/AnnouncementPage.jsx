import React, { forwardRef } from 'react';
import announcementImg from '../../assets/important_announcement.png';

const AnnouncementPage = forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          padding: '30px', 
          paddingBottom: '30px', // Memberikan space ekstra yang cukup di bawah
          height: '100%',
          boxSizing: 'border-box' 
      }}>
        <div style={{ 
            flex: 1,
            width: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            <img 
                src={announcementImg} 
                alt="Pengumuman Penting" 
                style={{ 
                    maxWidth: '100%', 
                    maxHeight: '100%', 
                    objectFit: 'contain',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
            />
        </div>
      </div>
    </div>
  );
});

export default AnnouncementPage;
