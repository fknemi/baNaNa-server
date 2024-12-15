import { Router } from "express";
import { getComingSoon } from "../../../utils/movie.js";
const router = Router();

router.get("/coming-soon", async (req, res) => {
    try {
        const { location, language, shortCountryCode } = req.body
        if (!location || !language || !shortCountryCode) {
            return res.status(206).send("Missing Information")
        }
        let comingSoon = await getComingSoon(location, language, shortCountryCode)
        if (!comingSoon) {
            return res.status(400).send("N/A")
        }
        return res.status(200).send(comingSoon)
    } catch (err) {
        return res.status(500).send("Failed To Cancel Ticket")
    }




})

export { router };
