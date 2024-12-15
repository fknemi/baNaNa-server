import { Router } from "express";

// User
import { router as getUserProfile } from "./get/user/getUserProfile.js"
import { router as deleteUser } from "./delete/user/deleteUser.js"
import { router as updateUser } from "./post/user/updateUser.js"
import { router as registerUser } from "./post/user/registerUser.js"

// Cinemas
import { router as getCinemas } from "./get/cinemas/getCinemas.js"
import { router as getFoodAndDrinks } from "./get/cinemas/getFoodAndDrinks.js"
import { router as getSeatLayout } from "./get/cinemas/getSeatLayout.js"

// Movies
import { router as getCast } from "./get/movies/getCast.js"
import { router as getMovie } from "./get/movies/getMovie.js"
import { router as getActors } from "./get/movies/getActors.js"
import { router as getShowtimes } from "./get/movies/getShowtimes.js"
import { router as getComingSoon } from "./get/movies/getComingSoon.js"
import { router as getPromotions } from "./get/movies/getPromotions.js"
import { router as getNowPlaying } from "./get/movies/getNowPlaying.js"

// Ticket
import { router as getTicket } from "./get/ticket/getTicket.js"
import { router as getTickets } from "./get/ticket/getTickets.js"
import { router as cancelTicket } from "./post/ticket/cancelTicket.js"



const getRouter = Router()
const postRouter = Router()
const deleteRouter = Router()
const updateRouter = Router()

// User
getRouter.use("/user", getUserProfile)
deleteRouter.use("/user", deleteUser)
updateRouter.use("/user", updateUser)
postRouter.use("/user", registerUser)

// Cinemas

getRouter.use("/cinemas", getCinemas)
getRouter.use("/cinemas", getFoodAndDrinks)
getRouter.use("/cinemas", getSeatLayout)

// Ticket


getRouter.use("/ticket", getTicket)
getRouter.use("/ticket", getTickets)
updateRouter.use("/ticket", cancelTicket)
// Movies


getRouter.use("/movies", getCast)
getRouter.use("/movies", getMovie)
getRouter.use("/movies", getActors)
getRouter.use("/movies", getShowtimes)
getRouter.use("/movies", getComingSoon)
getRouter.use("/movies", getPromotions)
getRouter.use("/movies", getNowPlaying)


export {
    getRouter,
    deleteRouter,
    postRouter,
    updateRouter
}
