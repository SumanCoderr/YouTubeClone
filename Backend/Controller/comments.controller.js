// const Comment = require('../Modals/comment');
import Comments from "../Model/comments.model";



export const addComment = async(req,res)=>{
    try{
        // please watch the video for the code

    } catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}


export const getCommentByVideoId = async(req,res)=>{
    try{
         // please watch the video for the code

    } catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}
