import Avatar from './Avatar'

function Header({ halaman, onGanti, nama, foto }) {
  return (
    <header className="navbar">
      <div className="navbar-isi">
        <h1 className="logo">Tel-U Knowledge</h1>
        <nav className="menu">
          <button
            className={halaman === 'home' ? 'menu-item aktif' : 'menu-item'}
            onClick={() => onGanti('home')}
          >
            Home
          </button>
          <button
            className={halaman === 'profil' ? 'menu-item aktif' : 'menu-item'}
            onClick={() => onGanti('profil')}
          >
            <Avatar nama={nama} foto={foto} ukuran={24} />
            Profil
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header