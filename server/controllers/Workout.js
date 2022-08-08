const WorkoutModel = require('../models/WorkoutModel')
const mongoose = require('mongoose')

const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body
    try {
        const workout = await WorkoutModel.create({ title, reps, load })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getAllWorkout = async (req, res) => {
    try {
        const workouts = await WorkoutModel.find()
        res.status(200).json(workouts)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getWorkout = async (req, res) => {
    const { id } = req.params

    if (mongoose.isValidObjectId(id)) {
        const workout = await WorkoutModel.findById(id)
        if (!workout) {
            return res.status(404).json({ error: "No Such workout Found" })
        }
        res.status(200).json(workout)

    } else {
        res.status(400).json({ error: "id is not valid" })
    }
}

const updateWorkout = async (req, res) => {
    const { id } = req.params
    const { title, reps, load } = req.body
    try {
        const workout = await WorkoutModel.findOneAndUpdate({ _id: id }, { title, reps, load })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const removeWorkout = async (req, res) => {
    const { id } = req.params

    if (mongoose.isValidObjectId(id)) {
        const deletedWorkout = await WorkoutModel.findByIdAndDelete(id)
        if (!deletedWorkout) {
            return res.status(404).json({ error: "No Such workout Found" })
        }
        res.status(200).json(deletedWorkout)
    } else {
        res.status(400).json({ error: "id is not valid" })
    }
}

module.exports = { getAllWorkout, getWorkout, createWorkout, removeWorkout, updateWorkout }