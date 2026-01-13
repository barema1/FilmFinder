import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const MovieDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const { pathname } = window.location;
    const isAnime = pathname.includes('/anime/');

    useEffect(() => {
        const fetchDetails = async () => {
            setLoading(true);
            setError('');

            try {
                let data = null;

                if (isAnime) {
                    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
                    const json = await response.json();

                    if (json.data) {
                        const anime = json.data;
                        data = {
                            Title: anime.title,
                            Year: anime.year || (anime.aired?.string ? anime.aired.string.split(',')[0]?.trim() : 'N/A'),
                            Poster: anime.images?.jpg?.large_image_url || anime.images?.jpg?.image_url,
                            Plot: anime.synopsis || 'No synopsis available.',
                            imdbRating: anime.score,
                            Genre: anime.genres?.map(g => g.name).join(', ') || 'N/A',
                            Director: anime.studios?.map(s => s.name).join(', ') || 'N/A',
                            Actors: anime.characters?.slice(0, 4).map(c => c.name).join(', ') || 'N/A',
                            Runtime: anime.duration || null,
                            Episodes: anime.episodes || null,
                            Status: anime.status || null,
                            Type: 'Anime'
                        };
                    } else {
                        throw new Error('Anime not found');
                    }

                } else {
                    const apiKey = import.meta.env.VITE_OMDB_API_KEY;
                    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}&plot=full`);
                    const json = await response.json();

                    if (json.Response === 'True') {
                        data = json;
                    } else {
                        throw new Error(json.Error || 'Movie not found');
                    }
                }

                setMovie(data);

            } catch (err) {
                console.error(err);
                setError('Failed to load details. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchDetails();
        }
    }, [id, isAnime]);

    if (loading) return <div className="min-h-screen pt-20"><Loader /></div>;
    if (error) return <div className="min-h-screen pt-20"><ErrorMessage message={error} /></div>;
    if (!movie) return null;

    return (
        <div className="min-h-screen bg-[#16161a] text-white pt-24 px-4 pb-12">
            <div className="container mx-auto max-w-6xl">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-8 text-gray-400 hover:text-[#7f5af0] transition-colors flex items-center gap-2 group"
                >
                    <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Search
                </button>

                <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                    <div className="w-full md:w-1/3 lg:w-1/4">
                        <div className="rounded-xl overflow-hidden shadow-2xl skew-y-0 hover:skew-y-1 transition-transform duration-500 ease-out">
                            <img
                                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400x600'}
                                alt={movie.Title}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 lg:w-3/4">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
                            {movie.Title}
                            <span className="text-2xl text-gray-500 font-normal ml-3">({movie.Year})</span>
                        </h1>

                        {(movie.Episodes || movie.Status || movie.Runtime) && (
                            <div className="flex flex-wrap gap-3 mb-4">
                                {movie.Episodes && (
                                    <span className="text-gray-400 text-sm">
                                        {movie.Episodes} {movie.Episodes === 1 ? 'Episode' : 'Episodes'}
                                    </span>
                                )}
                                {movie.Status && (
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                        movie.Status.toLowerCase().includes('completed') 
                                            ? 'bg-green-500 bg-opacity-20 text-green-400 border border-green-500'
                                            : 'bg-blue-500 bg-opacity-20 text-blue-400 border border-blue-500'
                                    }`}>
                                        {movie.Status}
                                    </span>
                                )}
                                {movie.Runtime && movie.Runtime !== 'N/A' && (
                                    <span className="text-gray-400 text-sm">{movie.Runtime}</span>
                                )}
                            </div>
                        )}

                        <div className="flex flex-wrap gap-3 mb-8">
                            {movie.Genre && movie.Genre !== 'N/A' && movie.Genre.split(',').map((genre, i) => (
                                <span key={i} className="px-3 py-1 bg-[#242629] border border-[#7f5af0] text-[#7f5af0] text-sm rounded-full">
                                    {genre.trim()}
                                </span>
                            ))}

                            {movie.imdbRating && (
                                <span className="px-3 py-1 bg-yellow-500 bg-opacity-10 border border-yellow-500 text-yellow-500 text-sm rounded-full flex items-center gap-1">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                    {movie.imdbRating} / 10
                                </span>
                            )}
                        </div>

                        <div className="mb-8 p-6 bg-[#242629] rounded-xl border-l-4 border-[#7f5af0]">
                            <h3 className="text-xl font-bold mb-3 text-white">Plot Summary</h3>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                {movie.Plot}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {movie.Actors && movie.Actors !== 'N/A' && (
                                <div>
                                    <h3 className="text-lg font-bold text-gray-400 mb-2 uppercase tracking-wide">
                                        {movie.Type === 'Anime' ? 'Characters' : 'Cast'}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {movie.Actors.split(',').map((actor, i) => (
                                            <span key={i} className="text-white bg-[#1a1a1a] px-3 py-2 rounded-lg">
                                                {actor.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {movie.Director && movie.Director !== 'N/A' && (
                                <div>
                                    <h3 className="text-lg font-bold text-gray-400 mb-2 uppercase tracking-wide">
                                        {movie.Type === 'Anime' ? 'Studio' : 'Director'}
                                    </h3>
                                    <p className="text-white text-lg">{movie.Director}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
