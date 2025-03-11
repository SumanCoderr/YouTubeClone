import { useState, useEffect } from "react";
import Videos from "./Videos";
import axios from "axios";

const HomePage = () => {
  const token = localStorage.getItem("token");
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]); // State to store filtered videos

  useEffect(() => {
    if (!token) return;

    axios
      .get("http://localhost:3000/allvideos", {
        headers: { Authorization: `JWT ${token}` },
      })
      .then((res) => {
        setVideos(res.data.videos);
        setFilteredVideos(res.data.videos); // Initially, show all videos
      })
      .catch((err) => console.log(err));
  }, [token]);


  if (!token) {
        return <p className="text-2xl font-semibold text-center m-20">Please log in to access the videos.</p>;
      }

  const options = [
    "All",
    "Programming",
    "Twenty20 Cricket",
    "Music",
    "Live",
    "Mixes",
    "Gaming",
    "Debates",
    "Coke Studio Pakistan",
    "Democracy",

  ];

  const handleCategory = (item) => {
    if (item === "All") {
      setFilteredVideos(videos); // Show all videos if "All" is selected
    } else {
      const categoryVideos = videos.filter((video) =>
        
        video.category.toLowerCase().includes(item.toLowerCase())
      );
      setFilteredVideos(categoryVideos); // Update filtered videos
    }
  };

  return (
    <div className="container absolute lg:relative mx-auto p-4">
      {/* Filters section */}
      <div className="flex flex-wrap gap-3 mb-8">
        {options.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 text-gray-800 px-4 text-sm md:py-2 md:text-lg py-1 rounded-xl cursor-pointer hover:bg-gray-400 transition-all"
            onClick={() => handleCategory(item)} // Pass selected category to handleCategory
          >
            {item}
          </div>
        ))}
      </div>

      {/* Pass the filtered videos to the Videos component */}
      <Videos videos={filteredVideos} />
    </div>
  );
};

export default HomePage;

