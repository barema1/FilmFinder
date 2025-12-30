import React from 'react';

const MovieCard = ({ movie }) => {
    // Fallback for missing posters
    const poster =
        movie.Poster && movie.Poster !== 'N/A'
            ? movie.Poster
            : 'https://via.placeholder.com/400x600?text=No+Poster';

    return (
        <div className="bg-[#242629] rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl group cursor-pointer h-full flex flex-col">
            <div className="relative aspect-[2/3] overflow-hidden">
                <img
                    src={poster}
                    alt={movie.Title}
                    className="object-cover w-full h-full group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute top-2 right-2 bg-[#7f5af0] text-white text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                    {movie.Type || 'Movie'}
                </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-white font-bold text-lg leading-tight mb-1 truncate block" title={movie.Title}>
                    {movie.Title}
                </h3>
                <span className="text-gray-400 text-sm">{movie.Year}</span>
            </div>
        </div>
    );
};

export default MovieCard;
