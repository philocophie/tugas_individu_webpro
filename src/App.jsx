import { useState } from 'react'
import Header from './components/Header'
import HalamanHome from './pages/HalamanHome'
import HalamanProfil from './pages/HalamanProfil'

const profil = {
  nama: 'Sofia Mehira Simanihuruk',
  jurusan: 'S1 Rekayasa Perangkat Lunak',
  bio: 'Ingin jadi programmer handal, tapi enggan ngoding',
  foto: '/foto-profil.jpeg',
}

function App() {
  const [halaman, setHalaman] = useState('home')
  const [postingan, setPostingan] = useState([
    {
      id: 1,
      judul: 'Rangkuman Normalisasi Basis Data',
      isi: 'Catatan singkat materi normalisasi lengkap dengan contoh',
      penulis: 'Dimas',
      kategori: 'Basis Data',
      waktu: '2 jam lalu',
      direpost: true,
    },
    {
      id: 2,
      judul: 'Tips Lulus Praktikum KPL',
      isi: 'Pelajari dulu konsep sebelum praktikum',
      penulis: 'Dio',
      kategori: 'SE',
      waktu: '5 jam lalu',
      direpost: false,
    },
    {
      id: 3,
      judul: 'Catatan Dasar HTML, CSS, dan JavaScript',
      isi: 'Ringkasan tag HTML yang sering dipakai, selector CSS, dll untuk pemula.',
      penulis: 'Dea',
      kategori: 'Pemrograman Web',
      waktu: 'Kemarin',
      direpost: true,
    },
    {
      id: 4,
      judul: 'Panduan Menyusun Laporan Tugas Akhir',
      isi: 'Struktur bab 1 sampai 5, contoh penulisan latar belakang, dan daftar pustaka yang rapi.',
      penulis: 'Dobby',
      kategori: 'Skripsi',
      waktu: '2 hari lalu',
      direpost: false,
    },
    {
      id: 5,
      judul: 'Cara Cepat Memahami Algoritma Sorting',
      isi: 'Perbandingan bubble sort, selection sort, dan merge sort',
      penulis: 'Dora',
      kategori: 'Algoritma',
      waktu: '3 hari lalu',
      direpost: false,
    },
  ])

  function tambahPostingan(postinganBaru) {
    setPostingan([postinganBaru, ...postingan])
  }

  function toggleRepost(id) {
    setPostingan(
      postingan.map((item) =>
        item.id === id ? { ...item, direpost: !item.direpost } : item
      )
    )
  }

  return (
    <div>
      <Header
        halaman={halaman}
        onGanti={setHalaman}
        nama={profil.nama}
        foto={profil.foto}
      />
      <main className="container">
        {halaman === 'home' ? (
          <HalamanHome
            postingan={postingan}
            profil={profil}
            onTambah={tambahPostingan}
            onRepost={toggleRepost}
          />
        ) : (
          <HalamanProfil
            postingan={postingan}
            profil={profil}
            onRepost={toggleRepost}
          />
        )}
      </main>
    </div>
  )
}

export default App