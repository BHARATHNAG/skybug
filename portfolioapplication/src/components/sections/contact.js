import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import ContactsIcon from "@mui/icons-material/Contacts";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Contact = () => {
  return (
    <Box
      sx={{ padding: { lg: "0 5rem", md: "0 5rem", sm: "1em", xs: "1em" } }}
      id="contact"
    >
      <Box>
        <Typography
          sx={{
            color: "#aaa",
            fontSize: "14px",
            fontFamily: "Poppins",
            display: "flex",
            alignItems: "center"
          }}
        >
          REACH OUT TO ME
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
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
          justifyContent: "space-evenly",
          alignItems: "baseline",
          paddingBlock: "40px",
          paddingInline: "2em"
        }}
      >
        <Stack
          spacing={{ lg: 4, md: 4, sm: 3, xs: 3 }}
          sx={{ width: { lg: "50%", md: "50%", sm: "50%", xs: "100%" } }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Poppins",
              fontSize: { lg: "2.5rem", md: "2.5rem", sm: "1rem", xs: "1rem" },
              fontWeight: "bold",
              mt: 2,
              textTransform: "capitalize",
              fontWeight: "bold",
              textAlign: { lg: "left", md: "left", sm: "left", xs: "center" }
            }}
          >
            Contact Me
          </Typography>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <TelegramIcon sx={{ color: "#ED4337" }} />
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Poppins",
                fontSize: { lg: "1rem", md: "1rem", sm: "0.7rem", xs: "0.7rem" }
              }}
            >
              chbharathnag909090@gmail.com
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <ContactsIcon sx={{ color: "#ED4337" }} />
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Poppins",
                fontSize: { lg: "1rem", md: "1rem", sm: "0.7rem", xs: "0.7rem" }
              }}
            >
              9390424046
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "15px" }}>
            <FacebookOutlinedIcon
              sx={{
                color: "#fff",
                width: { lg: "30px", md: "30px", sm: "20px", xs: "20px" },
                height: { lg: "30px", md: "30px", sm: "20px", xs: "20px" }
              }}
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=100015491400243"
                )}
            />
            <TwitterIcon
              sx={{
                background: "#fff",
                width: { lg: "28px", md: "28px", sm: "18px", xs: "18px" },
                height: { lg: "28px", md: "28px", sm: "18px", xs: "18px" },
                borderRadius: "7px"
              }}
              onClick={() => window.open("")}
            />
            <InstagramIcon
              sx={{
                color: "#fff",
                width: { lg: "30px", md: "30px", sm: "20px", xs: "20px" },
                height: { lg: "30px", md: "30px", sm: "20px", xs: "20px" }
              }}
              onClick={() =>
                window.open("https://www.instagram.com/aj.ithkumar433")}
            />
            <LinkedInIcon
              sx={{
                color: "#fff",
                width: { lg: "30px", md: "30px", sm: "20px", xs: "20px" },
                height: { lg: "30px", md: "30px", sm: "20px", xs: "20px" }
              }}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/cheedem-bharath-nag-436791126?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                )}
            />
          </Box>
          <Button
            sx={{
              background: "#ED4337",
              width: "fit-content",
              color: "#fff",
              width: { lg: "30%", md: "30%", sm: "50%", xs: "100%" },
              textTransform: "capitalize",
              fontFamily: "Poppins",
              padding: "10px"
            }}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1i4yfdePZoF1eTrqc9K5WFawVyPB7eAka/view?usp=drivesdk"
              )}
          >
            Download CV
          </Button>
        </Stack>
        <Stack
          sx={{
            width: { lg: "50%", md: "50%", sm: "50%", xs: "100%" },
            mt: { xs: 3 }
          }}
          spacing={{ lg: 3, md: 3, sm: 2, xs: 2 }}
        >
          <TextField
            placeholder="Your Name"
            size="small"
            sx={{
              background: "#454545",
              ":placeholder": { color: "#838686" },
              borderRadius: "5px"
            }}
          />
          <TextField
            placeholder="Your Email"
            size="small"
            sx={{
              background: "#454545",
              ":placeholder": { color: "#838686" },
              borderRadius: "5px"
            }}
          />

          <TextField
            placeholder="Your Message"
            size="small"
            sx={{
              background: "#454545",
              ":placeholder": { color: "#838686" },
              borderRadius: "5px",
              ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                height: { lg: "100px", md: "100px", sm: "70px", xs: "70px" }
              }
            }}
          />
          <Button
            sx={{
              background: "#ED4337",
              width: "fit-content",
              color: "#fff",
              width: { lg: "25%", md: "25%", sm: "auto", xs: "auto" },
              textTransform: "capitalize",
              fontFamily: "Poppins",
              padding: "10px"
            }}
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Contact;
