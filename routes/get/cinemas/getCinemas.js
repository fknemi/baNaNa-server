import { Router } from "express";
import { Cinema } from "../../../models/cinema.js";
const router = Router();

router.get("/cinemas", async (req, res) => {
    try {
        const cinemas = await Cinema.find();
        if (!cinemas || cinemas.length === 0) {
            return res.status(404).send("No Cinemas Found");
        }

        return res.status(200).send(cinemas);
    } catch (err) {
        return res.status(500).send("An error occurred while fetching cinemas");
    }
});

export { router };

