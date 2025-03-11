import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users', // Referencing user collection
      required: true
    },
    video: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'video', // Referencing video collection
      required: true
    },
    message: { 
      type: String, 
      required: true 
    }
  },
  { timestamps: true }
);

const Comments = mongoose.model("comment", commentSchema);

export default Comments;
