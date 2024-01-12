import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../config";
import UserappBar from "../Navbar/User";
import { useDispatch, useSelector } from "react-redux";
import { getQuizData } from "../../Reducers/Quiz";

export const Myquiz = props => {
  const [data, setdata] = useState([]);
  const user = useSelector(state => state.user.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(props.searchtext);
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get(API_BASE_URL + "getmyquizs", { params: { email: user.email } })
      .then(response => {
        console.log(response.data);
        setdata(response.data);
      });
  }

  return (
    <Box>
      <UserappBar />
      <Container sx={{ mt: 5 }} disableGutters>
        <Box
          sx={{ margin: "0px 10px 0px 0px", display: "flex", flexWrap: "wrap" }}
        >
          {data.map(e => {
            return (
              <Card
                sx={{
                  maxWidth: 245,
                  margin: { lg: "10px", md: "10px", xs: "auto" },
                  mb: { xs: 5 }
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={e.imageurl}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {e.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      no of questions : {e.no_of_questions}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Total mark : {e.totalmark}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Pass mark : {e.passmark}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      dispatch(
                        getQuizData({
                          id: e._id,
                          name: e.name,
                          imageurl: e.imageurl,
                          description: e.description,
                          no_of_questions: e.no_of_questions,
                          passmark: e.passmark,
                          totalmark: e.totalmark,
                          q1: e.q1,
                          q1_options: e.q1_options,
                          q1_correct_option: e.q1_correct_option,
                          q2: e.q2,
                          q2_options: e.q2_options,
                          q2_correct_option: e.q2_correct_option,
                          q3: e.q3,
                          q3_options: e.q3_options,
                          q3_correct_option: e.q3_correct_option,
                          q4: e.q4,
                          q4_options: e.q4_options,
                          q4_correct_option: e.q4_correct_option,
                          q5: e.q5,
                          q5_options: e.q5_options,
                          q5_correct_option: e.q5_correct_option,
                          creationdate: e.creationdate,
                          createdby: e.createdby
                        })
                      );
                      navigate("/editquiz");
                    }}
                  >
                    Update
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      axios
                        .delete(API_BASE_URL + "deletequiz", {
                          params: {
                            id: e._id
                          }
                        })
                        .then(res => {
                          if (res.data.status == 200) {
                            getData();
                          }
                        });
                    }}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};
