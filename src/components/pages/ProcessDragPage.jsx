import React, { forwardRef, useMemo, useState } from 'react';
import useAnswers from '../../context/useAnswers';

const COLORS = [
  { id: 1, label: '1', color: '#9aa0a6' },
  { id: 2, label: '2', color: '#64b5f6' },
  { id: 3, label: '3', color: '#ef5350' },
  { id: 4, label: '4', color: '#66bb6a' },
  { id: 5, label: '5', color: '#ffd54f' },
  { id: 6, label: '6', color: '#f48fb1' },
];

const ItemBox = ({ id, color, value, onChange, onDragStart, stopFlip, tagNumber, onPick, selectedId }) => {
  const isSelected = selectedId === id;
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, id)}
      onPointerDownCapture={stopFlip}
      onMouseDownCapture={stopFlip}
      onClickCapture={stopFlip}
      onClick={() => onPick && onPick(id)}
      onPointerUp={() => onPick && onPick(id)}
      onTouchStart={(e) => e.stopPropagation()}
      onTouchEnd={(e) => { e.stopPropagation(); onPick && onPick(id); }}
      style={{
        background: color,
        borderRadius: '10px',
        boxShadow: isSelected
          ? '0 0 0 4px rgba(255,255,255,0.5)'
          : '0 2px 6px rgba(0,0,0,0.25)',
        outline: isSelected ? '3px solid #fff' : 'none',
        padding: '6px',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        alignItems: 'center',
        width: '100%',
        cursor: 'pointer',
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
  const { answers, setS4OrderAll, setS4EntryAt, setS4Explanation } = useAnswers();
  const [slots, setSlots] = useState(Array(6).fill(null));
  const [selectedId, setSelectedId] = useState(null);
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

  const placeSelectedTo = (index) => {
    if (!selectedId) return;
    setSlots((prev) => {
      const next = [...prev];
      const currentIndex = next.findIndex((v) => v === selectedId);
      if (currentIndex !== -1) next[currentIndex] = null;
      next[index] = selectedId;
      setS4OrderAll(next);
      return next;
    });
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
          }}
          onPointerDownCapture={stopFlip}
          onPointerMoveCapture={stopFlip}
          onPointerUpCapture={stopFlip}
          onMouseDownCapture={stopFlip}
          onMouseMoveCapture={stopFlip}
          onMouseUpCapture={stopFlip}
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
                fontSize: '13px',
                lineHeight: 1.4,
                marginBottom: '2px',
              }}
            >
              Berdasarkan wacana tersebut, tuliskan urutan langkah-langkah utama yang dilakukan Andi dalam menggunakan alat pendeteksi boraks! Seret (drag) kotak dari kanan ke kolom di bawah ini.
            </div>
            <div
              style={{
                background: 'rgba(255,255,255,0.12)',
                borderRadius: '8px',
                padding: '6px 10px',
                color: '#ffe082',
                fontSize: '11px',
                lineHeight: 1.4,
                marginBottom: '4px',
              }}
            >
              💡 Sentuh kotak untuk memilih (warna menyala), lalu sentuh slot untuk menempatkan.
            </div>
            {slots.map((val, idx) => {
              const slotColor = COLORS[idx]?.color || '#cfd8dc';
              return (
              <div
                key={idx}
                onDragOver={onDragOver}
                onDrop={(e) => onDrop(e, idx)}
                onClick={() => placeSelectedTo(idx)}
                onPointerUp={() => placeSelectedTo(idx)}
                onPointerDownCapture={stopFlip}
                onMouseDownCapture={stopFlip}
                onTouchStart={(e) => e.stopPropagation()}
                onTouchEnd={(e) => { e.stopPropagation(); placeSelectedTo(idx); }}
                style={{
                  minHeight: '44px',
                  border: `2px dashed ${slotColor}`,
                  borderRadius: '10px',
                  background: val ? 'transparent' : `${slotColor}22`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  padding: '0 12px',
                  cursor: 'pointer',
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
                    onPick={(id) => setSelectedId(id)}
                    selectedId={selectedId}
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
            )})}
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
                Seret (drag) kotak langkah di bawah ini ke kolom urutan di sebelah kiri!
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
                    onPick={(id) => setSelectedId(id)}
                    selectedId={selectedId}
                  />
                ));
            })()}
          </div>
        </div>

        {/* Pertanyaan tambahan */}
        <div
          style={{
            background: '#f5f5f5',
            borderRadius: '10px',
            padding: '12px 14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
          onPointerDownCapture={stopFlip}
          onMouseDownCapture={stopFlip}
          onTouchStartCapture={stopFlip}
          onClickCapture={stopFlip}
        >
          <div
            style={{
              color: '#263238',
              fontSize: '13px',
              lineHeight: 1.5,
            }}
          >
            Apa akibat yang mungkin terjadi jika langkah-langkah tersebut tidak dilakukan secara berurutan? Jelaskan!
          </div>
          <textarea
            value={answers.s4.explanation}
            onChange={(e) => setS4Explanation(e.target.value)}
            onPointerDownCapture={stopFlip}
            onMouseDownCapture={stopFlip}
            onTouchStartCapture={stopFlip}
            onClickCapture={stopFlip}
            placeholder="Tulis jawaban di sini..."
            rows={3}
            style={{
              width: '100%',
              minHeight: '70px',
              resize: 'none',
              borderRadius: '8px',
              border: 'none',
              outline: 'none',
              padding: '10px 12px',
              fontSize: '13px',
              lineHeight: 1.5,
              color: '#0b2c28',
              background: 'rgba(255,255,255,0.9)',
              boxSizing: 'border-box',
            }}
          />
        </div>
      </div>
    </div>
  );
});

export default ProcessDragPage;
