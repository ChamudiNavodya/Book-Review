# Book Review Web Application

This is a web application designed for users to post book reviews. The backend is built using **Node.js** with **Express** and the frontend is developed using **React**.

## Features

- **Book Reviews**: Users can submit reviews for books they have read, including ratings and comments.
- **Review Display**: View reviews for each book.
- **Rating System**: Users can rate books on a scale of 1 to 5 stars.

## Technologies Used

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express, MongoDB
- **Styling**: bootstrap
- **Database**: MongoDB

## Installation

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/book-review-app.git
   ```

2. Navigate to the backend directory:

   ```bash
   cd backend
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Set up your environment variables in a `.env` file:

   - `MONGO_URI`: MongoDB connection string

5. Start the backend server:
   ```bash
   npm run start
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Start the frontend server:
   ```bash
   npm start
   ```

## Usage

1. Access the frontend by navigating to `http://localhost:3000`.
2. Users can submit reviews, and view reviews for books.

## API Endpoints

### Reviews

- **GET /api/reviews**: Get all the available book reviews.
- **GET /api/reviews/:bookId**: Get reviews for a specific book.
- **POST /api/reviews**: Submit a new review for a book.
- **PUT /api/reviews/:bookId**: Update an existing review.
- **DELETE /api/reviews/:bookId**: Delete a review.

## Contributing

Feel free to fork the repository and submit pull requests for improvements. If you find any bugs or have suggestions, please open an issue.
