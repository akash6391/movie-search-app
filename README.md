# 🎬 Movie Search App

![React](https://img.shields.io/badge/React-18.x-blue)
![Vite](https://img.shields.io/badge/Vite-5.x-yellow)
![License](https://img.shields.io/badge/License-MIT-green)

A responsive movie search application built with **React.js** that allows users to search for movies, view detailed information, and save favorites.



---

##  Features

- 🔍 **Search Movies** - Search any movie using OMDB API
- 📖 **Movie Details** - View plot, ratings, cast, and more
- ❤️ **Favorites** - Save your favorite movies
- 💾 **Persistent Storage** - Favorites saved in localStorage
- 📱 **Responsive Design** - Works on all devices

---

##  Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React.js, React Router |
| State Management | Custom Hooks |
| Styling | CSS3 |
| API Calls | Axios |
| Movie Data | OMDB API |
| Build Tool | Vite |

---

## 📸 Screenshots

### Home Page
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/42aa1f2f-9894-4bb8-93b7-6315ac1ac9c9" />


### Movie Details
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/c4a16efb-91b5-4991-9e29-18e9368df776" />


### Favorites
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/6198b064-4401-4ee8-b503-0ebba085e699" />



## 🚀 Installation


# Clone the repository
git clone https://github.com/akash6391/movie-search-app.git

# Navigate to project
cd movie-search-app

# Install dependencies
npm install

# Create .env file
echo "VITE_OMDB_API_KEY=your_api_key_here" > .env
echo "VITE_OMDB_API_URL=http://www.omdbapi.com/" >> .env

# Run development server
npm run dev

## 📁 Project Structure

```
movie-search-app/
├── src/
│   ├── components/
│   │   ├── LoadingSpinner.jsx
│   │   ├── MovieCard.jsx
│   │   ├── Navbar.jsx
│   │   └── SearchBar.jsx
│   ├── hooks/
│   │   ├── useFavorites.js
│   │   └── useMovieSearch.js
│   ├── pages/
│   │   ├── Favorites.jsx
│   │   ├── Home.jsx
│   │   └── MovieDetails.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── .gitignore
├── package.json
└── README.md
```
