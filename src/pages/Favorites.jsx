import { Link } from 'react-router-dom'
import MovieCard from '../components/MovieCard'
import useFavorites from '../hooks/useFavorites'  // ← No extension needed

function Favorites() {
  const { favorites } = useFavorites()

  return (
    <div className="favorites">
      <h1>❤️ Your Favorites</h1>
      {favorites.length === 0 ? (
        <div className="empty-favorites">
          <p>No favorites yet!</p>
          <Link to="/">Search for movies</Link>
        </div>
      ) : (
        <div className="movie-grid">
          {favorites.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Favorites