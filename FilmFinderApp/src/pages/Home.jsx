import React from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from './MovieList';

const Home = ({ currentCategory, searchTerm, movies, loading, error, onSearch }) => {
    return (
        <div className="container mx-auto max-w-6xl text-center pt-32 px-4 pb-20">

            {/* Hero Section - Hide when searching or showing results */}
            <div className={`transition-all duration-500 ${movies.length > 0 || loading ? 'hidden' : 'block mb-12'}`}>
                <h1 className="text-6xl font-extrabold text-[#7f5af0] mb-2">
                    Find Movies & Anime
                </h1>
                <p className="text-5xl font-light text-gray-100">
                    Instantly
                </p>
            </div>

            <SearchBar onSearch={onSearch} />

            <main className="mt-12">
                {(loading || movies.length > 0) && (
                    <h2 className="text-2xl mb-8 text-gray-500 text-left pl-4 border-l-4 border-[#7f5af0] fade-in">
                        {loading ? 'Searching...' : `Results for "${searchTerm}"`}
                    </h2>
                )}

                <MovieList movies={movies} loading={loading} error={error} />

                {/* Helper text when empty */}
                {!loading && movies.length === 0 && !error && (
                    <p className="text-gray-400 mt-12 text-lg fade-in">
                        Start by searching for a title above.
                    </p>
                )}
            </main>
        </div>
    );
};

export default Home;
