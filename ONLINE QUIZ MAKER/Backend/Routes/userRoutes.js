import express from "express";
import {
  addQuiz,
  createAccount,
  deletequiz,
  getAllQuizs,
  getMyQuizs,
  updateQuiz,
  userLogin
} from "../Controllers/userController.js";
const router = express.Router();
router.post("/createaccount", createAccount);
router.post("/addquiz", addQuiz);
router.get("/userlogin", userLogin);
router.get("/getallquizs", getAllQuizs);
router.get("/getmyquizs", getMyQuizs);
router.put("/editquiz", updateQuiz);
router.delete("/deletequiz", deletequiz);

export default router;
