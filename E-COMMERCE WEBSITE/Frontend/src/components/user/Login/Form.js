import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeappBar from "../../Navbar/Home";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserData } from "../../../reducer/user";
import { API_BASE_URL } from "../../../config";

const Form = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("please enter email and password");
    } else {
      axios
        .get(API_BASE_URL + "userlogin/", {
          params: {
            email: email,
            password: password
          }
        })
        .then(res => {
          console.log(res.data);
          if (res.data.auth) {
            localStorage.setItem("token", res.data.token);

            dispatch(
              getUserData({
                id: res.data.result[0]._id,
                name: res.data.result[0].name,
                email: res.data.result[0].email,
                password: res.data.result[0].password,
                address: res.data.result[0].address,
                mobile: res.data.result[0].mobile
              })
            );
            navigate("/userhome");
          }
        })
        .catch(err => alert("invalid email or password"));
    }
  };
  return (
    <Box>
      <HomeappBar />
      <Container>
        <Stack sx={{ mt: 5 }} spacing={4}>
          <Typography variant="h5">USER LOGIN</Typography>
          <TextField
            fullWidth
            label="Email"
            id="fullWidth"
            value={email}
            onChange={e => setemail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            id="fullWidth"
            value={password}
            onChange={e => setpassword(e.target.value)}
          />
          <Button variant="contained" onClick={handleSubmit}>
            Login
          </Button>
          <Typography>OR</Typography>
          <Typography>
            <Link to="/adminlogin"> Click Here If You Are Admin ?</Link>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Form;
