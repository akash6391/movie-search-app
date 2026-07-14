import { Link } from 'react-router-dom'
import { FaFilm, FaHeart } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <FaFilm /> MovieSearch
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/favorites" className="fav-link">
            <FaHeart /> Favorites
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar