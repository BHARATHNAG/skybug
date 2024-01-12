import { Stack, Typography } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const About = () => {
  return (
    <Stack
      spacing={3}
      sx={{
        padding: { lg: "3rem 5rem", md: "3rem 5rem", sm: "1em", xs: "1em" }
      }}
      id="about"
    >
      <Stack spacing={2}>
        <Typography
          sx={{
            color: "#aaa",
            fontSize: "14px",
            fontFamily: "Poppins",
            display: "flex",
            alignItems: "center"
          }}
        >
          ME ?{" "}
          <hr
            style={{
              width: "10%",
              margin: "0px 15px",
              background: "#41c9ff",
              border: "none",
              height: "1px"
            }}
          />
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontFamily: "sans-serif",
            fontSize: { lg: "2.5rem", md: "2.5rem", sm: "1rem", xs: "1rem" },
            fontWeight: "bold"
          }}
        >
          LET'S GET TO KNOW ME
        </Typography>
      </Stack>
      <Stack spacing={2}>
        <Typography
          sx={{
            color: "#41c9ff",
            fontWeight: "700",
            fontFamily: "Raleway",
            fontSize: { lg: "26px", md: "26px", sm: "15px", xs: "15px" }
          }}
        >
          FullStack Web Developer / MERN Stack
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontFamily: "sans-serif",
            fontSize: { lg: "1rem", md: "1rem", sm: "0.7rem", xs: "0.7rem" },
            fontWeight: "400",
            lineHeight: "1.5",
            wordSpacing: "2px",
            padding: "1rem"
          }}
        >
          Hey, I am Cheedem Bharath Nag, an aspiring developer with a degree in
          Electrical and Electronics Engineering. I am currently learning new
          skills with a vision of becoming better at what I do. I like Web
          Development and to Create a new Interfaces. I also have Frontend
          skills in HTML, CSS, JavaScript, React Js and Backend skills in Node
          Js, MongoDB, Express Js.
        </Typography>
      </Stack>

      <List sx={{ paddingInline: { sm: "40px" } }}>
        <ListItem
          disablePadding
          sx={{
            display: "flex",
            gap: "10px",
            margin: { lg: "1rem", md: "1rem", sm: "0.2rem", xs: "0.2rem" },
            padding: { lg: "1rem", md: "1rem", sm: "0.3em", xs: "0.3em" },
            color: "#fff"
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: "Poppins",
              fontSize: { lg: "1rem", md: "1rem", sm: "0.7rem", xs: "0.7rem" }
            }}
          >
            <span style={{ color: "green" }}>➤</span> Full Name :
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: "Poppins",
              fontSize: { lg: "1rem", md: "1rem", sm: "0.7rem", xs: "0.7rem" }
            }}
          >
            Cheedem Bharath Nag
          </Typography>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            display: "flex",
            gap: "10px",
            margin: { lg: "1rem", md: "1rem", sm: "0.2rem", xs: "0.2rem" },
            padding: { lg: "1rem", md: "1rem", sm: "0.3em", xs: "0.3em" },
            color: "#fff"
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: "Poppins",
              fontSize: { lg: "1rem", md: "1rem", sm: "0.7rem", xs: "0.7rem" }
            }}
          >
            <span style={{ color: "green" }}>➤</span> Born :
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: "Poppins",
              fontSize: { lg: "1rem", md: "1rem", sm: "0.7rem", xs: "0.7rem" }
            }}
          >
            22 Oct 2001
          </Typography>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            display: "flex",
            gap: "10px",
            margin: { lg: "1rem", md: "1rem", sm: "0.2rem", xs: "0.2rem" },
            padding: { lg: "1rem", md: "1rem", sm: "0.3em", xs: "0.3em" },
            color: "#fff"
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: "Poppins",
              fontSize: { lg: "1rem", md: "1rem", sm: "0.7rem", xs: "0.7rem" }
            }}
          >
            <span style={{ color: "green" }}>➤</span> Department :
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: "Poppins",
              fontSize: { lg: "1rem", md: "1rem", sm: "0.7rem", xs: "0.7rem" }
            }}
          >
            CSE
          </Typography>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            display: "flex",
            gap: "10px",
            margin: { lg: "1rem", md: "1rem", sm: "0.2rem", xs: "0.2rem" },
            padding: { lg: "1rem", md: "1rem", sm: "0.3em", xs: "0.3em" },
            color: "#fff"
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: "Poppins",
              fontSize: { lg: "1rem", md: "1rem", sm: "0.7rem", xs: "0.7rem" }
            }}
          >
            <span style={{ color: "green" }}>➤</span> Degree :
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: "Poppins",
              fontSize: { lg: "1rem", md: "1rem", sm: "0.7rem", xs: "0.7rem" }
            }}
          >
            Engineering
          </Typography>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            display: "flex",
            gap: "10px",
            margin: { lg: "1rem", md: "1rem", sm: "0.2rem", xs: "0.2rem" },
            padding: { lg: "1rem", md: "1rem", sm: "0.3em", xs: "0.3em" },
            color: "#fff"
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: "Poppins",
              fontSize: { lg: "1rem", md: "1rem", sm: "0.7rem", xs: "0.7rem" }
            }}
          >
            <span style={{ color: "green" }}>➤</span> Nationality :
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: "Poppins",
              fontSize: { lg: "1rem", md: "1rem", sm: "0.7rem", xs: "0.7rem" }
            }}
          >
            Indian
          </Typography>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            display: "flex",
            gap: "10px",
            margin: { lg: "1rem", md: "1rem", sm: "0.2rem", xs: "0.2rem" },
            padding: { lg: "1rem", md: "1rem", sm: "0.3em", xs: "0.3em" },
            color: "#fff"
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: "Poppins",
              fontSize: { lg: "1rem", md: "1rem", sm: "0.7rem", xs: "0.7rem" }
            }}
          >
            <span style={{ color: "green" }}>➤</span> Language :
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: "Poppins",
              fontSize: { lg: "1rem", md: "1rem", sm: "0.7rem", xs: "0.7rem" }
            }}
          >
            Telugu, English, Hindi
          </Typography>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            display: "flex",
            gap: "10px",
            margin: { lg: "1rem", md: "1rem", sm: "0.2rem", xs: "0.2rem" },
            padding: { lg: "1rem", md: "1rem", sm: "0.3em", xs: "0.3em" },
            color: "#fff"
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: "Poppins",
              fontSize: { lg: "1rem", md: "1rem", sm: "0.7rem", xs: "0.7rem" }
            }}
          >
            <span style={{ color: "green" }}>➤</span> City :
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: "Poppins",
              fontSize: { lg: "1rem", md: "1rem", sm: "0.7rem", xs: "0.7rem" }
            }}
          >
            Visakhapatnam ,Andhra pradesh
          </Typography>
        </ListItem>
      </List>
      <Typography
        sx={{
          color: "#fff",
          fontFamily: "sans-serif",
          fontSize: { lg: "1rem", md: "1rem", sm: "0.7rem", xs: "0.7rem" },
          fontWeight: "400",
          lineHeight: "1.5",
          wordSpacing: "2px",
          padding: "1rem"
        }}
      >
        I Started off my self-learning journey with online tutorials Google,
        YouTube, Learnmall, SoloLearn, etc and take a step further and Enrolled
        in the GUVI IIT MADRAS Fullstack developer Nanodegree Program which
        involved extensive programming and real world projects. Later, I learned
        MERN Stack From Guvi and built an Website using React JS, Node, Express
        Js, MongoDB.
      </Typography>
    </Stack>
  );
};

export default About;
