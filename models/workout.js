const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
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
    required : true,
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

});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
