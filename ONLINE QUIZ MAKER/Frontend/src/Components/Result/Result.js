import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import UserappBar from "../Navbar/User";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Result = () => {
  const navigate = useNavigate();
  const [count, setcount] = useState(0);
  const answerdata = useSelector(state => state.answer.value);
  const quiz = useSelector(state => state.quiz.value);
  const perquesweight = quiz.totalmark / 5;
  function getCount() {
    var c = 0;
    if (answerdata.a1 == answerdata.c1) {
      c += 1;
    }
    if (answerdata.a2 == answerdata.c2) {
      c += 1;
    }
    if (answerdata.a3 == answerdata.c3) {
      c += 1;
    }
    if (answerdata.a4 == answerdata.c4) {
      c += 1;
    }
    if (answerdata.a5 == answerdata.c5) {
      c += 1;
    }
    setcount(c);
  }
  useEffect(() => {
    getCount();
  }, []);

  return (
    <Box>
      <UserappBar />
      {count * perquesweight >= quiz.passmark
        ? <Paper
            elevation={2}
            sx={{
              width: { lg: "50%", md: "50%", sm: "50%", xs: "auto" },
              m: "auto",
              mt: 7,
              p: 5,
              display: "flex",
              flexDirection: "column",
              gap: "30px"
            }}
          >
            <Typography
              variant="h4"
              sx={{ textAlign: "center", width: "auto" }}
            >
              CONGRATULATIONS
            </Typography>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              You passed the quiz
            </Typography>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              You have scored &nbsp;&nbsp;{count * perquesweight}/100
            </Typography>
            <Button onClick={() => navigate("/answer")}>View Answers</Button>
            <Button onClick={() => navigate("/home-screen")}>
              Back To Home
            </Button>
          </Paper>
        : <Paper
            elevation={2}
            sx={{
              width: { lg: "50%", md: "50%", sm: "50%", xs: "auto" },
              m: "auto",
              mt: 7,
              p: 5,
              display: "flex",
              flexDirection: "column",
              gap: "30px"
            }}
          >
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              WE ARE SORRY
            </Typography>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              You failed the quiz
            </Typography>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              You have scored &nbsp;&nbsp;{count * perquesweight}/100
            </Typography>
            <Button onClick={() => navigate("/answer")}>View Answers</Button>
            <Button onClick={() => navigate("/home-screen")}>
              Back To Home
            </Button>
          </Paper>}
    </Box>
  );
};

export default Result;
