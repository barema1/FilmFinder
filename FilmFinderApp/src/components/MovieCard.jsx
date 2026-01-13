import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const poster =
        movie.Poster && movie.Poster !== 'N/A'
            ? movie.Poster
            : 'https://via.placeholder.com/400x600?text=No+Poster';

    const typePath = movie.Type === 'Anime' ? 'anime' : 'movie';
    const rating = movie.imdbRating || movie.Rating || null;

    return (
        <Link
            to={`/${typePath}/${movie.imdbID}`}
            className="bg-[#242629] rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl group cursor-pointer h-full flex flex-col block"
        >
            <div className="relative aspect-[2/3] overflow-hidden">
                <img
                    src={poster}
                    alt={movie.Title}
                    className="object-cover w-full h-full group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute top-2 right-2 bg-[#7f5af0] text-white text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                    {movie.Type || 'Movie'}
                </div>
                {rating && (
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-yellow-400 text-sm font-bold px-2 py-1 rounded-md flex items-center gap-1">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                        {rating}
                    </div>
                )}
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-white font-bold text-lg leading-tight mb-1 truncate block" title={movie.Title}>
                    {movie.Title}
                </h3>
                <div className="flex items-center justify-between mt-1">
                    <span className="text-gray-400 text-sm">{movie.Year}</span>
                    {movie.Episodes && (
                        <span className="text-gray-500 text-xs">{movie.Episodes} Episodes</span>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;
