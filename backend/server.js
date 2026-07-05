const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const errorHandler = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const projectRoutes = require("./routes/projectRoutes");

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(errorHandler);
// Routes
app.use("/api/projects", projectRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("Portfolio Backend API is Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});