import { Router } from "express";

const router = Router();

router.get("/actors", async (req,res) => {
    const { title, year } = req.body
    if (!title) {
        return res.status(206).send("Missing Title")
    }
    const data = await getMovieDetails(title, year)
    if (!data) {
        return res.status(400).send(`${title} Not Found`)
    }
    return res.status(200).send(data.Actors);




})

export { router };
