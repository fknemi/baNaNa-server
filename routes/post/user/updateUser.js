import { Router } from "express";
import { User } from "../../../models/user.js";
const router = Router();

router.post("/update", async (req, res) => {
    try {
        const { id, username, gender, name } = req.body
        if (!id) {
            return res.status(206).send("Invalid User")
        }
        const user = await User.findById(id);
        if (!user) {
            return res.status(206).send("Invalid User")
        }
        if (username) {
            user.username = username
        }
        if (gender) {
            user.gender = gender
        }
        if (name) {
            user.name = name
        }

        user.lastUpdatedAt = new Date().getTime()
        await user.save()

    } catch (err) {
        return res.status(500).send("Unable To Update User")
    }



})

export { router };
