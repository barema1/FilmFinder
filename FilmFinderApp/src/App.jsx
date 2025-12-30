import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import MovieList from './pages/MovieList';

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
      // Jikan API for Anime
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${term}&sfw`);
        const data = await response.json();

        if (data.data && data.data.length > 0) {
          const animeList = data.data.map(anime => ({
            Title: anime.title,
            Poster: anime.images.jpg.large_image_url,
            Year: anime.year || (anime.aired?.string ? anime.aired.string.split(',')[1]?.trim() : 'N/A'),
            Type: 'Anime',
            imdbID: anime.mal_id
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
    <div className="min-h-screen bg-[#16161a] text-white">
      <Navbar onCategorySelect={handleCategorySelect} />

      <div className="container mx-auto max-w-6xl text-center pt-32 px-4 pb-20">

        {/* Hero Text - Only show when no search has been performed to keep it clean, or keep it smaller. 
            For now, let's keep it but maybe we can hide it if there are results later. */}
        <div className={`transition-all duration-500 ${movies.length > 0 ? 'mb-8' : 'mb-12'}`}>
          <h1 className="text-6xl font-extrabold text-[#7f5af0] mb-2">
            Find Movies & Anime
          </h1>
          <p className="text-5xl font-light text-gray-100">
            Instantly
          </p>
        </div>

        <SearchBar onSearch={handleSearch} />

        <main className="mt-12">
          {(loading || movies.length > 0) && (
            <h2 className="text-2xl mb-8 text-gray-500 text-left pl-4 border-l-4 border-[#7f5af0] fade-in">
              {loading ? 'Searching...' : `Results for "${searchTerm}"`}
            </h2>
          )}

          <MovieList movies={movies} loading={loading} error={error} />
        </main>
      </div>
    </div>
  );
}

export default App;