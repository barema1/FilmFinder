import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ onReset }) => {
    const navigate = useNavigate();

    const handleLogoClick = (e) => {
        e.preventDefault();
        if (onReset) {
            onReset();
        }
        navigate('/');
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#16161a] border-b border-gray-800 z-50 px-6 py-4">
            <div className="container mx-auto max-w-6xl flex justify-between items-center">
                <Link 
                    to="/" 
                    onClick={handleLogoClick}
                    className="text-3xl font-extrabold text-[#7f5af0] tracking-tight hover:opacity-80 transition-opacity cursor-pointer"
                >
                    FilmFinder
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
