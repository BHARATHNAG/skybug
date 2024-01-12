import { Box } from "@mui/system";
import React, { useEffect } from "react";
import Products from "../Product/Home";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <Box>
      <Products />
    </Box>
  );
};

export default Home;
