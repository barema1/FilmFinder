import React, { useState } from 'react';
import CategorySelector from './components/CategorySelector';
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
    <div className="min-h-screen text-white pt-20">
      <div className="container mx-auto max-w-4xl text-center px-4">

        {/* Hero Text matching your design */}
        <h1 className="text-6xl font-extrabold text-[#7f5af0] mb-2">
          Find Movies & Anime
        </h1>
        <p className="text-5xl font-light mb-12 text-gray-100">
          Instantly
        </p>

        {/* Placeholder for SearchBar */}
        {/* <SearchBar /> */}

        {/* Category Selector */}
        <CategorySelector onSelect={handleCategorySelect} />

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