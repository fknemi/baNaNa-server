import "./utils/env.js"
import express from "express"
import "express-openid-connect"
import { jwtCheck } from "./utils/auth.js"
import cors from "cors";
import * as http from "http";
import { Server, Socket } from "socket.io";
import { client } from "./utils/db.js"
import mongoose from "mongoose";
import { getNavatarMiddleware } from "navatar"
import { getRouter, deleteRouter, postRouter } from "./routes/index.js"
import { pushBeverages } from "./utils/sample.js";
const app = express();


//app.use("/get/user", jwtCheck);
app.use(express.json())
app.use("/get", getRouter)
app.use("/delete", deleteRouter)
app.use("/post", postRouter)
app.use("/get/avatar/:key.svg", getNavatarMiddleware());

app.get('/authorized', function(req, res) {
    res.send('Secured Resource');
});
const server = http.createServer(app);

export const io = new Server(server, {
    cors: {
        origin: "*",
    },
});


const startServer = async () => {
    const PORT = process.env.PORT || 8080;
    await mongoose
        .connect(process.env.MONGODB_URI)
        .then(() => console.log("DATABASE Connected Successfully..."))
        .catch((err) => {
            throw new Error(err);
        });

    //io.use(socket_checkUser);
    //io.on("connection", onConnect);











    server.listen(PORT, () => {
        console.log(`Server is Listening on http://localhost:${PORT}...`);
    });
};
startServer()
