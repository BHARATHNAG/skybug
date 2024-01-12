import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import { useSelector } from "react-redux";
import UserappBar from "../Navbar/User";

const Addquiz = () => {
  let today = new Date().toISOString().slice(0, 10);

  const [quizname, setquizname] = useState("");
  const [imageurl, setimageurl] = useState("");
  const [description, setdescription] = useState("");
  const [no_of_questions, setno_of_questions] = useState("5");
  const [passmark, setpassmark] = useState("");
  const [totalmark, settotalmark] = useState("");
  const [question1, setquestion1] = useState("");
  const [question1options, setquestion1options] = useState("");
  const [question1correctoption, setquestion1correctoption] = useState("");
  const [question2, setquestion2] = useState("");
  const [question2options, setquestion2options] = useState("");
  const [question2correctoption, setquestion2correctoption] = useState("");

  const [question3, setquestion3] = useState("");
  const [question3options, setquestion3options] = useState("");
  const [question3correctoption, setquestion3correctoption] = useState("");

  const [question4, setquestion4] = useState("");
  const [question4options, setquestion4options] = useState("");
  const [question4correctoption, setquestion4correctoption] = useState("");

  const [question5, setquestion5] = useState("");
  const [question5options, setquestion5options] = useState("");
  const [question5correctoption, setquestion5correctoption] = useState("");

  const user = useSelector(state => state.user.value);
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    if (
      quizname === "" ||
      imageurl === "" ||
      description === "" ||
      no_of_questions === "" ||
      passmark === "" ||
      totalmark === "" ||
      question1 === "" ||
      question1options === "" ||
      question1correctoption === "" ||
      question2 === "" ||
      question2options === "" ||
      question2correctoption === "" ||
      question3 === "" ||
      question3options === "" ||
      question3correctoption === "" ||
      question4 === "" ||
      question4options === "" ||
      question4correctoption === "" ||
      question5 === "" ||
      question5options === "" ||
      question5correctoption === ""
    ) {
      alert("please fill all fields");
    } else {
      axios
        .post(API_BASE_URL + "addquiz", {
          name: quizname,
          imageurl: imageurl,
          description: description,
          no_of_questions: no_of_questions,
          passmark: passmark,
          totalmark: totalmark,
          q1: question1,
          q1_options: question1options,
          q1_correct_option: question1correctoption,
          q2: question2,
          q2_options: question2options,
          q2_correct_option: question2correctoption,
          q3: question3,
          q3_options: question3options,
          q3_correct_option: question3correctoption,
          q4: question4,
          q4_options: question4options,
          q4_correct_option: question4correctoption,
          q5: question5,
          q5_options: question5options,
          q5_correct_option: question5correctoption,
          creationdate: today,
          createdby: user.email
        })
        .then(res => {
          console.log(res.data);
          if (res.data.status == 200) {
            alert("Quiz Created Successfully");
            navigate("/myquiz");
          }
        });
    }
  };
  return (
    <Box>
      <UserappBar />
      <Container>
        <Stack sx={{ mt: 5 }} spacing={4}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            ADD QUIZ
          </Typography>

          <TextField
            fullWidth
            label="Quiz Name"
            id="fullWidth"
            value={quizname}
            onChange={e => setquizname(e.target.value)}
          />
          <TextField
            fullWidth
            label="Image Url"
            id="fullWidth"
            value={imageurl}
            onChange={e => setimageurl(e.target.value)}
          />
          <TextField
            fullWidth
            label="Description"
            id="fullWidth"
            value={description}
            onChange={e => setdescription(e.target.value)}
          />

          <TextField
            fullWidth
            label="Pass Mark"
            id="fullWidth"
            value={passmark}
            onChange={e => setpassmark(e.target.value)}
          />
          <TextField
            fullWidth
            label="Total Mark"
            id="fullWidth"
            value={totalmark}
            onChange={e => settotalmark(e.target.value)}
          />
          <TextField
            fullWidth
            label="Question 1"
            id="fullWidth"
            value={question1}
            onChange={e => setquestion1(e.target.value)}
          />
          <TextField
            fullWidth
            label="Question 1 Options with , (eg: option1,option2,etc..)"
            id="fullWidth"
            value={question1options}
            onChange={e => setquestion1options(e.target.value)}
          />
          <TextField
            fullWidth
            label="Question 1 Correct Option"
            id="fullWidth"
            value={question1correctoption}
            onChange={e => setquestion1correctoption(e.target.value)}
          />
          <TextField
            fullWidth
            label="Question 2"
            id="fullWidth"
            value={question2}
            onChange={e => setquestion2(e.target.value)}
          />
          <TextField
            fullWidth
            label="Question 2 Options with , (eg: option1,option2,etc..)"
            id="fullWidth"
            value={question2options}
            onChange={e => setquestion2options(e.target.value)}
          />
          <TextField
            fullWidth
            label="Question 2 Correct Option"
            id="fullWidth"
            value={question2correctoption}
            onChange={e => setquestion2correctoption(e.target.value)}
          />

          <TextField
            fullWidth
            label="Question 3"
            id="fullWidth"
            value={question3}
            onChange={e => setquestion3(e.target.value)}
          />
          <TextField
            fullWidth
            label="Question 3 Options with , (eg: option1,option2,etc..)"
            id="fullWidth"
            value={question3options}
            onChange={e => setquestion3options(e.target.value)}
          />
          <TextField
            fullWidth
            label="Question 3 Correct Option"
            id="fullWidth"
            value={question3correctoption}
            onChange={e => setquestion3correctoption(e.target.value)}
          />

          <TextField
            fullWidth
            label="Question 4"
            id="fullWidth"
            value={question4}
            onChange={e => setquestion4(e.target.value)}
          />
          <TextField
            fullWidth
            label="Question 4 Options with , (eg: option1,option2,etc..)"
            id="fullWidth"
            value={question4options}
            onChange={e => setquestion4options(e.target.value)}
          />
          <TextField
            fullWidth
            label="Question 4 Correct Option"
            id="fullWidth"
            value={question4correctoption}
            onChange={e => setquestion4correctoption(e.target.value)}
          />

          <TextField
            fullWidth
            label="Question 5"
            id="fullWidth"
            value={question5}
            onChange={e => setquestion5(e.target.value)}
          />
          <TextField
            fullWidth
            label="Question 5 Options with , (eg: option1,option2,etc..)"
            id="fullWidth"
            value={question5options}
            onChange={e => setquestion5options(e.target.value)}
          />
          <TextField
            fullWidth
            label="Question 5 Correct Option"
            id="fullWidth"
            value={question5correctoption}
            onChange={e => setquestion5correctoption(e.target.value)}
          />

          <Button variant="contained" onClick={handleSubmit}>
            Save
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Addquiz;
