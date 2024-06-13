import React from "react";
import { Menu as MenuIcon, Search } from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import { useDispatch } from "react-redux";
import { useTheme } from "@mui/material/styles"; // Import useTheme from MUI
import { AppBar, IconButton, InputBase, Toolbar } from "@mui/material";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme(); // Correct usage of useTheme

  const handleSearch = (e) => {
    // Implement search functionality here
  };

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        {/* Left side */}
        <FlexBetween>
          <IconButton onClick={() => console.log("open/close")}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
