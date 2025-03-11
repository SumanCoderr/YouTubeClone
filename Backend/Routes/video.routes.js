import { uploadVideo, getAllVideo,getVideoById, updatelike } from '../Controller/video.controller.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

export function videoRoutes(app) {
    app.post("/video", authMiddleware, uploadVideo);
    app.get("/allvideos",authMiddleware, getAllVideo);
    app.get("/video/:id", authMiddleware, getVideoById)
    app.patch("/video/:id", authMiddleware, updatelike )
}
