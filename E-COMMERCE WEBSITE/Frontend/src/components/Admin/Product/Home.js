import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import AdminappBar from "../../Navbar/Admin";
import { API_BASE_URL } from "../../../config";
import { useDispatch } from "react-redux";
import { getProductData } from "../../../reducer/product";

const Home = () => {
  const { addItem } = useCart();
  console.log(useCart);

  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios.get(API_BASE_URL + "getallproducts").then(response => {
      setdata(response.data);
    });
  }

  return (
    <Box>
      <AdminappBar />

      <Container sx={{ mt: 5 }} disableGutters>
        <Button
          variant="contained"
          sx={{
            float: { lg: "right", md: "none", sm: "none", xs: "none" },
            mb: 3
          }}
          onClick={() => navigate("/addproduct")}
        >
          Add Product
        </Button>
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
                      {item.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      ₹ {item.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      dispatch(
                        getProductData({
                          id: item._id,
                          name: item.name,
                          imageurl: item.imageurl,
                          price: item.price,
                          description: item.description,
                          category: item.category
                        })
                      );
                      navigate("/editproduct");
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      axios
                        .delete(API_BASE_URL + "deleteproduct", {
                          params: {
                            id: item._id
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

export default Home;
