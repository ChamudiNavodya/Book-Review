require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", reviewRoutes);

// Connect to DB and Start Server
const PORT = process.env.PORT || 5000;
connectDB();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
