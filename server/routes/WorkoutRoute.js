const express = require('express')
const {
    getAllWorkout,
    createWorkout,
    removeWorkout,
    updateWorkout,
    getWorkout
} = require('../controllers/Workout')

const router = express.Router()

router.post("/", createWorkout)

router.get("/", getAllWorkout)

router.get("/:id", getWorkout)

router.delete("/:id", removeWorkout)

router.patch("/:id", updateWorkout)

module.exports = router