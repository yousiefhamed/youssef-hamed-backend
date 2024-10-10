const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Routes
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/contactForm", require("../routes/formRoutes"));
// app.use("/api/contact", require("../routes/contact"));
// app.use("/api/admin", require("../routes/admin"));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.error(err.message);
  });
