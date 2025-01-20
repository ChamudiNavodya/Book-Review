import React, { useState } from "react";
import { addReview } from "../services/api";

const StarRating = ({ rating, onChange }) => {
    const handleStarClick = (index) => {
        onChange(index + 1);  // Setting the rating based on the star clicked
    };

    return (
        <div>
            {[...Array(5)].map((_, index) => (
                <span
                    key={index}
                    onClick={() => handleStarClick(index)}
                    style={{
                        cursor: "pointer",
                        color: index < rating ? "gold" : "gray",
                        fontSize: "24px",
                    }}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

const AddReview = () => {
    const [formData, setFormData] = useState({
        bookTitle: "",
        author: "",
        rating: 0,  // Rating is now a number instead of a string
        reviewText: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRatingChange = (rating) => {
        setFormData({ ...formData, rating });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addReview(formData);
        setFormData({ bookTitle: "", author: "", rating: 0, reviewText: "" });
    };

    return (
        <div className="container mt-4">
            <form onSubmit={handleSubmit} className="row">
                <div className="col-md-6"> {/* Set width to 6 columns (50% on medium screens) */}
                    <div className="mb-3">
                        <label htmlFor="bookTitle" className="form-label">Book Title</label>
                        <input
                            type="text"
                            name="bookTitle"
                            value={formData.bookTitle}
                            onChange={handleChange}
                            className="form-control"
                            id="bookTitle"
                            placeholder="Book Title"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="author" className="form-label">Author</label>
                        <input
                            type="text"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            className="form-control"
                            id="author"
                            placeholder="Author"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="rating" className="form-label">Rating</label>
                        <StarRating rating={formData.rating} onChange={handleRatingChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="reviewText" className="form-label">Review</label>
                        <textarea
                            name="reviewText"
                            value={formData.reviewText}
                            onChange={handleChange}
                            className="form-control"
                            id="reviewText"
                            placeholder="Write your review..."
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-20">Add Review</button>
                </div>
            </form>
        </div>
    );
};

export default AddReview;
