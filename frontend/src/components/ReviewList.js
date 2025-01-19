import React, { useEffect, useState } from "react";
import { fetchReviews, deleteReview } from "../services/api";
import ReviewCard from "./ReviewCard";

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const loadReviews = async () => {
            const data = await fetchReviews();
            setReviews(data);
        };
        loadReviews();
    }, []);

    const handleDelete = async (id) => {
        await deleteReview(id);
        setReviews(reviews.filter((review) => review._id !== id));
    };

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {reviews.map((review) => (
                    <div className="col" key={review._id}>
                        <ReviewCard review={review} onDelete={handleDelete} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewList;
