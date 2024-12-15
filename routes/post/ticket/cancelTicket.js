import { Router } from "express";
import { Ticket } from "../../../models/ticket.js";

const router = Router();

router.post("/cancel", async (req, res) => {
    try {
        const id = req.body.id
        if (!id) {
            return res.status(206).send("Invalid Ticket")
        }

        const ticket = await Ticket.findById(id)
        if (!ticket) {
            return res.status(400).send("Invalid Ticket")
        }
        ticket.cancelled = true;
        ticket.expiresAt = new Date('2000-01-01');

        await ticket.save()
    } catch (err) {
        return res.status(500).send("Failed To Cancel Ticket")
    }

})

export { router };
