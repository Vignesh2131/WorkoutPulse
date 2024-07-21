const mongoose = require('mongoose');

const workOutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    reps: {
        type: Number,
        required:true
    },
    setCount: {
        type: Number,
        required:true,
    },
    load: {
        type: Number,
        required:true,
    },
    addedAt: {
        type: Date,
        default: Date.now,
        required:true,
    }
}, { timestamps: true })

const Workout = mongoose.model("Workout", workOutSchema);

module.exports = Workout