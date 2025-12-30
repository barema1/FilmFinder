import React from 'react';
import { Link } from 'react-router-dom';
import CategorySelector from './CategorySelector';

const Navbar = ({ onCategorySelect }) => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-[#16161a] border-b border-gray-800 z-50 px-6 py-4 flex justify-between items-center">
            {/* Brand / Logo */}
            <Link to="/" className="text-3xl font-extrabold text-[#7f5af0] tracking-tight">
                FilmFinder
            </Link>

            {/* Category Selection in Navbar */}
            <div className="hidden md:block">
                <CategorySelector onSelect={onCategorySelect} />
            </div>
        </nav>
    );
};

export default Navbar;
