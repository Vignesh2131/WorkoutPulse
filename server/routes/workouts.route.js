const express = require("express")
const {postWorkOut} = require("../controllers/postworkout.controller")
const {getAllWorkouts} = require("../controllers/getWorkouts.controller")
const {getWorkoutById} = require("../controllers/getWorkoutById.controller")
const {deleteWorkout} = require("../controllers/deleteWorkout.controller")
const {updateWorkout} = require("../controllers/updateWorkout.controller")
const router = express.Router();

router.get('/workouts', getAllWorkouts)

router.get('/workouts/:id', getWorkoutById)

router.post('/workouts', postWorkOut)

router.delete('/workouts/:id',deleteWorkout)

router.patch('/workouts/:id', updateWorkout)


module.exports = router