import { useState } from 'react'
import FormPostingan from '../components/FormPostingan'
import DaftarPostingan from '../components/DaftarPostingan'

function HalamanHome({ postingan, profil, onTambah, onRepost }) {
  const [cari, setCari] = useState('')

  const hasil = postingan.filter(
    (item) =>
      item.judul.toLowerCase().includes(cari.toLowerCase()) ||
      item.kategori.toLowerCase().includes(cari.toLowerCase())
  )

  return (
    <div>
      <FormPostingan
        penulis={profil.nama}
        foto={profil.foto}
        onTambah={onTambah}
      />
      <input
        className="cari"
        type="text"
        placeholder="Cari judul atau kategori"
        value={cari}
        onChange={(e) => setCari(e.target.value)}
      />
      <DaftarPostingan
        postingan={hasil}
        namaSaya={profil.nama}
        fotoSaya={profil.foto}
        onRepost={onRepost}
      />
    </div>
  )
}

export default HalamanHome