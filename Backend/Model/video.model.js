import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    title:{
        type:String,
        required:true,
    },
    views:{
        type: Number,
        default:0
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    videoLink:{
        type:String,
        required:true,
    },
    thumbnail:{
        type:String,
        required:true,
    },
    channelName:{
        type:String,
        required:true,
    },
    like:{
        type:Number,
        default:0
    },
    dislike:{
        type:Number,
        default:0
    }
},{timestamps:true})

const Video = mongoose.model('video',videoSchema);

export default Video;



