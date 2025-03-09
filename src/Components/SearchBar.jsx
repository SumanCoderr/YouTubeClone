import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log('Search for:', query);
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-full ">
      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        className="pl-6 py-2 w-150 rounded-l-full focus:outline-none"
      />

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="bg-gray-100 px-6 cursor-pointer py-2 rounded-r-full flex items-center justify-center"
      >
        <FiSearch size={20} />
      </button>
    </div>
  );
}

export default SearchBar;


