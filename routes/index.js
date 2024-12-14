import { Router } from "express";
import {router as getUserProfile} from "./get/getUserProfile.js"
import {router as deleteUser} from "./delete/deleteUser.js"
import {router as updateUser} from "./post/updateUser.js"


const getRouter = router()
const deleteRouter = router()
const postRouter = router()

getRouter.use("/user", getUserProfile)
deleteRouter.use("/user", deleteUser)
postRouter.use("/user", updateUser)


export {
    getRouter,
    deleteRouter,
    postRouter
}