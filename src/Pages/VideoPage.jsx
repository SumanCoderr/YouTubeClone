import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { RiDownloadLine } from "react-icons/ri";
import { Link } from "react-router-dom";
function VideoPage() {
  const [video, setVideo] = useState([]); // Store all videos
  const [loading, setLoading] = useState(true); // State for loading
  const { id } = useParams(); // Get the video id from the URL

  useEffect(() => {
    axios
      .get("http://localhost:3000/allvideos")
      .then((res) => {
        setVideo(res.data.videos);
        setLoading(false); // Set loading to false once the data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Ensure loading state is updated on error
      });
  }, []); // Only fetch data once on component mount

  // Filter video by id
  const filteredVideo = video.filter((video) => video._id === id);

  console.log(video);
  // Handle loading state and empty filtered result
  if (loading) {
    return (
      <p className="text-center m-30 font-semibold text-2xl">Loading...</p>
    );
  }

  if (filteredVideo.length === 0) {
    return <p>Video not found.</p>;
  }

  // Destructure the video data
  const { title, channelName, description, dislike, like, videoLink, views } =
    filteredVideo[0];

  return (
    <div className="flex flex-col md:flex-row mt-20 pt-2 p-10 gap-8">
      <div className="flex-1">
        <div className="bg-black w-full aspect-video mb-4">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoLink}?autoplay=1`}
            title="YouTube video player"
            allow=" autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h3 className="text-2xl font-semibold ">{title}</h3>

        <div className="flex justify-between items-center p-4 bg-white ">
          {/* Left section (Channel Info + Subscribe Button) */}
          <div className="flex items-center space-x-4">
            {/* Channel Info */}
            <div className="flex flex-col">
              <p className="font-semibold text-lg">{channelName}</p>
              <p className="text-sm text-gray-500">2.59M subscribers</p>
            </div>

            {/* Subscribe Button */}
            <button className="px-6 py-2 text-white bg-black rounded-full font-semibold hover:bg-gray-900 transition-colors duration-200">
              Subscribe
            </button>
          </div>

          {/* Right Section (Like, Dislike, Share, Download) */}
          <div className="flex space-x-6 items-center">
            {/* Like Button */}
            <div className="flex items-center space-x-1 cursor-pointer hover:text-red-600 transition-colors duration-200">
              <AiOutlineLike />
              <span className="text-gray-600 text-sm">{like}</span>
            </div>

            {/* Dislike Button */}
            <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-500 transition-colors duration-200">
              <AiOutlineDislike />
              <span className="text-gray-600 text-sm">{dislike}</span>
            </div>

            {/* Share Button */}
            <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600 transition-colors duration-200">
              <RiShareForwardLine />
              <span className="text-gray-600 text-sm">Share</span>
            </div>

            {/* Download Button */}
            <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-800 transition-colors duration-200">
              <RiDownloadLine />
              <span className="text-gray-600 text-sm">Download</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-xl font-semibold mb-2"></h3>
          <p>
            {description}
            <b className="cursor-pointer"> more...</b>
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Comments</h3>
          <div className="space-y-4">
            <div className="flex space-x-4">
              <img
                src="https://via.placeholder.com/40"
                alt="user"
                className="w-10 h-10 object-cover rounded-full"
              />
              <div>
                <p className="font-semibold">User 1</p>
                <p className="text-sm text-gray-700">
                  This is an amazing video! Loved it!
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <img
                src="https://via.placeholder.com/40"
                alt="user"
                className="w-10 h-10 object-cover rounded-full"
              />
              <div>
                <p className="font-semibold">User 2</p>
                <p className="text-sm text-gray-700">
                  Very informative! I learned a lot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3">
  <div className="space-y-4 flex flex-col gap-2">
    {video.map((videoItem) => (
      <Link key={videoItem._id} to={`/${videoItem._id}`}>
        <div className="flex space-x-4">
          <img
            src={videoItem.thumbnail}
            alt="thumbnail"
            className="w-55 h-30 object-cover rounded"
          />
          <div className="flex flex-col justify-center">
            <h4 className="text-base font-semibold">{videoItem.title}</h4>
            <div>
              <p>{videoItem.channelName}</p>
            </div>
            <p className="text-xs text-gray-500">3M views</p>
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>


    </div>
  );
}

export default VideoPage;
