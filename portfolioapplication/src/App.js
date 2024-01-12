import "./App.css";
import { Box } from "@mui/material";
import Header from "./components/Header/header";
import Sectionone from "./components/sections/sectionone";
import About from "./components/sections/about";
import Skill from "./components/sections/skill";
import Project from "./components/sections/project";
import Contact from "./components/sections/contact";

function App() {
  return (
    <>
    <Box>
        <Header />
        <Sectionone />
        <About />
        <Skill />
        <Project />
        <Contact /> 
    </Box>
    </>
  );
}

export default App;
