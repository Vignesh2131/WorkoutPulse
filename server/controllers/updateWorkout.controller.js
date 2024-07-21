const Workout = require("../models/workout.model")
const mongoose = require("mongoose")

const updateWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout" });
    }
    const { title, reps, setCount } = req.body;
    const workout = await Workout.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
    if (!workout) {
        return res.json({ message: "No workout is found with the ID" });
    }
    res.status(200).json({message:"Workout Updated",workout})
}

module.exports=updateWorkout