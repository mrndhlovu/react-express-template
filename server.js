const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const log = require("./utils.js/console-alert");

const app = express();

const authRoutes = require("./routes/auth");

dotenv.config();

const CONNECTION_URI = process.env.MONGODB_URI;
const DATA_BASE_URL = process.env.DB_URL;

// Connect to DB
mongoose.connect(
  CONNECTION_URI || DATA_BASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => log.success("Connected to DB")
);
// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("We are on the Home page");
});

// Route Middleware
app.use("/auth", authRoutes);

const PORT = 5000;
app.listen(PORT, () => log.success(`Server running on port ${PORT}`));
