import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import UserappBar from "../../Navbar/User";
import { API_BASE_URL } from "../../../config";
import { useNavigate } from "react-router-dom";

const Myorder = () => {
  const [data, setdata] = useState([]);
  const user = useSelector(state => state.user.value);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }

    axios
      .get(API_BASE_URL + "getmyorders", {
        params: {
          email: user.email
        }
      })
      .then(response => {
        console.log(response.data);
        setdata(response.data);
      });
  }, []);

  return (
    <Box>
      <UserappBar />
      <Container sx={{ mt: 5 }} disableGutters>
        <Box
          sx={{ margin: "0px 10px 0px 0px", display: "flex", flexWrap: "wrap" }}
        >
          {data.map((item, index) => {
            return (
              <Card
                sx={{
                  maxWidth: 245,
                  margin: { lg: "10px", md: "10px", xs: "auto" },
                  mb: { xs: 5 }
                }}
                key={index}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{ objectFit: "fill" }}
                    height="140"
                    image={item.imageurl}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.productname}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      ₹ {item.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.address}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.mobile}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      delivery: {item.orderstatus}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Myorder;
