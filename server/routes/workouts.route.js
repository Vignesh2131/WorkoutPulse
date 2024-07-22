const express = require("express")
const {postWorkOut} = require("../controllers/postworkout.controller")
const {getAllWorkouts} = require("../controllers/getWorkouts.controller")
const {getWorkoutById} = require("../controllers/getWorkoutById.controller")
const {deleteWorkout} = require("../controllers/deleteWorkout.controller")
const {updateWorkout} = require("../controllers/updateWorkout.controller")
const router = express.Router();

router.get('/', getAllWorkouts)

router.get('/:id', getWorkoutById)

router.post('/', postWorkOut)

router.delete('/:id',deleteWorkout)

router.patch('/:id', updateWorkout)


module.exports = router