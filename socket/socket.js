import { User } from "../models/user/User";
import { findUserInDB, usersDB } from "../main";

export const onConnect = async (socket) => {
    let userId = (socket & { userId: string }).userId;

    const user = await User.findById(userId);
    let getUser;
    try {
        getUser = await findUserInDB(user.username);
    } catch (err) {
        console.log(err);
    }
    if (getUser) {
        //   socket.emit("notifications", getUser.data);
        socket.on("status", (status) => {
            if (parseInt(status) === 200) {
                //   usersDB.findAndRemove({
                //      username: user.username,
                // });
            }
        });
    }
    console.log("User Connected");
    socketEvent_ownerAuth("DELETE_REPORT", onDeleteReport, user._id, socket);
    socketEvent_ownerAuth("DELETE_LOG", onDeleteLog, user._id, socket);
    socket.on("disconnect", () => console.log("user disconnected"));
};


