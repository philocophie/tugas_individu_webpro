function TabProfil({ tabAktif, onGanti }) {
  return (
    <div className="tabs">
      <button
        className={tabAktif === 'postingan' ? 'tab aktif' : 'tab'}
        onClick={() => onGanti('postingan')}
      >
        Postingan
      </button>
      <button
        className={tabAktif === 'repost' ? 'tab aktif' : 'tab'}
        onClick={() => onGanti('repost')}
      >
        Reposts
      </button>
    </div>
  )
}

export default TabProfil