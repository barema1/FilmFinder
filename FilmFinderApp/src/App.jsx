import React, { useState } from 'react';
import Navbar from './components/Navbar';
// import SearchBar from './components/SearchBar';
// import MovieList from './pages/MovieList';

function App() {
  const [currentCategory, setCurrentCategory] = useState('Movies');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategorySelect = (category) => {
    setCurrentCategory(category);
    // Reset search term or logic when category changes, if desired
    setSearchTerm('');
    console.log(`Switched to category: ${category}`);
  };

  return (
    <div className="min-h-screen bg-[#16161a] text-white">
      <Navbar onCategorySelect={handleCategorySelect} />

      <div className="container mx-auto max-w-4xl text-center pt-32 px-4">

        {/* Hero Text */}
        <h1 className="text-6xl font-extrabold text-[#7f5af0] mb-2">
          Find Movies & Anime
        </h1>
        <p className="text-5xl font-light mb-12 text-gray-100">
          Instantly
        </p>

        {/* Placeholder for SearchBar */}
        {/* <SearchBar /> */}

        <p className="text-gray-400 mt-8 text-lg">
          Discover your next favorite title. Search, explore, and enjoy.
        </p>

        {/* The main content area where results will display */}
        <main className="mt-12">
          {/* Conditional rendering for MovieList or AnimeList will go here */}
          {/* {currentCategory === 'Movies' ? <MovieList /> : <AnimeList />} */}
          <h2 className="text-2xl mt-12 text-gray-500">
            Current Category: {currentCategory}
          </h2>
        </main>
      </div>
    </div>
  );
}

export default App;