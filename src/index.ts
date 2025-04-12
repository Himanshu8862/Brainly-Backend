import express from "express"
import { connectToDatabase } from "./db";
import * as dotenv from "dotenv";
import { userController } from "./controller/user";

const app = express();
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT;


app.post("/api/v1/signup", userController);

app.post("/api/v1/signin", (req, res) => {
    res.json({
        msg: "signin here"
    })
})

app.post("/api/v1/content", (req, res) => {
    res.json({
        msg: "post content"
    })
})

app.get("/api/v1/content", (req, res) => {
    res.json({
        msg: "get content"
    })
})

app.delete("/api/v1/content", (req, res) => {
    res.json({
        msg: "delete content"
    })
})

app.post("/api/v1/brain/share", (req, res) => {
    res.json({
        msg: "share brain"
    })
})

app.get("/api/v1/brain/:shareLink", (req, res) => {
    res.json({
        msg: "get brain link"
    })
})


connectToDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started at http://localhost:${PORT}`);
    });
}).catch((error: Error) => {
    console.log("Database connecction failed", error);
    process.exit();
});