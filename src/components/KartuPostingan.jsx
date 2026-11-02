import Avatar from './Avatar'

function KartuPostingan({ judul, isi, penulis, fotoPenulis, kategori, waktu, direpost, onRepost }) {
  return (
    <div className="card">
      <div className="kartu-atas">
        <Avatar nama={penulis} foto={fotoPenulis} ukuran={40} />
        <div>
          <p className="nama-penulis">{penulis}</p>
          <p className="waktu">{waktu}</p>
        </div>
        <span className="kategori">{kategori}</span>
      </div>
      <h3 className="judul-kartu">{judul}</h3>
      <p className="isi">{isi}</p>
      <div className="aksi">
        <button
          className={direpost ? 'tombol-repost aktif' : 'tombol-repost'}
          onClick={onRepost}
        >
          {direpost ? 'Batal Repost' : 'Repost'}
        </button>
      </div>
    </div>
  )
}

export default KartuPostingan