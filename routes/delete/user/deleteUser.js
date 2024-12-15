import { Router } from "express";
import { User } from "../../../models/user.js";
const router = Router();

router.delete("/delete", async (req, res) => {
    try {
        const { id } = req.body;
        if (!id) {
            return res.status(400).send("Invalid User");
        }
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).send("User Not Found");
        }

        await user.deleteOne();
        return res.status(200).send("User Deleted Successfully");
    } catch (err) {
        return res.status(500).send("Unable To Delete User");
    }
});

export { router };

