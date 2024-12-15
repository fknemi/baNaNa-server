import { Router } from "express";
import { Beverage } from "../../../models/beverage.js";
import { Popcorn } from "../../../models/popcorn.js";
import { Combo } from "../../../models/combo.js";
import { Snack } from "../../../models/snack.js";

const router = Router();

router.get("/food-and-drinks", async (req, res) => {
    try {
        const popcorn = await Popcorn.find();
        const combo = await Combo.find();
        const beverage = await Beverage.find();
        const snack = await Snack.find();

        return res.status(200).send({
            popcorn,
            combo,
            beverage,
            snack
        });
    } catch (err) {
        return res.status(500).send("An error occurred while fetching food and drinks");
    }
});

export { router };

