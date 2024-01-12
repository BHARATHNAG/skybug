import mongoose from "mongoose";
const quizData = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  imageurl: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },

  no_of_questions: {
    type: String,
    required: true
  },
  passmark: {
    type: String,
    required: true
  },
  totalmark: {
    type: String,
    required: true
  },
  q1: {
    type: String,
    required: true
  },
  q1_options: {
    type: String,
    required: true
  },
  q1_correct_option: {
    type: String,
    required: true
  },
  q2: {
    type: String,
    required: true
  },
  q2_options: {
    type: String,
    required: true
  },
  q2_correct_option: {
    type: String,
    required: true
  },
  q3: {
    type: String,
    required: true
  },
  q3_options: {
    type: String,
    required: true
  },
  q3_correct_option: {
    type: String,
    required: true
  },
  q4: {
    type: String,
    required: true
  },
  q4_options: {
    type: String,
    required: true
  },
  q4_correct_option: {
    type: String,
    required: true
  },
  q5: {
    type: String,
    required: true
  },
  q5_options: {
    type: String,
    required: true
  },
  q5_correct_option: {
    type: String,
    required: true
  },
  creationdate: {
    type: String,
    required: true
  },
  createdby: {
    type: String,
    required: true
  }
});
const quizdata = mongoose.model("quizs", quizData);

export default quizdata;
