import useMovieSearch from '../hooks/useMovieSearch'
import SearchBar from '../components/SearchBar'        
import MovieCard from '../components/MovieCard'        
import LoadingSpinner from '../components/LoadingSpinner'

function Home() {
  const { movies, loading, error, searchTerm, searchMovies } = useMovieSearch()

  return (
    <div className="home">
      <div className="hero">
        <h1>🎬 Find Your Next Movie</h1>
        <p>Search millions of movies, TV shows, and more</p>
        <SearchBar onSearch={searchMovies} />
      </div>

      {loading && <LoadingSpinner />}
      {error && <div className="error">{error}</div>}

      {searchTerm && !loading && !error && (
        <div className="results">
          <h2>Results for "{searchTerm}"</h2>
          <div className="movie-grid">
            {movies.map(movie => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        </div>
      )}

      {!searchTerm && !loading && (
        <div className="trending">
          <h2>🔥 Trending Movies</h2>
          <p>Search above to find your favorite movies!</p>
        </div>
      )}
    </div>
  )
}

export default Home