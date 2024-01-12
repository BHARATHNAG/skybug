import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { init } from "ityped";
const Sectionone = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,

      strings: ["Web Developer"]
    });
  }, []);

  return (
    <Box
      sx={{
        margin: { lg: "80px", md: "80px", sm: "80px", xs: "80px 20px" },
        padding: { lg: "20px", md: "20px", sm: "20px", xs: "20px 0" }
      }}
      id="home"
    >
      <Box>
        <Typography
          sx={{
            fontSize: { lg: "35px", md: "35px", sm: "20px", xs: "20px" },
            fontWeight: "700",
            color: "#41c9ff",
            paddingInline: { lg: "45px", md: "45px", sm: "45px" },
            fontFamily: "Raleway"
          }}
        >
          Hi There, I'm ~
        </Typography>
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontSize: { lg: "90px", md: "90px", sm: "50px", xs: "50px" },
            fontWeight: "700",
            color: "#fff",
            paddingInline: { lg: "45px", md: "45px", sm: "45px" },
            letterSpacing: "normal"
          }}
        >
          Bharath Nag
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h6"
          sx={{
            color: "#fff",
            fontSize: { lg: "30px", md: "30px", sm: "15px", xs: "15px" },
            paddingInline: { lg: "45px", md: "45px", sm: "45px" },
            marginTop: "30px",
            fontWeight: "bold",
            fontFamily: "Poppins,sans-serif"
          }}
        >
          I am a <span style={{ color: "crimson" }} ref={textRef} />
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#fff",
            paddingInline: { lg: "45px", md: "45px", sm: "45px" },
            fontSize: { lg: "30px", md: "30px", sm: "15px", xs: "15px" },
            fontFamily: "Poppins,sans-serif"
          }}
        >
          A self-taught developer with an interest in Computer Science.
        </Typography>
        <Button
          sx={{
            margin: {
              lg: "3rem",
              md: "3rem",
              sm: "3rem",
              xs: "3rem 3rem 3rem 0"
            },
            color: "rgb(255, 145, 213)",
            padding: "8px",
            gap: "5px",
            fontWeight: "700",
            borderRadius: "7px",
            textTransform: "capitalize",
            fontFamily: "sans-serif,Poppins"
          }}
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1i4yfdePZoF1eTrqc9K5WFawVyPB7eAka/view?usp=drivesdk"
            )}
        >
          View My CV.<svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            color="rgb(65, 201, 255)"
            height="22"
            width="22"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: "rgb(65, 201, 255)" }}
          >
            <path d="M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z" />
          </svg>
        </Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            margin: { lg: "0px 50px", md: "0px 50px", sm: "0px 50px" },
            width: { lg: "50%", md: "50%", sm: "50%" }
          }}
        >
          <Button
            sx={{
              display: "flex",
              background: "#242424",
              border: "none",
              gap: "5px",
              borderRadius: "7%",
              alignItems: "center",
              padding: "8px 15px",
              fontSize: "15px",
              color: "white",
              fontWeight: "bold",
              textTransform: "capitalize",
              fontFamily: "sans-serif,Poppins"
            }}
            onClick={() =>
              window.open("https://github.com/AjithkumarDharmalingam")}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 496 512"
              color="rgb(65, 201, 255)"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(65, 201, 255)" }}
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
            Github
          </Button>

          <Button
            sx={{
              fontFamily: "sans-serif,Poppins",
              display: "flex",
              background: "#242424",
              border: "none",
              gap: "5px",
              borderRadius: "7%",
              alignItems: "center",
              padding: "8px 15px",
              fontSize: "15px",
              color: "white",
              fontWeight: "bold",
              textTransform: "capitalize"
            }}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/cheedem-bharath-nag-436791126?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              )}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              color="rgb(65, 201, 255)"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(65, 201, 255)" }}
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
            LinkedIn
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Sectionone;
