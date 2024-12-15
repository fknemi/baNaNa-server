import { Router } from "express";
import { User } from "../../../models/user.js";

const router = Router();

router.get("/tickets", async (req, res) => {
    try {
        const id = req.body.id
        if (!id) {
            return res.status(206).send("Invalid User")
        }

        const user = await User.findById(id)
        console.log(user.tickets)
        if (!user.tickets) {
            return res.status(400).send("Invalid Ticket")
        }

        return user.tickets
    } catch (err) {
        return res.status(500).send("No Tickets Found")
    }



})

export { router };
