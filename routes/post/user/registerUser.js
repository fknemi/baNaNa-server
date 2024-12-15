import { Router } from "express";
import { addUser } from "../../../utils/user.js";
import { User } from "../../../models/user.js";
const router = Router();

router.post("/register", async (req, res) => {
console.log(req.body)

    if(!req.body){return res.status(206).send("Missing User Information")}
        if (!req.body.name) {
        return res.status(206).send("Name is Required");
    }
    if (!req.body.username) {
        return res.status(206).send("Username is Required");
    }
    if (!req.body.email) {
        return res.status(206).send("Email is Required");
    }
    if (
        !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            req.body.email
        )
    ) {
        return res.status(400).send("Invalid Email Address");
    }

    if (!req.body.gender) {
        return res.status(206).send("Gender is Required");
    }

    if (await User.findOne({ email: req.body.email })) {
        return res.status(400).send("Invalid User");
    }

    let avatar = `http://localhost:8080/get/avatar/${req.body.name.replace(" ", "").toLowerCase().trim()}${req.body.username.toLowerCase().trim()}.svg`
    addUser(req.body.name, req.body.username, req.body.email, req.body.gender, avatar);


    return res.send({ avatar: avatar });
})

export { router };
