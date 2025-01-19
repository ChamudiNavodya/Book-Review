const Review = require("../models/Review");

// Get all reviews
exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Fetch single review by ID
exports.getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) {
            return res.status(404).json({ error: "Review not found" });
        }
        res.status(200).json(review);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new review
exports.createReview = async (req, res) => {
    try {
        const { bookTitle, author, rating, reviewText } = req.body;
        const newReview = new Review({ bookTitle, author, rating, reviewText });
        await newReview.save();
        res.status(201).json(newReview);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update an existing review
exports.updateReview = async (req, res) => {
    try {
        const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedReview);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a review
exports.deleteReview = async (req, res) => {
    try {
        await Review.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
