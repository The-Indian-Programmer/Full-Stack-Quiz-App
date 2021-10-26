const express = require("express");
const route = express.Router();

const questionSchema = require("../schema/questionSchema");

route.get("/getquestions", async (req, res) => {
  try {
    const data = await questionSchema.find();
    console.log("Hello");
    if (data) {
      res.status(200).json({ msg: "Data found", data });
    }
    res.status(422).json({ err: "Something went wrong" });
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
  res.json({ msg: "hello World" });
});

route.post("/addquestions", async (req, res) => {
  try {
    const { question, optionA, optionB, optionC, optionD, currectAns } =
      req.body;

    if (!question || !optionA || !optionB || !optionC || !optionD) {
      return res.status(422).json;
    }
    const isValid = await validateQuestion(req.body);
    if (!isValid) {
      return res
        .status(422)
        .json({ err: "Currect Ans not equal to any option" });
    }

    const newQuestion = new questionSchema({
      question,
      optionA,
      optionB,
      optionC,
      optionD,
      currectAns,
    });

    const questionSave = await newQuestion.save();
    if (questionSave) {
      return res
        .status(200)
        .json({ msg: "Questions Saved", question: newQuestion });
    }
    res.json({ err: "Something went wrong" });
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
});

const validateQuestion = (data) => {
  let msg = "";
  const { optionA, optionB, optionC, optionD, currectAns } = data;

  if (currectAns === optionA) {
    return (msg = "Equal to optionA");
  }
  if (currectAns === optionB) {
    return (msg = "Equal to optionB");
  }
  if (currectAns === optionC) {
    return (msg = "Equal to optionC");
  }
  if (currectAns === optionD) {
    return (msg = "Equal to optionD");
  }
  return msg;
};

module.exports = route;
