import React from "react";
import AddReview from "../components/AddReview";
import ReviewList from "../components/ReviewList";

const HomePage = () => {
    return (
        <div>
            <h1 className="text-center m-4">Book Reviews</h1>
            {/* <hr class="border border-primary border-3 opacity-75"></hr> */}
            <AddReview />
            <div className="mb-4"></div> {/* Add space */}
            {/* <hr class="border border-danger border-1 opacity-50"></hr> */}
            <ReviewList />
        </div>
    );
};

export default HomePage;
