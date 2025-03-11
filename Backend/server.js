import express from "express"
import mongoose, { connect } from "mongoose"
import { userRoutes } from "./Routes/users.routes.js";
import { videoRoutes } from "./Routes/video.routes.js";
import { commentRoutes } from "./Routes/comments.routes.js";
import cors from "cors"

// created server
const app = new express()

// connect with frontend
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.json());

// start server
app.listen(3000, () => {
    console.log("server is running on port 3000")
})

// connect with mongo db
mongoose.connect("mongodb://localhost:27017/YoutubeBackend")

const db = mongoose.connection

db.on("open", ()=>{
    console.log("Connection successful")
})

db.on("error", () => {
    console.log("Connection is not successful.")
})

userRoutes(app)
videoRoutes(app)
commentRoutes(app)
