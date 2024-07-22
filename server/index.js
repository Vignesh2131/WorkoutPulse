const express = require('express');
const cors = require("cors");
require('dotenv').config()
const workOutRoutes = require("./routes/workouts.route.js")
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT
app.use(cors());
app.use(express.json());

app.use("/api/workouts", workOutRoutes);

mongoose.connect(process.env.MONGODB_CONNECTION_URI)
    .then(() => {
        app.listen(port, () => {
          console.log(`Connected to DB & Listening on the port ${port}`);
        });
    })



