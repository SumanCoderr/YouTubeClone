import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', 
        required: true
    },
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'video', 
        required: true
    },
    message: { 
        type: String, 
        required: true
    }
},{timestamps:true})

const Comments = mongoose.model('comment',commentSchema);

export default Comments