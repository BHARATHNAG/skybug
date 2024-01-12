import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../../config";
import AdminappBar from "../../Navbar/Admin";
import { useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Editproduct = () => {
  const product = useSelector(state => state.product.value);
  const [productname, setproductname] = useState(product.name);
  const [price, setprice] = useState(product.price);
  const [description, setdescription] = useState(product.description);
  const [imageurl, setimageurl] = useState(product.imageurl);
  const [category, setcategory] = useState(product.category);
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    if (
      productname === "" ||
      price === "" ||
      description === "" ||
      imageurl === ""
    ) {
      alert("please fill all fields");
    } else {
      axios
        .put(API_BASE_URL + "editproduct", {
          id: product.id,
          productname: productname,
          price: price,
          description: description,
          imageurl: imageurl,
          category: category
        })
        .then(res => {
          console.log(res.data);
          if (res.data.status == 200) {
            alert(res.data.message);
            navigate("/adminhome");
          }
        });
    }
  };
  return (
    <Box>
      <AdminappBar />
      <Container>
        <Stack sx={{ mt: 5 }} spacing={4}>
          <Typography variant="h5">EDIT PRODUCT</Typography>

          <TextField
            fullWidth
            label="productname"
            id="fullWidth"
            value={productname}
            onChange={e => setproductname(e.target.value)}
          />
          <TextField
            fullWidth
            label="Price"
            id="fullWidth"
            value={price}
            onChange={e => setprice(e.target.value)}
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
            label="Image Url"
            id="fullWidth"
            value={imageurl}
            onChange={e => setimageurl(e.target.value)}
          />
          <FormControl sx={{ m: 1, width: "100%" }} size="small">
            <InputLabel id="demo-select-small-label">
              Choose Category
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

          <Button variant="contained" onClick={handleSubmit}>
            Update
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Editproduct;
