import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeappBar from "../Navbar/Home";
import { API_BASE_URL } from "../../config";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUserData } from "../../Reducers/User";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
          try {
            if (res.data.auth) {
              localStorage.setItem("token", res.data.token);
              console.log(res.data.result[0]);
              dispatch(
                getUserData({
                  id: res.data.result[0]._id,
                  username: res.data.result[0].username,
                  email: res.data.result[0].email,
                  password: res.data.result[0].password,
                  address: res.data.result[0].address,
                  mobile: res.data.result[0].mobile
                })
              );
              navigate("/home-screen");
            } else {
              alert("invalid email or password");
            }
          } catch (error) {
            alert(error);
          }
        });
    }
  };
  return (
    <Box>
      <HomeappBar />
      <Container>
        <Stack sx={{ mt: 5 }} spacing={4}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            USER LOGIN
          </Typography>
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
        </Stack>
      </Container>
    </Box>
  );
};

export default Login;
