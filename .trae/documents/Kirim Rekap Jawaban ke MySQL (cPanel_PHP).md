## Arah Teknis
- Tetap pakai endpoint lama: `https://ipaterpadu-6estemlearning-tel.my.id/api/api.php`.
- Admin panel sudah disusun per-row, jadi setiap baris report dikirim sebagai satu POST terpisah.
- Total 9 kali POST untuk 9 jawaban.

## Format Payload per Baris
Body (JSON):
```
{
  "id_user": 2,
  "indikator_soal": "flipbook_irigasi",
  "practice": "presentasi",
  "pertanyaan": "Flipbook 9 Soal - Baris #N",
  "jawaban": "Isi baris ke-N",
  "nilai": null,
  "feedback": null
}
```
- `pertanyaan` diberi label `Baris #N` supaya mudah diidentifikasi di admin panel.
- `jawaban` diisi teks dari baris rekap (mis. gabungan dengan koma untuk soal yang multi-jawaban).

## Contoh Dummy untuk Postman
- Buat 9 request (POST) ke `api.php` dengan payload berbeda-beda:
1) Baris 1:
```
{
  "id_user": 2,
  "indikator_soal": "flipbook_irigasi",
  "practice": "presentasi",
  "pertanyaan": "Flipbook 9 Soal - Baris #1",
  "jawaban": "Permasalahan 1, 2, 3, 4, 5, 6",
  "nilai": null,
  "feedback": null
}
```
2) Baris 2:
```
{ "id_user": 2, "indikator_soal": "flipbook_irigasi", "practice": "presentasi", "pertanyaan": "Flipbook 9 Soal - Baris #2", "jawaban": "Ya, alasan solusi tepat", "nilai": null, "feedback": null }
```
3) Baris 3:
```
{ "id_user": 2, "indikator_soal": "flipbook_irigasi", "practice": "presentasi", "pertanyaan": "Flipbook 9 Soal - Baris #3", "jawaban": "Link grafik: https://example.com/grafik, Analisis: ringkas, Saran: revisi minor", "nilai": null, "feedback": null }
```
4) Baris 4:
```
{ "id_user": 2, "indikator_soal": "flipbook_irigasi", "practice": "presentasi", "pertanyaan": "Flipbook 9 Soal - Baris #4", "jawaban": "Teknologi X, alasan hemat air", "nilai": null, "feedback": null }
```
5) Baris 5:
```
{ "id_user": 2, "indikator_soal": "flipbook_irigasi", "practice": "presentasi", "pertanyaan": "Flipbook 9 Soal - Baris #5", "jawaban": "Ahli A, alasan metodologi kuat", "nilai": null, "feedback": null }
```
6) Baris 6:
```
{ "id_user": 2, "indikator_soal": "flipbook_irigasi", "practice": "presentasi", "pertanyaan": "Flipbook 9 Soal - Baris #6", "jawaban": "Ya, alasan kolaborasi, Link: https://example.com/ppt", "nilai": null, "feedback": null }
```
7) Baris 7:
```
{ "id_user": 2, "indikator_soal": "flipbook_irigasi", "practice": "presentasi", "pertanyaan": "Flipbook 9 Soal - Baris #7", "jawaban": "Sumber daya: video tutorial + alasan", "nilai": null, "feedback": null }
```
8) Baris 8:
```
{ "id_user": 2, "indikator_soal": "flipbook_irigasi", "practice": "presentasi", "pertanyaan": "Flipbook 9 Soal - Baris #8", "jawaban": "Link artikel: https://example.com/artikel, Ringkasan: singkat", "nilai": null, "feedback": null }
```
9) Baris 9:
```
{ "id_user": 2, "indikator_soal": "flipbook_irigasi", "practice": "presentasi", "pertanyaan": "Flipbook 9 Soal - Baris #9", "jawaban": "Ya, link poster: https://example.com/poster, alasan pendek", "nilai": null, "feedback": null }
```
- Header: `Content-Type: application/json` (tidak perlu X-API-Key karena pakai api.php lama).
- Gunakan Collection Runner untuk menjalankan ke-9 request secara berurutan.

## Integrasi Frontend (Konkurensi Aman)
- Kirim 9 POST secara berurutan atau dengan batas konkurensi 2–3.
```javascript
async function postRow(rowIndex, text) {
  const payload = {
    id_user: currentUserId,
    indikator_soal: 'flipbook_irigasi',
    practice: 'presentasi',
    pertanyaan: `Flipbook 9 Soal - Baris #${rowIndex+1}`,
    jawaban: text,
    nilai: null,
    feedback: null,
  };
  const res = await fetch('https://ipaterpadu-6estemlearning-tel.my.id/api/api.php', {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error(`Row ${rowIndex+1} gagal`);
  return await res.json();
}

async function submitAll(lines) {
  const results = [];
  for (let i = 0; i < lines.length; i++) {
    // bisa ditambah retry/backoff jika perlu
    results.push(await postRow(i, lines[i]));
    await new Promise(r => setTimeout(r, 150)); // jeda ringan
  }
  return results;
}
```
- Disable tombol saat submit, tampilkan progres (1/9, 2/9, ...), dan tangani error.

## Keamanan Minimal
- Tetap gunakan `api.php` lama agar project lain tidak terganggu.
- Validasi input dilakukan di server (sudah ada prepared statements di api.php Anda).
- Jika nanti diperlukan, bisa tambah API key hanya untuk endpoint baru tanpa menyentuh api.php lama.

## Pengujian
1) Uji di Postman masing-masing baris dengan payload di atas.
2) Jalankan Collection Runner untuk 9 baris sekaligus.
3) Verifikasi di phpMyAdmin setiap POST menambah satu row sesuai baris.

Konfirmasi: Jika setuju, saya akan menambahkan pemanggilan 9 POST dari halaman Report dengan progres dan jeda ringan agar aman di shared hosting.