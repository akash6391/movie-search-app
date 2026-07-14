import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import LoadingSpinner from '../components/LoadingSpinner'

function MovieDetails() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_OMDB_API_URL}?i=${id}&apikey=${import.meta.env.VITE_OMDB_API_KEY}&plot=full`
        )
        if (response.data.Response === 'True') {
          setMovie(response.data)
        } else {
          setError('Movie not found')
        }
      } catch (err) {
        setError('Failed to fetch movie details')
      } finally {
        setLoading(false)
      }
    }
    fetchMovieDetails()
  }, [id])

  if (loading) return <LoadingSpinner />
  if (error) return <div className="error">{error}</div>
  if (!movie) return null

  return (
    <div className="movie-details">
      <Link to="/" className="back-btn">← Back to Search</Link>
      <div className="details-container">
        <img 
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400x600?text=No+Poster'} 
          alt={movie.Title}
        />
        <div className="details-info">
          <h1>{movie.Title}</h1>
          <p className="year">{movie.Year} • {movie.Runtime}</p>
          <p className="genre">{movie.Genre}</p>
          <p className="plot">{movie.Plot}</p>
          <div className="details-stats">
            <span>⭐ {movie.imdbRating}/10</span>
            <span>🎬 {movie.Director}</span>
            <span>👤 {movie.Actors}</span>
          </div>
          <div className="details-extra">
            <p><strong>Language:</strong> {movie.Language}</p>
            <p><strong>Country:</strong> {movie.Country}</p>
            <p><strong>Awards:</strong> {movie.Awards}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails