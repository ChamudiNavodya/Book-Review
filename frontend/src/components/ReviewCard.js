import React from "react";
import { Link } from "react-router-dom";
import BookCover from "../assets/images/cover.png";

const ReviewCard = ({ review, onDelete }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={BookCover} className="card-img-top" alt="Book Cover" />
            <div className="card-body">
                <h5 className="card-title">{review.bookTitle}</h5>
                <p>Author: {review.author}</p>
                <p>Rating: {review.rating} / 5</p>
                <p className="card-text">{review.reviewText}</p>
                <div className="d-grid gap-2">
                    <Link to={`/edit/${review._id}`} className="btn btn-primary">
                        Update
                    </Link>
                    <button
                        onClick={() => onDelete(review._id)}
                        className="btn btn-danger"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
