import express from "express"
import mongoose from "mongoose"
import { userRoutes } from "./Routes/users.routes.js";
import { videoRoutes } from "./Routes/video.routes.js";
import cors from "cors"


const app = new express()

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.json());


app.listen(3000, () => {
    console.log("server is running on port 3000")
})

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
