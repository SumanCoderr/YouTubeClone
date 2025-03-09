import Video from "../Model/video.model.js";

export const uploadVideo = async (req, res) => {
    try {
        // Check if user is authenticated (ensuring req.user is set)
        if (!req.user || !req.user.id) {
            return res.status(403).json({ message: "User not authenticated" });
        }
        const { title, views, description, videoLink, thumbnail } = req.body;
        const userId = req.user.id; // Assumes user info is set by authMiddleware


        const videoUpload = new Video({
            user: userId,
            title,
            views,
            description,
            videoLink,
            thumbnail
        });

        await videoUpload.save();
        res.status(201).json({ success: true, videoUpload });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};




export const getAllVideo = async(req,res)=>{
    try{
        const videos = await Video.find().populate('user','fullName email password');
        res.status(201).json({ sucess: "true", "videos": videos });
    }catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}


export const getVideoById = async (req,res)=>{
    try{
        let {id} = req.params;
        const video = await Video.findById(id)
        res.status(201).json({ sucess: "true", "video": video });
    }catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}

// exports.getAllVideoByUserID = async(req,res)=>{
//     try{
//         let {userId} = req.params;
//         const video = await Video.find({user:userId}).populate('user','channelName profilePic userName createdAt about');
//         res.status(201).json({ sucess: "true", "video": video });

//     }catch (error){
//         res.status(500).json({ error: 'Server error' });
//     }
// }
 