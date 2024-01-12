import { Paper, Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import UserappBar from "../Navbar/User";

const Answer = () => {
  const quiz = useSelector(state => state.quiz.value);

  return (
    <Box>
      <UserappBar />
      <Box
        sx={{
          width: { lg: "70%", md: "70%", sm: "70%", xs: "100%" },
          m: "auto",
          mt: 10,
          display: "flex",
          flexDirection: "column",
          gap: "30px"
        }}
      >
        <Paper
          elevation={1}
          sx={{ p: 3, display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <Typography variant="h6">
            1. {quiz.q1}
          </Typography>
          <Typography variant="h6">
            Ans : {quiz.q1_correct_option}
          </Typography>
        </Paper>
        <Paper
          elevation={1}
          sx={{ p: 3, display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <Typography variant="h6">
            2. {quiz.q2}
          </Typography>
          <Typography variant="h6">
            Ans : {quiz.q2_correct_option}
          </Typography>
        </Paper>
        <Paper
          elevation={1}
          sx={{ p: 3, display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <Typography variant="h6">
            3. {quiz.q3}
          </Typography>
          <Typography variant="h6">
            Ans : {quiz.q3_correct_option}
          </Typography>
        </Paper>
        <Paper
          elevation={1}
          sx={{ p: 3, display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <Typography variant="h6">
            4. {quiz.q4}
          </Typography>
          <Typography variant="h6">
            Ans : {quiz.q4_correct_option}
          </Typography>
        </Paper>
        <Paper
          elevation={1}
          sx={{ p: 3, display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <Typography variant="h6">
            5. {quiz.q5}
          </Typography>
          <Typography variant="h6">
            Ans : {quiz.q5_correct_option}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Answer;
