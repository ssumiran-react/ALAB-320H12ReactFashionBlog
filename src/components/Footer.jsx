
export default function Footer(){
    const copyRight = " 2026 Valet Industries, Inc"
    return (
        <div>
        <nav className="footbar" aria-label="Main Navigation" role="navigation">  
        <div className="foot-container">
        <ul className="foot-menu">
          <li className="foot-item"><a href="/home" className="foot-link">Home</a></li>
          <li className="foot-item"><a href="/womens" className="foot-link">Women's</a></li>
          <li className="foot-item"><a href="/mens" className="foot-link">Men's</a></li>
          <li className="foot-item"><a href="/on-the-street" className="foot-link">On the Street</a></li>
          <li className="foot-item"><a href="/the-catwalk" className="foot-link">The Catwalk</a></li>
          <li className="foot-item"><a href="/adwatch" className="foot-link">AdWatch</a></li>
          <li className="foot-item"><a href="/about" className="foot-link">About</a></li>
        </ul>
        </div>
        </nav>
        &#169;{copyRight}
      </div>
    )
}