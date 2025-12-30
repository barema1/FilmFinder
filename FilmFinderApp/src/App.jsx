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
    setSearchTerm(term);
    setLoading(true);
    setError('');

    // TODO: Implement API fetching in next steps
    console.log(`Searching for: ${term} in ${currentCategory}`);

    // Simulate loading for now
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
          <h2 className="text-2xl mb-8 text-gray-500 text-left pl-4 border-l-4 border-[#7f5af0]">
            {loading ? 'Searching...' : `Results for "${currentCategory}"`}
          </h2>

          <MovieList movies={movies} loading={loading} error={error} />
        </main>
      </div>
    </div>
  );
}

export default App;