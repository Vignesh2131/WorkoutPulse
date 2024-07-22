const Workout = require("../models/workout.model");

const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  if (!workouts) return res.json({ message: "No workouts are found" });
  res.status(200).json(workouts);
};

module.exports = {getAllWorkouts}
