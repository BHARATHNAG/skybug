import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";

const Header = () => {
  const [navState, setnavState] = useState(false);
  const openDrawer = () => {
    setnavState(true);
  };
  return (
    <Box
      sx={{
        display: "flex",
        paddingInline: "30px",
        paddingBlock: "10px",
        justifyContent: "space-between",
        background: "#000",
        alignItems: "center",
        top: 0,
        position: "sticky"
      }}
      id="header"
    >
      <Box>
        <Typography
          sx={{
            color: "#41c9ff",
            fontSize: "36px",
            fontWeight: "bolder",
            fontFamily: "sans-serif"
          }}
        >
          BHARATH
        </Typography>
      </Box>
      <Box>
        <MenuIcon
          sx={{ color: "gray", width: "48px", height: "48px" }}
          onClick={openDrawer}
        />

        <Drawer
          PaperProps={{ sx: { background: "black" } }}
          anchor={"right"}
          open={navState}
        >
          <Box sx={{ width: 250 }}>
            <CloseIcon
              onClick={() => {
                setnavState(false);
              }}
              sx={{
                float: "right",
                color: "#fff",
                width: "48px",
                height: "48px",
                p: 2
              }}
            />
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                justifyContent: "center"
              }}
            >
              {["Home", "About", "Project", "Contact"].map((text, index) =>
                <ListItem key={text}>
                  <ListItemButton>
                    <Link to={text.toLowerCase()} spy={true} smooth={true}>
                      {" "}<ListItemText
                        primary={text}
                        sx={{
                          color: "#fff",
                          ".css-10hburv-MuiTypography-root": {
                            fontSize: "30px"
                          }
                        }}
                      />
                    </Link>
                  </ListItemButton>
                </ListItem>
              )}
            </List>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
