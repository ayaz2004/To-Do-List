const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5500;

app.use(cors());

const ItemRoute = require("./routers/route");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/", ItemRoute);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
