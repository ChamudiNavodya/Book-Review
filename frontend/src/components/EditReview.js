import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchReview, updateReview } from "../services/api";  // Assuming these services are set up

const EditReview = () => {
    const { id } = useParams();  // Get the review ID from the URL
    const navigate = useNavigate();  // For redirecting
    const [formData, setFormData] = useState({
        bookTitle: "",
        author: "",
        rating: "",
        reviewText: "",
    });

    useEffect(() => {
        const loadReview = async () => {
            try {
                const review = await fetchReview(id);  // Fetch review by ID
                setFormData(review);
            } catch (error) {
                console.error("Error loading review:", error);
            }
        };
        loadReview();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateReview(id, formData);  // Update the review
            navigate("/");  // Redirect to the home page after submitting
        } catch (error) {
            console.error("Error updating review:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-4">
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
                <label htmlFor="rating" className="form-label">Rating (1-5)</label>
                <input
                    type="number"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    className="form-control"
                    id="rating"
                    placeholder="Rating (1-5)"
                    required
                    min="1"
                    max="5"
                />
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
            <button type="submit" className="btn btn-primary">Update Review</button>
        </form>
    );
};

export default EditReview;
