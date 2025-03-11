import mongoose from "mongoose";
import Comments from "../Model/comments.model.js";
import Video from "../Model/video.model.js"; // Assuming you have a Video model
// import User from "../Model/user.model.js";  // Ensure User model is imported
import User from "../Model/users.model.js";


export const addComment = async (req, res) => {
  try {
    const { videoId } = req.params; // Get the video ID from the URL params
    const { message } = req.body; // Get the comment message from the body

    // Ensure the user is authenticated and extract user ID
    const userId = req.user.id; // req.user should have the user ID

    // Validate if videoId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(videoId)) {
      return res.status(400).json({ error: "Invalid video ID format" });
    }

    // Check if video exists in the database
    const video = await Video.findById(videoId);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    // Create the new comment
    const newComment = new Comments({
      user: userId, // Use the user ID from the decoded JWT
      video: videoId,
      message
    });

    // Save the comment to the database
    await newComment.save();

    res.status(201).json({ message: "Comment added successfully", comment: newComment });
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ error: "Server error" });
  }
};



export const getCommentByVideoId = async (req, res) => {
    try {
      const videoId = req.params.videoId;
  
      const comments = await Comments.find({ video: videoId })
        .populate('user', 'name email')  // Populate the user field (example: get only username and email)
        .populate('video', 'title') // Populate the video field (optional)
        // .exec();
  
      res.status(200).json({ comments });
    } catch (error) {
      console.error('Error fetching comments:', error);
      res.status(500).json({ error: 'Server error' });
    }
  };


// Edit an existing comment
export const editComment = async (req, res) => {
    try {
      const { commentId } = req.params;
      const { message } = req.body;
  
      // Find the comment by ID
      const comment = await Comments.findById(commentId);
      if (!comment) {
        return res.status(404).json({ message: "Comment not found" });
      }
  
      // Check if the user is the owner of the comment
      if (comment.user.toString() !== req.user.id) {
        return res.status(403).json({ message: "You can only edit your own comments" });
      }
  
      // Update the message
      comment.message = message;
      await comment.save();
  
      res.status(200).json({ message: "Comment updated successfully", comment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  };

export const deleteComment = async (req, res) => {
    try {
      const { commentId } = req.params;
  
      // Find and delete the comment by ID
      const comment = await Comments.findByIdAndDelete(commentId);
      if (!comment) {
        return res.status(404).json({ message: "Comment not found" });
      }
  
      // Check if the user is the owner of the comment
      if (comment.user.toString() !== req.user.id) {
        return res.status(403).json({ message: "You can only delete your own comments" });
      }
  
      res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  };