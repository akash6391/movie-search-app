import { useState } from 'react'
import axios from 'axios'

// Custom hook for searching movies
function useMovieSearch() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const API_KEY = "6c1ca2c9"  // Replace with your key
  const API_URL = "http://www.omdbapi.com"

  const searchMovies = async (query) => {
    if (!query.trim()) return

    setSearchTerm(query)
    setLoading(true)
    setError('')
    
    try {
      const response = await axios.get(
        `${API_URL}/?s=${query}&apikey=${API_KEY}`
      )
      
      if (response.data.Response === 'True') {
        setMovies(response.data.Search || [])
      } else {
        setError(response.data.Error || 'No movies found')
        setMovies([])
      }
    } catch (err) {
      setError('Failed to fetch movies. Please try again.')
      console.error("Fetch Error:", err.message)
    } finally {
      setLoading(false)
    }
  }

  return {
    movies,
    loading,
    error,
    searchTerm,
    searchMovies,
    setMovies   // Optional: for clearing results
  }
}

export default useMovieSearch