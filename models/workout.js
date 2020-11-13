const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day:{
        type: Date,
        default: () => new Date()
    },
    exercises:[{
        type: {
            type: String,
            enum: ["resistance", "cardio"],
            required: "Username is Required"
          },
        
          name: {
            type: String,
            trim: true,
            required: "Name of the workout is Required",
          },
          duration: {
            type: Number,
            required : "Duration of the workout is Required",
            validate : {
              validator : Number.isInteger,
              message   : '{VALUE} is must be a integer value'
            }
          },
          distance: {
            type: Number,
            validate : {
              validator : Number.isInteger,
              message   : '{VALUE} is must be a integer value'
            }
          },
          weight: {
            type: Number,
            validate : {
              validator : Number.isInteger,
              message   : '{VALUE} is must be a integer value'
            }
          },
          reps: {
            type: Number,
            validate : {
              validator : Number.isInteger,
              message   : '{VALUE} is must be a integer value'
            }
          },
          set: {
            type: Number,
            validate : {
              validator : Number.isInteger,
              message   : '{VALUE} is must be a integer value'
            }
          },
    }], 
},
{
    toJSON: { virtuals: true }
});

workoutSchema.virtual("totalDuration").get(
    function() {
        return this.exercises.reduce((total, exercise) => {
            return total + exercise.duration;}
            ,0);
    }
);

const Workout = mongoose.model("workouts", workoutSchema);

module.exports = Workout;
