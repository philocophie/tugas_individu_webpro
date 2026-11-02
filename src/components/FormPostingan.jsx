import { useState } from 'react'
import Avatar from './Avatar'

function FormPostingan({ penulis, foto, onTambah }) {
  const [judul, setJudul] = useState('')
  const [isi, setIsi] = useState('')
  const [kategori, setKategori] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!judul.trim() || !isi.trim() || !kategori.trim()) return

    onTambah({
      id: Date.now(),
      judul,
      isi,
      penulis,
      kategori,
      waktu: 'Baru saja',
      direpost: false,
    })

    setJudul('')
    setIsi('')
    setKategori('')
  }

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <div className="form-atas">
        <Avatar nama={penulis} foto={foto} ukuran={40} />
        <h3>Bagikan ilmu kamu hari ini</h3>
      </div>
      <input
        type="text"
        placeholder="Judul postingan"
        value={judul}
        onChange={(e) => setJudul(e.target.value)}
      />
      <textarea
        rows="3"
        placeholder="Tulis ilmu atau catatan yang ingin kamu bagikan"
        value={isi}
        onChange={(e) => setIsi(e.target.value)}
      />
      <input
        type="text"
        placeholder="Kategori (contoh: Basis Data)"
        value={kategori}
        onChange={(e) => setKategori(e.target.value)}
      />
      <button type="submit">Tambah</button>
    </form>
  )
}

export default FormPostingan