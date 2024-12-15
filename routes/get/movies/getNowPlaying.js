import { Router } from "express";
import { getNowPlaying } from "../../../utils/movie";
const router = Router();

router.get("/now-playing", async (req, res) => {

    try {
        const { location, language, shortCountryCode } = req.body
        if (!location || !language || !shortCountryCode) {
            return res.status(206).send("Missing Information")
        }
        let nowPlaying = getNowPlaying(location, language, shortCountryCode)
        if (!nowPlaying) {
            return res.status(400).send("N/A")
        }
        return res.status(200).send(nowPlaying)
    } catch (err) {
        return res.status(500).send("Failed To Cancel Ticket")
    }



})

export { router };
