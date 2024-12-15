import { Router } from "express";
import { getShowtimes } from "../../../utils/cinema.js"
const router = Router();

router.get("/showtimes", async (req, res) => {
    try {
        const { title, location, language, shortCountryCode } = req.query
        if (!title || !location || !language || !shortCountryCode) {
            return res.status(206).send("Missing Information")
        }
        let showTimes = getShowtimes(title, location, language, shortCountryCode)
               if (!showTimes) {
            return res.status(400).send("N/A")
        }
        return res.status(200).send(showTimes)
    } catch (err) {
        return res.status(500).send("Failed To Cancel Ticket")
    }




})

export { router };
