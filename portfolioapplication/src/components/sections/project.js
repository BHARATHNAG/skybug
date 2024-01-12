import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const Project = () => {
  return (
    <Box
      sx={{ padding: { lg: "0 5rem", md: "0 5rem", sm: "1em", xs: "1em" } }}
      id="project"
    >
      <Typography
        sx={{
          color: "#aaa",
          fontSize: "14px",
          fontFamily: "Poppins",
          display: "flex",
          alignItems: "center"
        }}
      >
        PROJECTS{" "}
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
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: { lg: "5rem", md: "5rem", sm: "5rem", xs: "5rem  0" }
        }}
      >
        <Box
          sx={{
            backgroundColor: "#0f0f0f",
            borderRadius: "1rem",
            margin: "2rem",
            minHeight: "370px",
            width: "500px",
            textAlign: "center",
            fontWeight: "700"
          }}
        >
          <Stack spacing={1}>
            <img
              style={{
                backgroundPosition: "50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "1rem 1rem 0 0",
                height: "12rem",
                width: "100%",
                fontWeight: "700"
              }}
              alt="img"
              src="https://www.fonedog.com/images/youtube/youtube-video-download.jpg"
            />
            <Typography
              sx={{
                color: "#41c9ff",
                fontSize: "1.5rem",
                fontWeight: "700",
                fontFamily: "Poppins"
              }}
            >
              Youtube Clone
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: {
                  lg: "auto",
                  md: "auto",
                  sm: "auto",
                  xs: "max-content"
                },
                gap: { lg: 0, md: 0, sm: 0, xs: "10px" }
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#222",
                  border: "none",
                  borderRadius: "7px",
                  color: "#fff",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  width: "auto",
                  gap: "5px",
                  fontFamily: "Poppins",
                  fontWeight: "700"
                }}
              >
                Github FE
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                </svg>
              </Button>

              <Button
                sx={{
                  backgroundColor: "#222",
                  border: "none",
                  borderRadius: "7px",
                  color: "#fff",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  width: "auto",
                  gap: "5px",
                  fontFamily: "Poppins",
                  fontWeight: "700"
                }}
              >
                View Site
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z" />
                </svg>
              </Button>

              <Button
                sx={{
                  backgroundColor: "#222",
                  border: "none",
                  borderRadius: "7px",
                  color: "#fff",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  width: "auto",
                  gap: "5px",
                  fontFamily: "Poppins",
                  fontWeight: "700"
                }}
              >
                Github BE
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                </svg>
              </Button>
            </Box>
          </Stack>
          <Box sx={{ marginTop: "20px" }}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "1rem",
                margin: "0.2rem",
                padding: "0.1em",
                fontFamily: "Poppins"
              }}
            >
              Youtube contains standard features that enables
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "1rem",
                margin: "0.2rem",
                padding: "0.1em",
                fontFamily: "Poppins"
              }}
            >
              you to launch your own video sharing website instantly.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "6px",
                marginTop: "10px"
              }}
            >
              <Typography
                sx={{
                  color: "rgb(65, 201, 255)",
                  fontWeight: "500",
                  fontSize: "0.7rem",
                  fontFamily: "Poppins"
                }}
              >
                TECH USED :{" "}
              </Typography>
              <Typography
                sx={{
                  color: "#d18d0d",
                  fontWeight: "500",
                  fontSize: "0.7rem",
                  fontFamily: "Poppins"
                }}
              >
                REACT, NODE, EXPRESS JS, MONGODB
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#0f0f0f",
            borderRadius: "1rem",
            margin: "2rem",
            minHeight: "370px",
            width: "500px",
            textAlign: "center",
            fontWeight: "700"
          }}
        >
          <Stack spacing={1}>
            <img
              style={{
                backgroundPosition: "50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "1rem 1rem 0 0",
                height: "12rem",
                width: "100%",
                fontWeight: "700"
              }}
              alt="img"
              src="https://static.javatpoint.com/blog/images/student-management-system.png"
            />
            <Typography
              sx={{
                color: "#41c9ff",
                fontSize: "1.5rem",
                fontWeight: "700",
                fontFamily: "Poppins"
              }}
            >
              Student Management System
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: {
                  lg: "auto",
                  md: "auto",
                  sm: "auto",
                  xs: "max-content"
                },
                gap: { lg: 0, md: 0, sm: 0, xs: "10px" }
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#222",
                  border: "none",
                  borderRadius: "7px",
                  color: "#fff",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  width: "auto",
                  gap: "5px",
                  fontFamily: "Poppins",
                  fontWeight: "700"
                }}
              >
                Github FE
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                </svg>
              </Button>

              <Button
                sx={{
                  backgroundColor: "#222",
                  border: "none",
                  borderRadius: "7px",
                  color: "#fff",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  width: "auto",
                  gap: "5px",
                  fontFamily: "Poppins",
                  fontWeight: "700"
                }}
              >
                View Site
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z" />
                </svg>
              </Button>

              <Button
                sx={{
                  backgroundColor: "#222",
                  border: "none",
                  borderRadius: "7px",
                  color: "#fff",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  width: "auto",
                  gap: "5px",
                  fontFamily: "Poppins",
                  fontWeight: "700"
                }}
              >
                Github BE
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                </svg>
              </Button>
            </Box>
          </Stack>
          <Box sx={{ marginTop: "20px" }}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "1rem",
                margin: "0.2rem",
                padding: "0.1em",
                fontFamily: "Poppins"
              }}
            >
              Student Management Project is helpful for students.
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "1rem",
                margin: "0.2rem",
                padding: "0.1em",
                fontFamily: "Poppins"
              }}
            >
              In the current system, all the activities are done
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "6px",
                marginTop: "10px"
              }}
            >
              <Typography
                sx={{
                  color: "rgb(65, 201, 255)",
                  fontWeight: "500",
                  fontSize: "0.7rem",
                  fontFamily: "Poppins"
                }}
              >
                TECH USED :{" "}
              </Typography>
              <Typography
                sx={{
                  color: "#d18d0d",
                  fontWeight: "500",
                  fontSize: "0.7rem",
                  fontFamily: "Poppins"
                }}
              >
                REACT, NODE, EXPRESS JS, MONGODB
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#0f0f0f",
            borderRadius: "1rem",
            margin: "2rem",
            minHeight: "370px",
            width: "500px",
            textAlign: "center",
            fontWeight: "700"
          }}
        >
          <Stack spacing={1}>
            <img
              style={{
                backgroundPosition: "50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "1rem 1rem 0 0",
                height: "12rem",
                width: "100%",
                fontWeight: "700"
              }}
              alt="img"
              src="https://www.howtogeek.com/wp-content/uploads/2014/07/reset-or-bypass-operating-system-or-device-password.jpg?height=200p&trim=2,2,2,2"
            />
            <Typography
              sx={{
                color: "#41c9ff",
                fontSize: "1.5rem",
                fontWeight: "700",
                fontFamily: "Poppins"
              }}
            >
              Password Reset Flow
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: {
                  lg: "auto",
                  md: "auto",
                  sm: "auto",
                  xs: "max-content"
                },
                gap: { lg: 0, md: 0, sm: 0, xs: "10px" }
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#222",
                  border: "none",
                  borderRadius: "7px",
                  color: "#fff",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  width: "auto",
                  gap: "5px",
                  fontFamily: "Poppins",
                  fontWeight: "700"
                }}
              >
                Github FE
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                </svg>
              </Button>

              <Button
                sx={{
                  backgroundColor: "#222",
                  border: "none",
                  borderRadius: "7px",
                  color: "#fff",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  width: "auto",
                  gap: "5px",
                  fontFamily: "Poppins",
                  fontWeight: "700"
                }}
              >
                View Site
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z" />
                </svg>
              </Button>

              <Button
                sx={{
                  backgroundColor: "#222",
                  border: "none",
                  borderRadius: "7px",
                  color: "#fff",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  width: "auto",
                  gap: "5px",
                  fontFamily: "Poppins",
                  fontWeight: "700"
                }}
              >
                Github BE
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                </svg>
              </Button>
            </Box>
          </Stack>
          <Box sx={{ marginTop: "20px" }}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "1rem",
                margin: "0.2rem",
                padding: "0.1em",
                fontFamily: "Poppins"
              }}
            >
              Users enter their email to receive a reset link.
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "1rem",
                margin: "0.2rem",
                padding: "0.1em",
                fontFamily: "Poppins"
              }}
            >
              If email is found, link is sent to them, with temporary
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "6px",
                marginTop: "10px"
              }}
            >
              <Typography
                sx={{
                  color: "rgb(65, 201, 255)",
                  fontWeight: "500",
                  fontSize: "0.7rem",
                  fontFamily: "Poppins"
                }}
              >
                TECH USED :{" "}
              </Typography>
              <Typography
                sx={{
                  color: "#d18d0d",
                  fontWeight: "500",
                  fontSize: "0.7rem",
                  fontFamily: "Poppins"
                }}
              >
                REACT, NODE, EXPRESS JS, MONGODB
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#0f0f0f",
            borderRadius: "1rem",
            margin: "2rem",
            minHeight: "370px",
            width: "500px",
            textAlign: "center",
            fontWeight: "700"
          }}
        >
          <Stack spacing={1}>
            <img
              style={{
                backgroundPosition: "50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "1rem 1rem 0 0",
                height: "12rem",
                width: "100%",
                fontWeight: "700"
              }}
              alt="img"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750,h_400/http://assets.designhill.com/design-blog/wp-content/uploads/2020/10/Quicker-Query-Resolution.jpg"
            />
            <Typography
              sx={{
                color: "#41c9ff",
                fontSize: "1.5rem",
                fontWeight: "700",
                fontFamily: "Poppins"
              }}
            >
              Query Resolving System
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: {
                  lg: "auto",
                  md: "auto",
                  sm: "auto",
                  xs: "max-content"
                },
                gap: { lg: 0, md: 0, sm: 0, xs: "10px" }
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#222",
                  border: "none",
                  borderRadius: "7px",
                  color: "#fff",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  width: "auto",
                  gap: "5px",
                  fontFamily: "Poppins",
                  fontWeight: "700"
                }}
              >
                Github FE
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                </svg>
              </Button>

              <Button
                sx={{
                  backgroundColor: "#222",
                  border: "none",
                  borderRadius: "7px",
                  color: "#fff",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  width: "auto",
                  gap: "5px",
                  fontFamily: "Poppins",
                  fontWeight: "700"
                }}
              >
                View Site
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z" />
                </svg>
              </Button>

              <Button
                sx={{
                  backgroundColor: "#222",
                  border: "none",
                  borderRadius: "7px",
                  color: "#fff",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  width: "auto",
                  gap: "5px",
                  fontFamily: "Poppins",
                  fontWeight: "700"
                }}
              >
                Github BE
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                </svg>
              </Button>
            </Box>
          </Stack>
          <Box sx={{ marginTop: "20px" }}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "1rem",
                margin: "0.2rem",
                padding: "0.1em",
                fontFamily: "Poppins"
              }}
            >
              This is Fullstack MERN website.
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "1rem",
                margin: "0.2rem",
                padding: "0.1em",
                fontFamily: "Poppins"
              }}
            >
              This application is used to resolve the user queries.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "6px",
                marginTop: "10px"
              }}
            >
              <Typography
                sx={{
                  color: "rgb(65, 201, 255)",
                  fontWeight: "500",
                  fontSize: "0.7rem",
                  fontFamily: "Poppins"
                }}
              >
                TECH USED :{" "}
              </Typography>
              <Typography
                sx={{
                  color: "#d18d0d",
                  fontWeight: "500",
                  fontSize: "0.7rem",
                  fontFamily: "Poppins"
                }}
              >
                REACT, NODE, EXPRESS JS, MONGODB
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
