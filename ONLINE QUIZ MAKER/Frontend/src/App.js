import "./App.css";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import { Home } from "./Components/Home/Home";
import Addquiz from "./Components/Quiz/addquiz";
import { Myquiz } from "./Components/Quiz/myquiz";
import Updatequiz from "./Components/Quiz/updatequiz";
import Question from "./Components/Questions/Question";
import Result from "./Components/Result/Result";
import Answer from "./Components/Answer/Answer";

function App() {
  return (
    <Box>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/home-screen" element={<Home />} />
        <Route exact path="/addquiz" element={<Addquiz />} />
        <Route exact path="myquiz" element={<Myquiz />} />
        <Route exact path="/editquiz" element={<Updatequiz />} />
        <Route exact path="/question" element={<Question />} />
        <Route exact path="/result" element={<Result />} />
        <Route exact path="/answer" element={<Answer />} />
      </Routes>
    </Box>
  );
}

export default App;
