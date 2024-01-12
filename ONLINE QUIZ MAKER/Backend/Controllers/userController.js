import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import signup from "../Models/signup.js";
import quiz from "../Models/quiz.js";
import quizdata from "../Models/quiz.js";
const saltRounds = 10;

const verifyJWT = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res.send("we need a token, please give us next time");
  } else {
    jwt.verify(token, "jwt-Secret-key", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "U failed to authenticated" });
      } else {
        next();
      }
    });
  }
};

const createAccount = asyncHandler(async (req, res) => {
  const { username, email, password, address, mobile } = req.body;
  console.log(req.body);
  bcrypt.hash(password, saltRounds, async (err, hash) => {
    if (err) {
      res.send(err);
    }
    const userdata = new signup({
      name: username,
      email: email,
      password: hash,
      address: address,
      mobile: mobile
    });
    await userdata.save();
    res.json({
      status: 200,
      message: "Account Created Successfully"
    });
  });
});

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.query;
  console.log(req.query);
  const user = await signup.find({ email: email });
  console.log(user);
  if (user != "") {
    bcrypt.compare(password, user[0].password, (error, response) => {
      if (response) {
        const id = user[0]._id;
        const token = jwt.sign({ id }, "jwt-Secret-key", {
          expiresIn: "1d" //10 - 10 sec
        });
        res.cookie("token", token);
        return res.json({ auth: true, token: token, result: user });
      } else {
        return res.send({
          message: "Wrong username/password combination!"
        });
      }
    });
  } else {
    res.send({ auth: false, message: "no User exist." });
  }
});

const addQuiz = asyncHandler(async (req, res) => {
  const {
    name,
    imageurl,
    description,
    no_of_questions,
    passmark,
    totalmark,
    q1,
    q1_options,
    q1_correct_option,
    q2,
    q2_options,
    q2_correct_option,
    q3,
    q3_options,
    q3_correct_option,
    q4,
    q4_options,
    q4_correct_option,
    q5,
    q5_options,
    q5_correct_option,
    creationdate,
    createdby
  } = req.body;

  const quizdetails = new quizdata({
    name: name,
    imageurl: imageurl,
    description: description,
    no_of_questions: no_of_questions,
    passmark: passmark,
    totalmark: totalmark,
    q1: q1,
    q1_options: q1_options,
    q1_correct_option: q1_correct_option,
    q2: q2,
    q2_options: q2_options,
    q2_correct_option: q2_correct_option,
    q3: q3,
    q3_options: q3_options,
    q3_correct_option: q3_correct_option,
    q4: q4,
    q4_options: q4_options,
    q4_correct_option: q4_correct_option,
    q5: q5,
    q5_options: q5_options,
    q5_correct_option: q5_correct_option,
    creationdate: creationdate,
    createdby: createdby
  });
  await quizdetails.save();
  res.json({
    status: 200,
    message: "Quiz Added Successfully"
  });
});

const getAllQuizs = asyncHandler(async (req, res) => {
  const quizData = await quiz.find({});
  res.status(200).send(quizData);
});

const getMyQuizs = asyncHandler(async (req, res) => {
  const { email } = req.query;
  const quizData = await quiz.find({ createdby: email });
  res.status(200).send(quizData);
});

const updateQuiz = asyncHandler(async (req, res) => {
  const {
    id,
    name,
    imageurl,
    description,
    no_of_questions,
    passmark,
    totalmark,
    q1,
    q1_options,
    q1_correct_option,
    q2,
    q2_options,
    q2_correct_option,
    q3,
    q3_options,
    q3_correct_option,
    q4,
    q4_options,
    q4_correct_option,
    q5,
    q5_options,
    q5_correct_option,
    creationdate,
    createdby
  } = req.body;
  await quiz.updateOne(
    { _id: id },
    {
      $set: {
        name: name,
        imageurl: imageurl,
        description: description,
        no_of_questions: no_of_questions,
        passmark: passmark,
        totalmark: totalmark,
        q1: q1,
        q1_options: q1_options,
        q1_correct_option: q1_correct_option,
        q2: q2,
        q2_options: q2_options,
        q2_correct_option: q2_correct_option,
        q3: q3,
        q3_options: q3_options,
        q3_correct_option: q3_correct_option,
        q4: q4,
        q4_options: q4_options,
        q4_correct_option: q4_correct_option,
        q5: q5,
        q5_options: q5_options,
        q5_correct_option: q5_correct_option,
        creationdate: creationdate,
        createdby: createdby
      }
    }
  );
  res.json({ status: 200, message: "Quiz Updated Successfully" });
});

const deletequiz = asyncHandler(async (req, res) => {
  const { id } = req.query;
  console.log(req.query);
  await quiz.deleteOne({ _id: id });
  res.json({ status: 200 });
});

export {
  createAccount,
  verifyJWT,
  userLogin,
  addQuiz,
  getAllQuizs,
  getMyQuizs,
  updateQuiz,
  deletequiz
};
