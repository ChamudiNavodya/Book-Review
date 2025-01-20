import React from "react";

const StarRating = ({ rating, onChange }) => {
    // Function to handle the click on a star
    const handleStarClick = (index) => {
        if (onChange) onChange(index + 1);  // Pass the new rating (index + 1) to the parent component
    };

    const handleMouseLeave = () => {
        setHoveredRating(null);  // Reset the hovered rating when the mouse leaves
    };

    const [hoveredRating, setHoveredRating] = React.useState(null);

    return (
        <div className="star-rating" style={{ display: "flex", cursor: "pointer" }} onMouseLeave={handleMouseLeave}>
            {[...Array(5)].map((_, index) => {
                // Check if the star should be filled (based on rating or hover state)
                const isFilled = (hoveredRating || rating) > index;
                return (
                    <span
                        key={index}
                        onClick={() => handleStarClick(index)}  // Set rating on click
                        style={{
                            color: isFilled ? "gold" : "gray",
                            fontSize: "24px",
                            transition: "color 0.2s",
                        }}
                    >
                        ★
                    </span>
                );
            })}
        </div>
    );
};

export default StarRating;
