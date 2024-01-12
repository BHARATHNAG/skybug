import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserappBar from "../Navbar/User";
import { useDispatch, useSelector } from "react-redux";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { getAnswerData } from "../../Reducers/Answer";
import { useNavigate } from "react-router-dom";

const Question = () => {
  const quiz = useSelector(state => state.quiz.value);
  const answerdata = useSelector(state => state.answer.value);
  const [question, setquestion] = useState(quiz.q1);
  const dispatch = useDispatch();
  const [count, setcount] = useState(0);
  const [answer, setanswer] = useState(answerdata.a + count);
  const [options, setoptions] = useState(quiz.q1_options.split(","));
  const navigate = useNavigate();
  useEffect(
    () => {
      if (count == 0) {
        if (answerdata.a1 == "") {
          setanswer("");
        } else {
          setanswer(answerdata.a1);
        }
        setquestion(quiz.q1);
        setoptions(quiz.q1_options.split(","));
      } else if (count == 1) {
        if (answerdata.a2 == "") {
          setanswer("");
        } else {
          setanswer(answerdata.a2);
        }
        setquestion(quiz.q2);
        setoptions(quiz.q2_options.split(","));
      } else if (count == 2) {
        if (answerdata.a3 == "") {
          setanswer("");
        } else {
          setanswer(answerdata.a3);
        }
        setquestion(quiz.q3);
        setoptions(quiz.q3_options.split(","));
      } else if (count == 3) {
        if (answerdata.a4 == "") {
          setanswer("");
        } else {
          setanswer(answerdata.a4);
        }
        setquestion(quiz.q4);
        setoptions(quiz.q4_options.split(","));
      } else if (count == 4) {
        if (answerdata.a5 == "") {
          setanswer("");
        } else {
          setanswer(answerdata.a5);
        }
        setquestion(quiz.q5);
        setoptions(quiz.q5_options.split(","));
      }
    },
    [count]
  );

  return (
    <Box>
      <UserappBar />
      <Box
        sx={{
          width: { lg: "70%", md: "70%", sm: "70%", xs: "100%" },
          m: "auto",
          mt: 10
        }}
      >
        <Paper elevation={1} sx={{ p: 3 }}>
          <Typography variant="h6">
            {count + 1}. {question}
          </Typography>
          <FormControl sx={{ mt: 3 }}>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={answer}
              onChange={e => setanswer(e.target.value)}
            >
              {options.map(e => {
                return (
                  <FormControlLabel value={e} control={<Radio />} label={e} />
                );
              })}
            </RadioGroup>
          </FormControl>
          <Box sx={{ display: "flex", justifyContent: "end", gap: "10px" }}>
            {count > 0
              ? <Button
                  variant="contained"
                  onClick={() => {
                    setcount(count => count - 1);

                    if (count == 0) {
                      dispatch(
                        getAnswerData({
                          q1: quiz.q1,
                          a1: answer,
                          c1: quiz.q1_correct_option,
                          q2: answerdata.q2,
                          a2: answerdata.a2,
                          c2: answerdata.c2,
                          q3: answerdata.q3,
                          a3: answerdata.a3,
                          c3: answerdata.c3,
                          q4: answerdata.q4,
                          a4: answerdata.a4,
                          c4: answerdata.c4,
                          q5: answerdata.q5,
                          a5: answerdata.a5,
                          c5: answerdata.c5
                        })
                      );
                    } else if (count == 1) {
                      dispatch(
                        getAnswerData({
                          q1: answerdata.q1,
                          a1: answerdata.a1,
                          c1: answerdata.c1,
                          q2: quiz.q2,
                          a2: answer,
                          c2: quiz.q2_correct_option,
                          q3: answerdata.q3,
                          a3: answerdata.a3,
                          c3: answerdata.c3,
                          q4: answerdata.q4,
                          a4: answerdata.a4,
                          c4: answerdata.c4,
                          q5: answerdata.q5,
                          a5: answerdata.a5,
                          c5: answerdata.c5
                        })
                      );
                    } else if (count == 2) {
                      dispatch(
                        getAnswerData({
                          q1: answerdata.q1,
                          a1: answerdata.a1,
                          c1: answerdata.c1,
                          q2: answerdata.q2,
                          a2: answerdata.a2,
                          c2: answerdata.c2,
                          q3: quiz.q3,
                          a3: answer,
                          c3: quiz.q3_correct_option,
                          q4: answerdata.q4,
                          a4: answerdata.a4,
                          c4: answerdata.c4,
                          q5: answerdata.q5,
                          a5: answerdata.a5,
                          c5: answerdata.c5
                        })
                      );
                    } else if (count == 3) {
                      dispatch(
                        getAnswerData({
                          q1: answerdata.q1,
                          a1: answerdata.a1,
                          c1: answerdata.c1,
                          q2: answerdata.q2,
                          a2: answerdata.a2,
                          c2: answerdata.c2,
                          q3: answerdata.q3,
                          a3: answerdata.a3,
                          c3: answerdata.c3,
                          q4: quiz.q4,
                          a4: answer,
                          c4: quiz.q4_correct_option,
                          q5: answerdata.q5,
                          a5: answerdata.a5,
                          c5: answerdata.c5
                        })
                      );
                    } else if (count == 4) {
                      dispatch(
                        getAnswerData({
                          q1: answerdata.q1,
                          a1: answerdata.a1,
                          c1: answerdata.c1,
                          q2: answerdata.q2,
                          a2: answerdata.a2,
                          c2: answerdata.c2,
                          q3: answerdata.q3,
                          a3: answerdata.a3,
                          c3: answerdata.c3,
                          q4: answerdata.q4,
                          a4: answerdata.a4,
                          c4: answerdata.c4,
                          q5: quiz.q5,
                          a5: answer,
                          c5: quiz.q5_correct_option
                        })
                      );
                    }
                  }}
                >
                  Back
                </Button>
              : ""}
            {count < 4
              ? <Button
                  variant="contained"
                  onClick={() => {
                    setcount(count => count + 1);
                    console.log(answer);
                    if (count == 0) {
                      dispatch(
                        getAnswerData({
                          q1: quiz.q1,
                          a1: answer,
                          c1: quiz.q1_correct_option,
                          q2: answerdata.q2,
                          a2: answerdata.a2,
                          c2: answerdata.c2,
                          q3: answerdata.q3,
                          a3: answerdata.a3,
                          c3: answerdata.c3,
                          q4: answerdata.q4,
                          a4: answerdata.a4,
                          c4: answerdata.c4,
                          q5: answerdata.q5,
                          a5: answerdata.a5,
                          c5: answerdata.c5
                        })
                      );
                    } else if (count == 1) {
                      dispatch(
                        getAnswerData({
                          q1: answerdata.q1,
                          a1: answerdata.a1,
                          c1: answerdata.c1,
                          q2: quiz.q2,
                          a2: answer,
                          c2: quiz.q2_correct_option,
                          q3: answerdata.q3,
                          a3: answerdata.a3,
                          c3: answerdata.c3,
                          q4: answerdata.q4,
                          a4: answerdata.a4,
                          c4: answerdata.c4,
                          q5: answerdata.q5,
                          a5: answerdata.a5,
                          c5: answerdata.c5
                        })
                      );
                    } else if (count == 2) {
                      dispatch(
                        getAnswerData({
                          q1: answerdata.q1,
                          a1: answerdata.a1,
                          c1: answerdata.c1,
                          q2: answerdata.q2,
                          a2: answerdata.a2,
                          c2: answerdata.c2,
                          q3: quiz.q3,
                          a3: answer,
                          c3: quiz.q3_correct_option,
                          q4: answerdata.q4,
                          a4: answerdata.a4,
                          c4: answerdata.c4,
                          q5: answerdata.q5,
                          a5: answerdata.a5,
                          c5: answerdata.c5
                        })
                      );
                    } else if (count == 3) {
                      dispatch(
                        getAnswerData({
                          q1: answerdata.q1,
                          a1: answerdata.a1,
                          c1: answerdata.c1,
                          q2: answerdata.q2,
                          a2: answerdata.a2,
                          c2: answerdata.c2,
                          q3: answerdata.q3,
                          a3: answerdata.a3,
                          c3: answerdata.c3,
                          q4: quiz.q4,
                          a4: answer,
                          c4: quiz.q4_correct_option,
                          q5: answerdata.q5,
                          a5: answerdata.a5,
                          c5: answerdata.c5
                        })
                      );
                    }
                  }}
                >
                  Next
                </Button>
              : ""}
            {count >= 4
              ? <Button
                  variant="contained"
                  onClick={() => {
                    dispatch(
                      getAnswerData({
                        q1: answerdata.q1,
                        a1: answerdata.a1,
                        c1: answerdata.c1,
                        q2: answerdata.q2,
                        a2: answerdata.a2,
                        c2: answerdata.c2,
                        q3: answerdata.q3,
                        a3: answerdata.a3,
                        c3: answerdata.c3,
                        q4: answerdata.q4,
                        a4: answerdata.a4,
                        c4: answerdata.c4,
                        q5: quiz.q5,
                        a5: answer,
                        c5: quiz.q5_correct_option
                      })
                    );
                    navigate("/result");
                  }}
                >
                  Submit
                </Button>
              : ""}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Question;
