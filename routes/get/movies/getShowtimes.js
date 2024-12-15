import { Router } from "express";
import { getShowtimes } from "../../../utils/cinema.js"
const router = Router();

router.get("/showtimes", async (req, res) => {
    try {
        const { title, location, language, shortCountryCode } = req.body
        if (!title || !location || !language || !shortCountryCode) {
            return res.status(206).send("Missing Information")
        }
        let showtimes = getShowtimes(title, location, language, shortCountryCode)
               if (!showtimes) {
            return res.status(400).send("N/A")
        }
        return res.status(200).send(showtimes)
    } catch (err) {
        return res.status(500).send("Failed To Cancel Ticket")
    }




})

export { router };
