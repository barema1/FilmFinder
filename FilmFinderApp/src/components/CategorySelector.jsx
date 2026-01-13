import React from 'react';

function CategorySelector({ onSelect, currentCategory = 'Movies' }) {
  const baseStyle = "px-8 py-3 rounded-xl transition-all duration-200 text-white font-semibold text-base";
  const activeStyle = "bg-gradient-to-r from-[#7f5af0] to-[#6846c9] shadow-lg shadow-[#7f5af0]/50"; 
  const inactiveStyle = "bg-[#242629] border border-gray-700 hover:border-[#7f5af0] hover:bg-[#242629]";

  return (
    <div className="flex space-x-4">
      <button
        className={`${baseStyle} ${currentCategory === 'Movies' ? activeStyle : inactiveStyle}`}
        onClick={() => onSelect('Movies')}
      >
        Movies
      </button>
      <button
        className={`${baseStyle} ${currentCategory === 'Anime' ? activeStyle : inactiveStyle}`}
        onClick={() => onSelect('Anime')}
      >
        Anime
      </button>
    </div>
  );
}

export default CategorySelector;