import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "react-use-cart";
import AdminappBar from "../../Navbar/Admin";
import { API_BASE_URL } from "../../../config";
import { CardMedia } from "@mui/material";

const Orders = () => {
  console.log(useCart);

  const [data, setdata] = useState([]);
  useEffect(() => {
    getOrders();
  }, []);

  function getOrders() {
    axios.get(API_BASE_URL + "getallorders").then(response => {
      setdata(response.data);
    });
  }

  return (
    <Box>
      <AdminappBar />

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
                      {item.customerName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.address}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.mobile}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      axios
                        .put(API_BASE_URL + "updateorder", {
                          id: item._id,
                          name: item.name,
                          mobile: item.mobile,
                          email: item.email,
                          currentdate: item.currentdate,
                          productname: item.productname,
                          quantity: item.quantity,
                          price: item.price,
                          address: item.address,
                          paymentstatus: item.paymentstatus,
                          orderstatus: "delivered"
                        })
                        .then(res => {
                          console.log(res.data);
                          if (res.data.status == 200) {
                            alert(res.data.message);
                            getOrders();
                          }
                        });
                    }}
                  >
                    Deliver
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

export default Orders;
