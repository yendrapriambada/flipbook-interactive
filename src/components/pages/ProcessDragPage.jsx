import React, { forwardRef, useMemo, useState } from 'react';
import { useAnswers } from '../../context/AnswersContext';

const COLORS = [
  { id: 1, label: '1', color: '#9aa0a6' },
  { id: 2, label: '2', color: '#64b5f6' },
  { id: 3, label: '3', color: '#ef5350' },
  { id: 4, label: '4', color: '#66bb6a' },
  { id: 5, label: '5', color: '#ffd54f' },
  { id: 6, label: '6', color: '#f48fb1' },
];

const ItemBox = ({ id, color, value, onChange, onDragStart, stopFlip, tagNumber }) => {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, id)}
      onPointerDownCapture={stopFlip}
      onMouseDownCapture={stopFlip}
      onTouchStartCapture={stopFlip}
      onClickCapture={stopFlip}
      style={{
        background: color,
        borderRadius: '10px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
        padding: '6px',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <span
        style={{
          minWidth: '22px',
          height: '22px',
          borderRadius: '7px',
          background: 'rgba(255,255,255,0.85)',
          color: '#0b2c28',
          fontSize: '12px',
          fontWeight: 700,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '8px',
          padding: '0 6px',
        }}
      >
        {tagNumber}
      </span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onPointerDownCapture={stopFlip}
        onMouseDownCapture={stopFlip}
        onTouchStartCapture={stopFlip}
        onClickCapture={stopFlip}
        style={{
          height: '32px',
          borderRadius: '8px',
          border: 'none',
          outline: 'none',
          padding: '0 10px',
          width: '100%',
          color: '#0b2c28',
          background: 'rgba(255,255,255,0.9)',
        }}
        placeholder="Isi jawaban"
      />
    </div>
  );
};

const ProcessDragPage = forwardRef((props, ref) => {
  const { answers, setS4OrderAll, setS4EntryAt } = useAnswers();
  const [slots, setSlots] = useState(Array(6).fill(null));
  const entries = answers.s4.entries;

  const availableItems = useMemo(() => COLORS, []);

  const onDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', String(id));
    e.dataTransfer.effectAllowed = 'move';
  };

  const onDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const onDrop = (e, index) => {
    e.preventDefault();
    const idStr = e.dataTransfer.getData('text/plain');
    const id = parseInt(idStr, 10);
    if (!id) return;
    setSlots((prev) => {
      const next = [...prev];
      const currentIndex = next.findIndex((v) => v === id);
      if (currentIndex !== -1) next[currentIndex] = null;
      next[index] = id;
      setS4OrderAll(next);
      return next;
    });
  };

  const stopFlip = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="page" ref={ref}>
      <div
        className="page-content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          padding: '24px',
          height: '100%',
          boxSizing: 'border-box',
          background: '#184c3f',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            alignItems: 'start',
            height: '100%',
          }}
          onPointerDownCapture={stopFlip}
          onPointerMoveCapture={stopFlip}
          onPointerUpCapture={stopFlip}
          onMouseDownCapture={stopFlip}
          onMouseMoveCapture={stopFlip}
          onMouseUpCapture={stopFlip}
          onTouchStartCapture={stopFlip}
          onTouchMoveCapture={stopFlip}
          onTouchEndCapture={stopFlip}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <div
              style={{
                color: '#e8f5e9',
                fontSize: '14px',
                lineHeight: 1.4,
                marginBottom: '6px',
              }}
            >
              Gambarkan secara urut alur proses kerja tersebut dengan cara mendrag pada masing-masing kolom di bawah ini
            </div>
            {slots.map((val, idx) => (
              <div
                key={idx}
                onDragOver={onDragOver}
                onDrop={(e) => onDrop(e, idx)}
                onPointerDownCapture={stopFlip}
                onMouseDownCapture={stopFlip}
                onTouchStartCapture={stopFlip}
                onClickCapture={stopFlip}
                style={{
                  minHeight: '44px',
                  border: '2px dashed #e0e0e0',
                  borderRadius: '10px',
                  background:
                    'repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 6px, rgba(0,0,0,0.04) 6px, rgba(0,0,0,0.04) 12px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  padding: '0 12px',
                }}
              >
                {val ? (
                  <ItemBox
                    id={val}
                    color={availableItems.find((i) => i.id === val)?.color || '#90caf9'}
                    value={entries[val - 1]}
                    tagNumber={val}
                    onChange={(v) => setS4EntryAt(val - 1, v)}
                    onDragStart={onDragStart}
                    stopFlip={stopFlip}
                  />
                ) : (
                  <span
                    style={{
                      color: '#b0bec5',
                      fontSize: '12px',
                    }}
                  >
                    Drop di sini
                  </span>
                )}
              </div>
            ))}
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div
                style={{
                  background: '#f5f5f5',
                  borderRadius: '6px',
                  padding: '10px 12px',
                  color: '#263238',
                  fontSize: '13px',
                }}
              >
                Berdasarkan wacana di atas, tuliskan proses kerja Andi dalam memastikan bahwa makanan yang akan dibelinya bebas dari borak pada kolom di bawah ini. Drag kotak kiri ke kolom sebelah kanan.
              </div>

            {(() => {
              const occupied = new Set(slots.filter(Boolean));
              return availableItems
                .filter((item) => !occupied.has(item.id))
                .map((item) => (
                  <ItemBox
                    key={item.id}
                    id={item.id}
                    color={item.color}
                    value={entries[item.id - 1]}
                    tagNumber={item.id}
                    onChange={(v) => setS4EntryAt(item.id - 1, v)}
                    onDragStart={onDragStart}
                    stopFlip={stopFlip}
                  />
                ));
            })()}
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProcessDragPage;
