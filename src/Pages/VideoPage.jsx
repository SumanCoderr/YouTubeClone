import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { RiDownloadLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function VideoPage() {
  const token = localStorage.getItem("token");
  const [video, setVideo] = useState(null); // Store a single video
  const [videos, setVideos] = useState([]);
  const [commentEdit, setCommentEdit] = useState({ id: null, text: "" }); // For editing comment
  const [comments, setComments] = useState([]); // Store comments.
  const [newComment, setNewComment] = useState(""); // State for new comment input
  const [loading, setLoading] = useState(true); // State for loading
  const { id } = useParams(); // Get the video id from the URL

  useEffect(() => {
    if (!token) return;
    axios
      .get("http://localhost:3000/allvideos", {
        headers: { Authorization: `JWT ${token}` },
      })
      .then((res) => {
        setVideos(res.data.videos);
        setLoading(false); // Set loading to false once the data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Ensure loading state is updated on error
      });

    axios
      .get(`http://localhost:3000/video/${id}`, {
        headers: { Authorization: `JWT ${token}` },
      })
      .then((res) => {
        setVideo(res.data.video);
        setLoading(false);
      })
      .catch((err) => console.log(err));

    axios
      .get(`http://localhost:3000/comments/${id}`, {
        headers: { Authorization: `JWT ${token}` },
      })
      .then((res) => {
        setComments(res.data.comments);
      })
      .catch((err) => console.log(err));
  }, [id, token]);

  const handleLike = async () => {
    const newLikeCount = video.like + 1;
    try {
      await axios.put(
        "http://localhost:3000/video/like",
        {
          videoId: id,
          like: newLikeCount,
        },
        {
          headers: { Authorization: `JWT ${token}` },
        }
      );
      setVideo({ ...video, like: newLikeCount });
    } catch (error) {
      console.log("Error updating like", error);
    }
  };

  const handleDislike = async () => {
    const newDislikeCount = video.dislike + 1;
    try {
      await axios.put(
        "http://localhost:3000/video/like",
        {
          videoId: id,
          dislike: newDislikeCount,
        },
        {
          headers: { Authorization: `JWT ${token}` },
        }
      );
      setVideo({ ...video, dislike: newDislikeCount });
    } catch (error) {
      console.log("Error updating dislike", error);
    }
  };

  // Add a new comment
  const handleAddComment = async () => {
    if (newComment.trim()) {
      try {
        const response = await axios.post(
          `http://localhost:3000/add/${id}`,
          { message: newComment },
          { headers: { Authorization: `JWT ${token}` } }
        );
        setComments([...comments, response.data.comment]);
        setNewComment(""); // Clear the input
      } catch (error) {
        console.log("Error adding comment", error);
      }
    }
  };

  // Handle updating a comment
  const handleUpdateComment = async () => {
    if (commentEdit.text.trim()) {
      try {
        await axios.put(
          `http://localhost:3000/update/${commentEdit.id}`,
          { message: commentEdit.text },
          { headers: { Authorization: `JWT ${token}` } }
        );
        setComments(
          comments.map((comment) =>
            comment._id === commentEdit.id
              ? { ...comment, message: commentEdit.text }
              : comment
          )
        );
        setCommentEdit({ id: null, text: "" }); // Reset edit state
      } catch (error) {
        console.log("Error updating comment", error);
      }
    }
  };

  // Delete a comment
  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`http://localhost:3000/delete/${commentId}`, {
        headers: { Authorization: `JWT ${token}` },
      });
      setComments(comments.filter((comment) => comment._id !== commentId));
    } catch (error) {
      console.log("Error deleting comment", error);
    }
  };

  if (loading) {
    return (
      <p className="text-center m-30 font-semibold text-2xl">Loading...</p>
    );
  }

  if (!video) {
    return <p>Video not found.</p>;
  }

  // Destructure the video data
  const { title, channelName, description, dislike, like, videoLink, views } =
    video;

  return (
    <div className="flex flex-col lg:flex-row mt-20 pt-2 p-10 gap-8">
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
        <h3 className="text-2xl font-semibold">{title}</h3>
        <div className="flex justify-between flex-col md:flex-row items-center p-4 bg-white ">
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
            <div
              className="flex items-center space-x-1 cursor-pointer hover:text-red-600 transition-colors duration-200"
              onClick={handleLike}
            >
              <AiOutlineLike />
              <span className="text-gray-600 text-sm">{like}</span>
            </div>

            {/* Dislike Button */}
            <div
              className="flex items-center space-x-1 cursor-pointer hover:text-gray-500 transition-colors duration-200"
              onClick={handleDislike}
            >
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

        <div>
          {/* Comments Section */}
          <div className="w-full md:w-1/3">
            <div className="space-y-4 flex flex-col gap-1">
              <h3 className="text-xl font-semibold">Comments</h3>
              {/* Comment Input */}
              <div className="flex lg:w-200 gap-2">
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <button
                  className="bg-blue-600 text-white p-1 cursor-pointer rounded-md"
                  onClick={handleAddComment}
                >
                  Add Comment
                </button>
              </div>

              {/* Display Comments */}
              {comments.map((comment) => (
                <div
                  key={comment._id}
                  className="flex justify-between items-center p-4 bg-gray-100 rounded-md mb-2"
                >
                  <div className="flex flex-col">
                    <p className="font-semibold">{comment.user.name}</p>
                    <p>{comment.message}</p>
                  </div>

                  {/* Edit and Delete options */}
                  <div className="flex space-x-2">
                    <button
                      className="text-blue-500 cursor-pointer"
                      onClick={() =>
                        setCommentEdit({ id: comment._id, text: comment.message })
                      }
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 cursor-pointer"
                      onClick={() => handleDeleteComment(comment._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
              {commentEdit.id && (
                <div className="w-96 bg-white p-6 rounded-md">
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={commentEdit.text}
                    onChange={(e) =>
                      setCommentEdit({ ...commentEdit, text: e.target.value })
                    }
                  />
                  <div className="flex justify-end space-x-4 mt-4">
                    <button
                      className="bg-red-600 text-white p-2 cursor-pointer rounded-md"
                      onClick={() => setCommentEdit({ id: null, text: "" })}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-blue-600 text-white p-2 cursor-pointer rounded-md"
                      onClick={handleUpdateComment}
                    >
                      Save
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full md:w-1/3 "> 
        <div className="space-y-4 flex flex-col md:flex-row lg:flex-col gap-1  ">
          {videos.map((videoItem) => (
            <Link key={videoItem._id} to={`/watch/${videoItem._id}`}>
              <div className=" flex flex-col md:flex-col lg:flex-row space-x-4">
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
