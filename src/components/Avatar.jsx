function Avatar({ nama, foto, ukuran }) {
  const inisial = nama
    .split(' ')
    .map((kata) => kata[0])
    .slice(0, 2)
    .join('')

  const gaya = { width: ukuran, height: ukuran, fontSize: ukuran / 2.5 }

  if (foto) {
    return <img className="avatar" src={foto} alt={nama} style={gaya} />
  }

  return (
    <div className="avatar avatar-inisial" style={gaya}>
      {inisial}
    </div>
  )
}

export default Avatar