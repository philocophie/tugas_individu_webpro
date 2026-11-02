import Avatar from './Avatar'

function ProfilHeader({ nama, jurusan, bio, foto, jumlahPostingan, jumlahRepost }) {
  return (
    <div className="card profil">
      <div className="sampul"></div>
      <div className="profil-isi">
        <div className="profil-foto">
          <Avatar nama={nama} foto={foto} ukuran={96} />
        </div>
        <h2>{nama}</h2>
        <p className="jurusan">{jurusan}</p>
        <p className="bio">{bio}</p>
        <div className="statistik">
          <div>
            <strong>{jumlahPostingan}</strong>
            <span>Postingan</span>
          </div>
          <div>
            <strong>{jumlahRepost}</strong>
            <span>Reposts</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilHeader