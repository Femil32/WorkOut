require('dotenv').config()

const express = require('express')
const mongoose = require("mongoose")
const WorkoutRoutes = require('./routes/WorkoutRoute')

// express app
const app = express();
const cors = require('cors');


// middelwares
app.use(cors({
    origin: '*'
}));
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// Routes
app.use("/api/workouts", WorkoutRoutes)

mongoose.connect(process.env.DB_URI).then((req, res) => {
    app.listen(process.env.PORT, (req, res) => {
        console.log("Server is running");
    })
}).catch((error) => {
    console.log(error.message);
})

