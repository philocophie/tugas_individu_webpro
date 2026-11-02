import KartuPostingan from './KartuPostingan'

function DaftarPostingan({ postingan, namaSaya, fotoSaya, onRepost }) {
  if (postingan.length === 0) {
    return <p className="kosong">Belum ada data postingan</p>
  }

  return (
    <div>
      {postingan.map((item) => (
        <KartuPostingan
          key={item.id}
          judul={item.judul}
          isi={item.isi}
          penulis={item.penulis}
          fotoPenulis={item.penulis === namaSaya ? fotoSaya : ''}
          kategori={item.kategori}
          waktu={item.waktu}
          direpost={item.direpost}
          onRepost={() => onRepost(item.id)}
        />
      ))}
    </div>
  )
}

export default DaftarPostingan