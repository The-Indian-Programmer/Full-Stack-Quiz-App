const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    optionA: {
      type: String,
      required: true,
    },

    optionB: {
      type: String,
      required: true,
    },

    optionC: {
      type: String,
      required: true,
    },
    optionD: {
      type: String,
      required: true,
    },
    currectAns: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const questionSchema = mongoose.model("allquestions", schema);
module.exports = questionSchema;
