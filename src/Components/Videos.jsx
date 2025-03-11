import React from "react";
import { Link } from "react-router-dom";


function Videos({ videos }) { // Accept filtered videos as a prop
  if (!videos || videos.length === 0) {
    return <p className="text-2xl font-semibold text-center m-20">No videos found for this category.</p>;
  }
  console.log(videos)

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {videos.map((video) => (
          <Link to={`/${video._id}`} key={video._id}>
            <div className="cursor-pointer mb-5">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-auto rounded-md"
              />
              <h3 className="text-base mt-2 font-semibold">{video.title}</h3>
              <h5 className="font-semibold text-gray-600">{video.channelName}</h5>
              <h6 className="text-sm">{video.views} views</h6>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Videos;
