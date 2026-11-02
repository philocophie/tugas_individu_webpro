import { useState } from 'react'
import ProfilHeader from '../components/ProfilHeader'
import TabProfil from '../components/TabProfil'
import DaftarPostingan from '../components/DaftarPostingan'

function HalamanProfil({ postingan, profil, onRepost }) {
  const [tabAktif, setTabAktif] = useState('postingan')

  const postinganSaya = postingan.filter((item) => item.penulis === profil.nama)
  const daftarRepost = postingan.filter((item) => item.direpost)
  const daftarTampil = tabAktif === 'repost' ? daftarRepost : postinganSaya

  return (
    <div>
      <ProfilHeader
        nama={profil.nama}
        jurusan={profil.jurusan}
        bio={profil.bio}
        foto={profil.foto}
        jumlahPostingan={postinganSaya.length}
        jumlahRepost={daftarRepost.length}
      />
      <TabProfil tabAktif={tabAktif} onGanti={setTabAktif} />
      <DaftarPostingan
        postingan={daftarTampil}
        namaSaya={profil.nama}
        fotoSaya={profil.foto}
        onRepost={onRepost}
      />
    </div>
  )
}

export default HalamanProfil