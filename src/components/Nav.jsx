
export default function Nav(){

  return (
    <>
    <nav className="navbar" aria-label="Main Navigation" role="navigation">
      <div className="nav-container">
        <ul className="nav-menu">
          <li className="nav-item"><a href="/womens" className="nav-link">Women's</a></li>
          <li className="nav-item"><a href="/mens" className="nav-link">Men's</a></li>
          <li className="nav-item"><a href="/on-the-street" className="nav-link">On the Street</a></li>
          <li className="nav-item"><a href="/the-catwalk" className="nav-link">The Catwalk</a></li>
          <li className="nav-item"><a href="/adwatch" className="nav-link">AdWatch</a></li>
          <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
        </ul>
      </div>
    </nav>
    </>
  )
}