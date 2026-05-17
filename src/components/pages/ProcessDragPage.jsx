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
        alignItems: 'flex-start',
        width: '100%',
        cursor: 'grab',
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
          marginTop: '4px',
          flexShrink: 0,
        }}
      >
        {tagNumber}
      </span>
      <textarea
        rows={3}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onPointerDownCapture={stopFlip}
        onMouseDownCapture={stopFlip}
        onTouchStartCapture={stopFlip}
        onClickCapture={stopFlip}
        style={{
          borderRadius: '8px',
          border: 'none',
          outline: 'none',
          padding: '6px 10px',
          width: '100%',
          color: '#0b2c28',
          background: 'rgba(255,255,255,0.9)',
          resize: 'none',
          overflowY: 'auto',
          fontSize: '12px',
          lineHeight: 1.4,
          boxSizing: 'border-box',
          scrollbarWidth: 'thin',
        }}
        placeholder="Isi jawaban"
      />
    </div>
  );
};

const isTouch = () => window.matchMedia('(pointer: coarse)').matches;

const ProcessDragPage = forwardRef((props, ref) => {
  const { answers, setS4OrderAll, setS4EntryAt, setS4Explanation } = useAnswers();
  const [slots, setSlots] = useState(Array(6).fill(null));
  const [selectedId, setSelectedId] = useState(null);
  const entries = answers.s4.entries;
  const touchDevice = isTouch();

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
          gap: '10px',
          padding: '16px',
          boxSizing: 'border-box',
          background: '#184c3f',
          overflowY: 'auto',
          scrollbarWidth: 'thin',
        }}
      >
        <div style={{ color: '#e8f5e9', fontSize: '11px', lineHeight: 1.4, flexShrink: 0 }}>
          Berdasarkan wacana tersebut, tuliskan urutan langkah-langkah utama yang dilakukan Andi dalam menggunakan alat pendeteksi boraks!
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px',
            alignItems: 'start',
          }}
          onPointerDownCapture={stopFlip}
          onPointerMoveCapture={stopFlip}
          onPointerUpCapture={stopFlip}
          onMouseDownCapture={stopFlip}
          onMouseMoveCapture={stopFlip}
          onMouseUpCapture={stopFlip}
        >
          {/* LEFT: drop slots */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <div
              style={{
                color: '#e8f5e9',
                fontSize: '11px',
                lineHeight: 1.4,
                flexShrink: 0,
              }}
            >
              Urutan langkah-langkah Andi:
            </div>
            <div
              style={{
                background: 'rgba(255,255,255,0.12)',
                borderRadius: '8px',
                padding: '5px 8px',
                color: '#ffe082',
                fontSize: '10px',
                lineHeight: 1.4,
                flexShrink: 0,
              }}
            >
              {touchDevice
                ? '💡 Ketuk kotak (menyala) → ketuk slot'
                : '🖱 Drag & Drop kotak ke slot yang sesuai'}
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
                  minHeight: '96px',
                  border: `2px dashed ${slotColor}`,
                  borderRadius: '10px',
                  background: val ? 'transparent' : `${slotColor}22`,
                  display: 'flex',
                  alignItems: 'stretch',
                  justifyContent: 'flex-start',
                  padding: '6px',
                  cursor: 'pointer',
                  boxSizing: 'border-box',
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

          {/* RIGHT: source items */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
              <div
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: '6px',
                  padding: '5px 8px',
                  color: '#e8f5e9',
                  fontSize: '10px',
                  flexShrink: 0,
                }}
              >
                {touchDevice ? '👆 Ketuk kotak untuk memilih' : '☰ Kotak langkah — seret ke kiri'}
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
