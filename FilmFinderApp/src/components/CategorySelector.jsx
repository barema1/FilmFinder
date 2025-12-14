import React, { useState } from 'react';

function CategorySelector({ onSelect }) {
  const [activeCategory, setActiveCategory] = useState('Movies');

  const handleSelect = (category) => {
    setActiveCategory(category);
    onSelect(category); 
  };

  const baseStyle = "px-6 py-2 rounded-lg transition-colors duration-200 text-white font-semibold";
  const activeStyle = "bg-[#7f5af0]"; 
  const inactiveStyle = "bg-transparent border border-[#7f5af0] hover:bg-[#7f5af0] hover:bg-opacity-10";

  return (
    <div className="flex space-x-4">
      <button
        className={`${baseStyle} ${activeCategory === 'Movies' ? activeStyle : inactiveStyle}`}
        onClick={() => handleSelect('Movies')}
      >
        Movies
      </button>
      <button
        className={`${baseStyle} ${activeCategory === 'Anime' ? activeStyle : inactiveStyle}`}
        onClick={() => handleSelect('Anime')}
      >
        Anime
      </button>
    </div>
  );
}

export default CategorySelector;