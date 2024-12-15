import { Router } from "express";
import { Offer } from "../../../models/offer.js";

const router = Router();

router.get("/promotions", async (req, res) => {
    try {
        // Aggregate offers grouped by category
        const offersByCategory = await Offer.aggregate([
            {
                $group: {
                    _id: "$category",
                    offers: { $push: "$$ROOT" },
                },
            },
        ]);

        return res.status(200).json({ success: true, data: offersByCategory });
    } catch (error) {
        console.error("Error fetching promotions:", error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
});

export { router };

