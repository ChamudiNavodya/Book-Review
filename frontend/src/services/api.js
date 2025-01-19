import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchReviews = async () => {
    const response = await axios.get(`${API_URL}/reviews`);
    return response.data;
};

export const getReview = async (id) => {
    const response = await axios.get(`${API_URL}/reviews/${id}`);
    return response.data;
};

export const fetchReview = async (id) => {
    const response = await axios.get(`${API_URL}/reviews/${id}`);
    if (response.status !== 200) {
        throw new Error('Failed to fetch review');
    }
    return response.data;
};


export const addReview = async (review) => {
    const response = await axios.post(`${API_URL}/reviews`, review);
    return response.data;
};

export const updateReview = async (id, updatedReview) => {
    const response = await axios.put(`${API_URL}/reviews/${id}`, updatedReview);
    return response.data;
};

export const deleteReview = async (id) => {
    await axios.delete(`${API_URL}/reviews/${id}`);
};
