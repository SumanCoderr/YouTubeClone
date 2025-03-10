import { useEffect, useState } from "react";
import axios from "axios";
import { useSidebar } from '../utilis/useContext.jsx';
import { Link } from "react-router-dom";


function Videos() {
  const [videos, setVideos] = useState([]);
  const token = localStorage.getItem("token");
  const { sideBar } = useSidebar();


  useEffect(() => {
    if (!token) return;

    axios
      .get("http://localhost:3000/allvideos", {
        headers: { Authorization: `JWT ${token}` },
      })
      .then((res) => setVideos(res.data.videos))
      .catch((err) => console.log(err));
  }, [token]);

  if (!token) {
    return <p className="text-2xl font-semibold text-center m-20">Please log in to access the videos.</p>;
  }
  console.log(videos)

 
    return (
      <div className="p-4">
        <div className={`grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:${!sideBar ? 'grid-cols-4' : 'grid-cols-3'}`}>
          {videos.map((video) => (
            <Link to ={`/${video._id}`}>
            <div
              key={video.id}
              className="cursor-pointer mb-5"
              onClick={() => setSelectedVideo(video)}
            >
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
