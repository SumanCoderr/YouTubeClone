import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import axios from "axios"

function SearchBar() {
  const [query, setQuery] = useState('');
  const token = localStorage.getItem("token");

  const[videos, setVideos] = useState([])

  useEffect(() => {
    if (!token) return;
    axios
      .get("http://localhost:3000/allvideos", {
        headers: { Authorization: `JWT ${token}` },
      })
      .then((res) => setVideos(res.data.videos))
      .catch((err) => console.log(err));
  }, [query]);

  const handleSearch = () => {
    // console.log('Search for:', query);
    const searchedVideo = videos.filter((video) => video.title.toLowerCase().includes(query.toLowerCase()))
    setVideos(searchedVideo)
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


