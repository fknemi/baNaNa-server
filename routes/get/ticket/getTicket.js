import { Router } from "express";
import { Ticket } from "../../../models/ticket.js";

const router = Router();

router.get("/ticket", async (req, res) => {

    try {
        const id = req.body.id
        if (!id) {
            return res.status(206).send("Invalid User")
        }

        const ticket = await Ticket.findById(id)
        console.log(ticket)
        if (!ticket) {
            return res.status(400).send("Invalid Ticket")
        }
        return ticket
    } catch (err) {
        return res.status(500).send("No Ticket Found")
    }



})

export { router };
