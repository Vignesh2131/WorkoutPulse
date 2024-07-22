const Workout = require("../models/workout.model");
const mongoose = require("mongoose");

const getWorkoutById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  const workout = await Workout.findById(id);
  if (!workout) return res.json({ message: "No workout is found with the ID" });
  res.status(200).json(workout);
};

module.exports = { getWorkoutById }