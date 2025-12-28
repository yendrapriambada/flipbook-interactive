import { forwardRef, useMemo, useState } from 'react'
import { useAnswers } from '../../context/AnswersContext'

const AnswerReportPage = forwardRef(function AnswerReportPage(props, ref) {
  const { getReportLines, userId } = useAnswers()
  const [saved, setSaved] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState('')
  const [statuses, setStatuses] = useState(Array(9).fill('idle'))
  const [done, setDone] = useState(false)
  const [errorDetails, setErrorDetails] = useState(Array(9).fill(''))
  const anyError = useMemo(() => statuses.some((s) => s === 'err'), [statuses])

  const handleSave = async () => {
    const header = '-------- Report --------'
    const lines = getReportLines()
    const text =
      [header, ...lines.map((l, i) => `${i + 1}  ${l}${l ? ',' : ''}`)].join('\n')
    try {
      await navigator.clipboard.writeText(text)
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    } catch (e) {
      setSaved(false)
    }
    try {
      const idUserNum = Number(userId)
      if (!idUserNum || idUserNum <= 0) {
        setError('ID pengguna belum diisi')
        return
      }
      setSubmitting(true)
      setProgress(0)
      setError('')
      const practiceMap = [
        'Understanding technological principles',
        'Developing solutions and achieving goals',
        'Communication and collaborating',
        'Understanding technological principles',
        'Developing solutions and achieving goals',
        'Communication and collaborating',
        'Understanding technological principles',
        'Developing solutions and acheiving goals',
        'Communication and collaborating',
      ]
      const indikatorMap = [
        'Analisis keuntungan dan kerugian dari teknologi yang ada. Mengidentifikasi kelebihan dan kekurangan teknologi yang ada.',
        'Pilih teknologi yang tepat untuk memecahkan masalah masyarakat. Menjelaskan alasan mengapa teknologi yang dipilih merupakan solusi terbaik dibandingkan alternatif lainnya.',
        'Buat presentasi multimedia. Mengorganisasi konten presentasi secara jelas, ringkas, dan sesuai dengan topik yang diberikan.',
        'Menjelaskan fitur suatu sistem atau proses. Menggambarkan alur proses kerja dari awal hingga akhir penggunaan alat pendeteksi borak.',
        'Menghasilkan desain atau produk alternatif Merancang produk alternatif yang lebih aman dan dapat menggantikan penggunaan borak dalam makanan.',
        'Mewakili data dalam grafik, tabel, dan model. Mengorganisasi data hasil deteksi borak dari beberapa sampel makanan ke dalam bentuk tabel yang jelas dan sistematis.',
        'Membenarkan pilihan alat untuk tujuan tertentu. Mengidentifikasi media digital yang tepat (artikel, video, tutorial, e-book, aplikasi, dll.) terkait makanan mengandung borak.',
        'Mencari media dan sumber daya digital. Menemukan sumber daya digital yang relevan terkait makanan mengandung borak.',
        'Jelaskan kepada audiens tertentu bagaimana sesuatu bekerja Memanfaatkan informasi digital untuk menjelaskan bagaimana teknologi pendeteksi makanan mengandung borak bekerja.',
      ]
      const toSend = lines.map((val, i) => ({ index: i, value: val }))
      let successCount = 0
      for (let k = 0; k < toSend.length; k++) {
        const i = toSend[k].index
        const payload = {
          id_user: idUserNum,
          indikator_soal: indikatorMap[i],
          practice: practiceMap[i],
          pertanyaan: `Flipbook 9 Soal - Baris #${i + 1}`,
          jawaban: lines[i],
          nilai: null,
          feedback: null,
        }
        try {
          const res = await fetch('https://ipaterpadu-6estemlearning-tel.my.id/api/api.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          })
          let msg = ''
          try {
            const json = await res.clone().json()
            if (json && typeof json.message === 'string') msg = json.message
          } catch {
            const txt = await res.text()
            msg = txt
          }
          if (!res.ok) {
            setStatuses((prev) => {
              const next = [...prev]
              next[i] = 'err'
              return next
            })
            setErrorDetails((prev) => {
              const next = [...prev]
              next[i] = `HTTP ${res.status}${msg ? `: ${msg}` : ''}`
              return next
            })
          } else {
            setStatuses((prev) => {
              const next = [...prev]
              next[i] = 'ok'
              return next
            })
            setErrorDetails((prev) => {
              const next = [...prev]
              next[i] = ''
              return next
            })
            successCount += 1
          }
        } catch (e) {
          setStatuses((prev) => {
            const next = [...prev]
            next[i] = 'err'
            return next
          })
          setErrorDetails((prev) => {
            const next = [...prev]
            next[i] = e?.message || 'Network error'
            return next
          })
        }
        setProgress(i + 1)
        await new Promise((r) => setTimeout(r, 150))
      }
      if (successCount === 9) {
        setDone(true)
      } else {
        setError('Sebagian jawaban gagal. Silakan kirim ulang yang gagal.')
      }
    } catch (e) {
      setError('Gagal kirim: ' + (e?.message || 'Unknown error'))
    } finally {
      setSubmitting(false)
    }
  }

  const handleRetryFailed = async () => {
    const lines = getReportLines()
    const idUserNum = Number(userId)
    if (!idUserNum || idUserNum <= 0) {
      setError('ID pengguna belum diisi')
      return
    }
    setSubmitting(true)
    setError('')
    const practiceMap = [
      'Understanding technological principles',
      'Developing solutions and achieving goals',
      'Communication and collaborating',
      'Understanding technological principles',
      'Developing solutions and achieving goals',
      'Communication and collaborating',
      'Understanding technological principles',
      'Developing solutions and acheiving goals',
      'Communication and collaborating',
    ]
    const indikatorMap = [
      'Analisis keuntungan dan kerugian dari teknologi yang ada. Mengidentifikasi kelebihan dan kekurangan teknologi yang ada.',
      'Pilih teknologi yang tepat untuk memecahkan masalah masyarakat. Menjelaskan alasan mengapa teknologi yang dipilih merupakan solusi terbaik dibandingkan alternatif lainnya.',
      'Buat presentasi multimedia. Mengorganisasi konten presentasi secara jelas, ringkas, dan sesuai dengan topik yang diberikan.',
      'Menjelaskan fitur suatu sistem atau proses. Menggambarkan alur proses kerja dari awal hingga akhir penggunaan alat pendeteksi borak.',
      'Menghasilkan desain atau produk alternatif Merancang produk alternatif yang lebih aman dan dapat menggantikan penggunaan borak dalam makanan.',
      'Mewakili data dalam grafik, tabel, dan model. Mengorganisasi data hasil deteksi borak dari beberapa sampel makanan ke dalam bentuk tabel yang jelas dan sistematis.',
      'Membenarkan pilihan alat untuk tujuan tertentu. Mengidentifikasi media digital yang tepat (artikel, video, tutorial, e-book, aplikasi, dll.) terkait makanan mengandung borak.',
      'Mencari media dan sumber daya digital. Menemukan sumber daya digital yang relevan terkait makanan mengandung borak.',
      'Jelaskan kepada audiens tertentu bagaimana sesuatu bekerja Memanfaatkan informasi digital untuk menjelaskan bagaimana teknologi pendeteksi makanan mengandung borak bekerja.',
    ]
    let successCount = 0
    for (let i = 0; i < 9; i++) {
      if (statuses[i] !== 'err') continue
      const payload = {
        id_user: idUserNum,
        indikator_soal: indikatorMap[i],
        practice: practiceMap[i],
        pertanyaan: `Flipbook 9 Soal - Baris #${i + 1}`,
        jawaban: lines[i],
        nilai: null,
        feedback: null,
      }
      try {
        const res = await fetch('https://ipaterpadu-6estemlearning-tel.my.id/api/api.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        let msg = ''
        try {
          const json = await res.clone().json()
          if (json && typeof json.message === 'string') msg = json.message
        } catch {
          const txt = await res.text()
          msg = txt
        }
        if (res.ok) {
          setStatuses((prev) => {
            const next = [...prev]
            next[i] = 'ok'
            return next
          })
          setErrorDetails((prev) => {
            const next = [...prev]
            next[i] = ''
            return next
          })
          successCount += 1
        } else {
          setErrorDetails((prev) => {
            const next = [...prev]
            next[i] = `HTTP ${res.status}${msg ? `: ${msg}` : ''}`
            return next
          })
        }
      } catch (e) {
        setErrorDetails((prev) => {
          const next = [...prev]
          next[i] = e?.message || 'Network error'
          return next
        })
      }
      await new Promise((r) => setTimeout(r, 150))
    }
    const allOk = Array(9).fill(0).every((_, i) => (i < statuses.length ? statuses[i] === 'ok' : false))
    if (allOk) {
      setDone(true)
      setError('')
    } else {
      setError('Masih ada jawaban gagal. Coba lagi beberapa saat.')
    }
    setSubmitting(false)
  }

  const lines = getReportLines()

  return (
    <div className="page" ref={ref}>
      <div className="page-content report-page">
        <div className="report-board">
          <div className="report-board-inner">
            <div className="report-header">-------- Report --------</div>
            <div className="report-list">
              {lines.map((line, idx) => (
                <div key={idx} className="report-row">
                  <span className="report-index">{idx + 1}</span>
                  <span className="report-text">{line}{line ? ',' : ''}</span>
                  <span className={`report-status ${statuses[idx] === 'ok' ? 'report-status-ok' : statuses[idx] === 'err' ? 'report-status-err' : ''}`}>
                    {statuses[idx] === 'ok' ? '✓' : statuses[idx] === 'err' ? '!' : ''}
                  </span>
                  {statuses[idx] === 'err' && errorDetails[idx] && (
                    <span className="report-error-inline">{errorDetails[idx]}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="report-footer">
              {!done && (
                <>
                  <button
                    type="button"
                    className="report-save-btn"
                    onClick={handleSave}
                    disabled={submitting}
                  >
                    {submitting ? `Mengirim (${progress}/9)` : saved ? 'Tersimpan' : 'Simpan Jawaban'}
                  </button>
                  {anyError && (
                    <button
                      type="button"
                      className="report-save-btn"
                      onClick={handleRetryFailed}
                      disabled={submitting}
                    >
                      Kirim Ulang yang Gagal
                    </button>
                  )}
                </>
              )}
              {error && <span className="report-error">{error}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default AnswerReportPage
