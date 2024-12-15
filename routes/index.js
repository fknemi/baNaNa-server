import { Router } from "express";
import {router as getUserProfile} from "./get/user/getUserProfile.js"
import {router as deleteUser} from "./delete/user/deleteUser.js"
import {router as updateUser} from "./post/user/updateUser.js"


const getRouter = Router()
const deleteRouter = Router()
const postRouter = Router()

getRouter.use("/user", getUserProfile)
deleteRouter.use("/user", deleteUser)
postRouter.use("/user", updateUser)


export {
    getRouter,
    deleteRouter,
    postRouter
}
