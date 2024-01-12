import React, { useEffect } from "react";
import { useCart } from "react-use-cart";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Box, Container } from "@mui/system";
import UserappBar from "../../Navbar/User";
import axios from "axios";
import { useSelector } from "react-redux";
import { API_BASE_URL } from "../../../config";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  const user = useSelector(state => state.user.value);
  const navigate = useNavigate();
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();
  if (isEmpty)
    return (
      <Box>
        <UserappBar />
        <Typography variant="h2" sx={{ textAlign: "center", marginTop: "20%" }}>
          Your Cart Is Empty
        </Typography>
      </Box>
    );

  console.log(items);

  var today = new Date(),
    currentdate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

  const handleSubmit = () => {
    var options = {
      key: "rzp_test_biZuZUgW3kho4d",
      key_secret: "IQl77ygOMpsShDHYJeyBxhyB",
      amount: cartTotal * 100,
      currency: "INR",
      name: user.name,
      description: "payment for products",
      handler: function(response) {
        for (var i = 0; i < items.length; i++) {
          axios
            .post(API_BASE_URL + "placeorder", {
              name: user.name,
              mobile: user.mobile,
              email: user.email,
              currentdate: currentdate,
              productname: items[i].name,
              imageurl: items[i].imageurl,
              quantity: parseInt(items[i].quantity),
              price: parseInt(items[i].price),
              address: user.address,
              paymentstatus: "paid",
              orderstatus: "pending"
            })
            .then(res => {
              console.log(res.data);
              if (res.data.status == 200) {
                alert(res.data.message);
                emptyCart();
              }
            });
        }
      },
      prefill: { name: user.name, email: user.email, contact: user.address },
      notes: { address: "Razorpay Corporate office" },
      theme: { color: "#3399cc" }
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <Box>
      <UserappBar />

      <Container
        sx={{
          mt: 5,
          display: { xs: "flex" },
          flexDirection: "column",
          flexWrap: "wrap"
        }}
        disableGutters
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            float: "right",
            justifyContent: { lg: "left", xs: "center" },
            alignItems: "center",
            mb: 4
          }}
        >
          <Typography variant="h5">
            Cart Total : {cartTotal}
          </Typography>
          <Button variant="contained" onClick={emptyCart}>
            Empty Cart
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Checkout
          </Button>
        </Box>
        <Box
          sx={{ margin: "0px 10px 0px 0px", display: "flex", flexWrap: "wrap" }}
        >
          {items.map((item, index) => {
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
                    height="140"
                    sx={{ objectFit: "fill" }}
                    image={item.imageurl}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.price}
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
                      updateItemQuantity(item.id, item.quantity - 1)}
                  >
                    sub
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)}
                  >
                    Add
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
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
