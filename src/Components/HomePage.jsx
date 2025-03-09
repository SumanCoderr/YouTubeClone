import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/allVideo")
      .then((res) => {
        console.log(res.data.videos);
        setData(res.data.videos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const options = [
    "All",
    "Comedy",
    "Twenty20 Cricket",
    "Music",
    "Live",
    "Mixes",
    "Gaming",
    "Debates",
    "Coke Studio Pakistan",
    "Democracy",
    "Pakistani dramas",
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Filters section */}
      <div className="flex flex-wrap gap-3 mb-8">
        {options.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-xl cursor-pointer hover:bg-gray-400  transition-all"
            >
              {item}
            </div>
          );
        })}
      </div>

      {/* Video Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((item, ind) => {
          return (
            <Link
              to={`/watch/${item._id}`}
              key={ind}
              className="relative bg-gray-800 rounded-lg overflow-hidden"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-all"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-300 text-sm truncate">{item.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
