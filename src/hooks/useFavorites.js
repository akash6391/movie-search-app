import { useState, useEffect } from 'react'

function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const addFavorite = (movie) => {
    setFavorites(prev => {
      if (prev.some(fav => fav.imdbID === movie.imdbID)) return prev
      return [...prev, movie]
    })
  }

  const removeFavorite = (id) => {
    setFavorites(prev => prev.filter(movie => movie.imdbID !== id))
  }

  const isFavorite = (id) => {
    return favorites.some(fav => fav.imdbID === id)
  }

  return { 
    favorites, 
    addFavorite, 
    removeFavorite, 
    isFavorite 
  }
}

export default useFavorites