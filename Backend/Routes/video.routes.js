import { uploadVideo, getAllVideo,getVideoById } from '../Controller/video.controller.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

export function videoRoutes(app) {
    app.post("/video", authMiddleware, uploadVideo);
    app.get("/allvideos", getAllVideo);
    app.get("/video/:id", authMiddleware, getVideoById)
}
