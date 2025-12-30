import React from 'react';
import MovieCard from '../components/MovieCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const MovieList = ({ movies, loading, error }) => {
    if (loading) return <Loader />;
    if (error) return <ErrorMessage message={error} />;

    if (!movies?.length) {
        return null;
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full fade-in">
            {movies.map((movie, index) => (
                <MovieCard
                    key={movie.imdbID || movie.mal_id || index}
                    movie={movie}
                />
            ))}
        </div>
    );
};

export default MovieList;
