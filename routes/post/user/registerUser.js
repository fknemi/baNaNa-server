import { Router } from "express";

const router = Router();

router.post("/register", async (req, res) => {

return res.send("Register User")
})

export { router };
