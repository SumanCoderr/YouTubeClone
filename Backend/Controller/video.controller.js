import Video from "../Model/video.model.js";

export const uploadVideo = async (req, res) => {
  try {
    // Check if user is authenticated (ensuring req.user is set)
    if (!req.user || !req.user.id) {
      return res.status(403).json({ message: "User not authenticated" });
    }
    const { title, views, category, description, videoLink, thumbnail, channelName } = req.body;
    const userId = req.user.id; // Assumes user info is set by authMiddleware

    const videoUpload = new Video({
      user: userId,
      title,
      views,
      category,
      description,
      videoLink,
      thumbnail,
      channelName
    });

    await videoUpload.save();
    res.status(201).json({ success: true, videoUpload });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getAllVideo = async (req, res) => {
  try {
    const videos = await Video.find()
    res.status(201).json({ sucess: "true", videos: videos });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getVideoById = async (req, res) => {
  try {
    let { id } = req.params;
    const video = await Video.findById(id);
    res.status(201).json({ sucess: "true", video: video });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const updatelike = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(403).json({ message: "User not authenticated" });
    }

    const { likes } = req.body;
    const userId = req.user.id; // Assumes user info is set by authMiddleware

    // Add logic for updating the like in your database here
    // For example: await SomeModel.updateLike(userId, likes);

    res.status(200).json({ message: "Like updated successfully" });

  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
