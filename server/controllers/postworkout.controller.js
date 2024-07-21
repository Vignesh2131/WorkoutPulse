const Workout = require('../models/workout.model')
const postWorkOut = async(req,res) => {
    const { title, load, reps,setCount } = req.body;
    try {
        const workout = await Workout.create({ title, load, reps,setCount });
        res.status(200).json({workout})

    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

module.exports = postWorkOut