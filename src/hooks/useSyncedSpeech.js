import { useState, useEffect, useRef, useCallback } from 'react'

/**
 * Hook untuk sinkronisasi TTS (SpeechSynthesisUtterance) dengan animasi reveal teks.
 * Animasi karakter mengikuti progress TTS aktual via onboundary event.
 * Saat TTS selesai (onend), teks langsung di-reveal penuh agar tidak ada jeda.
 * Fallback ke animasi heuristik jika speechSynthesis tidak tersedia.
 */
export function useSyncedSpeech(text) {
  const [displayedText, setDisplayedText] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  const utterRef = useRef(null)
  const startTimeRef = useRef(null)
  const ttsDurationRef = useRef(null)
  const animFrameRef = useRef(null)
  const fallbackIntervalRef = useRef(null)

  const stopAll = useCallback(() => {
    if (window.speechSynthesis) window.speechSynthesis.cancel()
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    if (fallbackIntervalRef.current) clearInterval(fallbackIntervalRef.current)
  }, [])

  const play = useCallback(() => {
    if (isPlaying) return
    stopAll()
    setDisplayedText('')
    setIsFinished(false)
    setIsPlaying(true)

    if (!window.speechSynthesis) {
      // Fallback: animasi heuristik tanpa TTS
      let index = 0
      const words = text.trim().split(/\s+/).length
      const secs = (words * 60) / (130 * 0.9)
      const perChar = Math.max(15, Math.min(80, (secs * 1000) / text.length))
      fallbackIntervalRef.current = setInterval(() => {
        index += 1
        setDisplayedText(text.slice(0, index))
        if (index >= text.length) {
          clearInterval(fallbackIntervalRef.current)
          setIsPlaying(false)
          setIsFinished(true)
        }
      }, perChar)
      return
    }

    const utter = new SpeechSynthesisUtterance(text.replace(/\n+/g, ' '))
    utter.lang = 'id-ID'
    utter.rate = 0.9
    utterRef.current = utter

    utter.onstart = () => {
      startTimeRef.current = performance.now()
    }

    // onboundary: reveal teks proporsional terhadap charIndex dari TTS
    utter.onboundary = (e) => {
      if (e.charIndex != null) {
        const revealUpTo = Math.min(e.charIndex + (e.charLength ?? 1), text.length)
        setDisplayedText(text.slice(0, revealUpTo))
      }
    }

    utter.onend = () => {
      // Pastikan teks sudah penuh saat TTS selesai
      setDisplayedText(text)
      setIsPlaying(false)
      setIsFinished(true)
      ttsDurationRef.current = startTimeRef.current
        ? performance.now() - startTimeRef.current
        : null
    }

    utter.onerror = () => {
      setDisplayedText(text)
      setIsPlaying(false)
      setIsFinished(true)
    }

    window.speechSynthesis.speak(utter)
  }, [isPlaying, text, stopAll])

  // Cleanup on unmount
  useEffect(() => {
    return () => stopAll()
  }, [stopAll])

  // Reset saat teks berubah
  useEffect(() => {
    stopAll()
    setDisplayedText('')
    setIsPlaying(false)
    setIsFinished(false)
  }, [text]) // eslint-disable-line react-hooks/exhaustive-deps

  return { displayedText, play, isPlaying, isFinished }
}
