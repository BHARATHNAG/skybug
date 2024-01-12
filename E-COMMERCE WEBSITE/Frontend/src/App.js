import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Home/Home";
import Signup from "./components/user/signup/Form";
import Login from "./components/user/Login/Form";
import Userhomepage from "./components/user/Home/Home";
import Adminlogin from "./components/Admin/Login/Form";
import Adminhome from "./components/Admin/Home/Home";
import { Cart } from "./components/user/Cart/cart";
import { CartProvider } from "react-use-cart";
import Myorder from "./components/user/order/myorder";
import Orders from "./components/Admin/orders/order";
import Addproduct from "./components/Admin/Product/addproduct";
import Editproduct from "./components/Admin/Product/editproduct";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/userhome" element={<Userhomepage />} />
          <Route exact path="/adminlogin" element={<Adminlogin />} />
          <Route exact path="/adminhome" element={<Adminhome />} />
          <Route exact path="/Viewcart" element={<Cart />} />
          <Route exact path="/Myorders" element={<Myorder />} />
          <Route exact path="/Orders" element={<Orders />} />
          <Route exact path="/addproduct" element={<Addproduct />} />
          <Route exact path="/editproduct" element={<Editproduct />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
