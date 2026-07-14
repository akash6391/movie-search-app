import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import useFavorites from '../hooks/useFavorites'  // ← No extension needed

function MovieCard({ movie }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites()
  const isFav = isFavorite(movie.imdbID)

  const toggleFavorite = () => {
    if (isFav) {
      removeFavorite(movie.imdbID)
    } else {
      addFavorite(movie)
    }
  }

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.imdbID}`}>
        <img 
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'} 
          alt={movie.Title}
        />
      </Link>
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <button onClick={toggleFavorite} className="fav-btn">
          {isFav ? <FaHeart color="red" /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  )
}

export default MovieCard