const express = require("express");
const {
    getAllReviews,
    createReview,
    updateReview,
    deleteReview,
    getReviewById,
} = require("../controllers/reviewController");

const router = express.Router();

router.get("/reviews", getAllReviews);
router.get("/reviews/:id", getReviewById);
router.post("/reviews", createReview);
router.put("/reviews/:id", updateReview);
router.delete("/reviews/:id", deleteReview);

module.exports = router;
