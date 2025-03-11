import { addComment, getCommentByVideoId, editComment, deleteComment } from "../Controller/comments.controller.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

export function commentRoutes(app) {
    app.post("/add/:videoId", authMiddleware, addComment); // Use POST for adding comments
    app.get("/comments/:videoId", authMiddleware, getCommentByVideoId); // Use GET for fetching comments
  app.put("/update/:commentId", authMiddleware, editComment); // Use PUT for updating comments
  app.delete("/delete/:commentId", authMiddleware, deleteComment); // Use DELETE for deleting comments
}
