const Workout = require('../models/workout.model')
const postWorkOut = async(req,res) => {
    const { title, load, reps, setCount } = req.body;
    let emptyFields = [];
    if (!title) emptyFields.push('title')
    if (!load) emptyFields.push('load')
    if (!reps) emptyFields.push('reps')
    if (!setCount) emptyFields.push('setCount')
    if (emptyFields.length > 0) {
        return res.status(400).json({error:'Please fill in all the fields',emptyFields})
    }
    try {
        const workout = await Workout.create({ title, load, reps,setCount });
        res.status(200).json({workout})

    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

module.exports = {postWorkOut}