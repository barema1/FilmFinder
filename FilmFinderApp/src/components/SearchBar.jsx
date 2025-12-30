import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (term.trim()) {
            onSearch(term);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                    className="h-6 w-6 text-gray-400 group-focus-within:text-[#7f5af0] transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <input
                type="text"
                className="w-full pl-12 pr-4 py-4 bg-[#242629] text-white rounded-xl border border-transparent focus:border-[#7f5af0] focus:ring-2 focus:ring-[#7f5af0] focus:ring-opacity-50 focus:outline-none placeholder-gray-500 transition-all duration-300 shadow-lg text-lg"
                placeholder="Search for titles..."
                value={term}
                onChange={(e) => setTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                <button
                    type="submit"
                    className="bg-[#7f5af0] hover:bg-[#6846c9] text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
