import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserappBar from "../../Navbar/User";
import { useCart } from "react-use-cart";
import { API_BASE_URL } from "../../../config";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Home = () => {
  const { addItem } = useCart();
  console.log(useCart);

  const [data, setdata] = useState([]);
  const [price, setprice] = React.useState("");
  const [category, setcategory] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }

    axios.get(API_BASE_URL + "getallproducts").then(response => {
      setdata(response.data);
    });
  }, []);

  const handleChange = event => {
    setprice(event.target.value);
  };

  return (
    <Box>
      <UserappBar />

      <Container sx={{ mt: 5 }} disableGutters>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            mb: 4
          }}
        >
          <FormControl
            sx={{
              m: 1,
              width: { lg: "45%", md: "45%", sm: "45%", xs: "100%" }
            }}
            size="small"
          >
            <InputLabel id="demo-select-small-label">Sort By Price</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={price}
              label="Sort"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="20000">Under 20000</MenuItem>

              <MenuItem value="1000">Under 1000</MenuItem>
              <MenuItem value="500-1000">Between 500 to 1000</MenuItem>
              <MenuItem value="100-500">Between 100 to 500</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{
              m: 1,
              width: { lg: "45%", md: "45%", sm: "45%", xs: "100%" }
            }}
            size="small"
          >
            <InputLabel id="demo-select-small-label">
              Sort By Category
            </InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={category}
              label="Filter"
              onChange={e => setcategory(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Mobiles">Mobiles</MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Gadgets">Gadgets</MenuItem>
              <MenuItem value="Fashion">Fashion</MenuItem>
              <MenuItem value="Groceries">Groceries</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{ margin: "0px 10px 0px 0px", display: "flex", flexWrap: "wrap" }}
        >
          {data
            .filter(val => {
              if (price == "100-500") {
                if (val.price >= 100 && val.price <= 500) {
                  return val;
                }
              } else if (price == "500-1000") {
                if (val.price >= 500 && val.price <= 1000) {
                  return val;
                }
              } else if (price == "20000") {
                if (val.price < 20000) {
                  return val;
                }
              } else if (price == "1000") {
                if (val.price < 1000) {
                  return val;
                }
              } else if (category == "Mobiles") {
                if (val.category == "Mobiles") {
                  return val;
                }
              } else if (category == "Electronics") {
                if (val.category == "Electronics") {
                  return val;
                }
              } else if (category == "Gadgets") {
                if (val.category == "Gadgets") {
                  return val;
                }
              } else if (category == "Fashion") {
                if (val.category == "Fashion") {
                  return val;
                }
              } else if (category == "Groceries") {
                if (val.category == "Groceries") {
                  return val;
                }
              } else {
                return val;
              }
            })
            .map((item, index) => {
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
                      onClick={() =>
                        addItem({
                          id: index + 1,
                          name: item.name,
                          imageurl: item.imageurl,
                          price: item.price,
                          description: item.description
                        })}
                    >
                      Add To Cart
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
