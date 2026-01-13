import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

function App() {
  const [currentCategory, setCurrentCategory] = useState('Movies');
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCategorySelect = (category) => {
    setCurrentCategory(category);
    setSearchTerm('');
    setMovies([]);
    setError('');
    console.log(`Switched to category: ${category}`);
  };

  const handleReset = () => {
    setSearchTerm('');
    setMovies([]);
    setError('');
    setLoading(false);
  };

  const handleSearch = async (term) => {
    if (!term) return;

    setSearchTerm(term);
    setLoading(true);
    setError('');
    setMovies([]);

    if (currentCategory === 'Movies') {
      const apiKey = import.meta.env.VITE_OMDB_API_KEY;
      if (!apiKey) {
        setError('Missing API Key. Please add VITE_OMDB_API_KEY to your .env file.');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${term}&type=movie`);
        const data = await response.json();

        if (data.Response === 'True') {
          setMovies(data.Search);
        } else {
          setError(data.Error || 'No movies found.');
        }
      } catch (err) {
        setError('Failed to fetch movies. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    } else {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${term}&sfw`);
        const data = await response.json();

        if (data.data && data.data.length > 0) {
          const animeList = data.data.map(anime => ({
            Title: anime.title,
            Poster: anime.images?.jpg?.large_image_url || anime.images?.jpg?.image_url,
            Year: anime.year || (anime.aired?.string ? anime.aired.string.split(',')[1]?.trim() : 'N/A'),
            Type: 'Anime',
            imdbID: anime.mal_id,
            imdbRating: anime.score || null,
            Episodes: anime.episodes || null,
            Status: anime.status || null
          }));
          setMovies(animeList);
        } else {
          setError('No anime found.');
        }
      } catch (err) {
        setError('Failed to fetch anime. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen text-white">
      <Navbar onReset={handleReset} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              currentCategory={currentCategory}
              searchTerm={searchTerm}
              movies={movies}
              loading={loading}
              error={error}
              onSearch={handleSearch}
              onCategorySelect={handleCategorySelect}
            />
          }
        />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/anime/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;