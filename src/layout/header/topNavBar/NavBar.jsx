import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import LeftNavBar from "./left-navigation/LeftNavBar";
import Logo from "./logo/Logo";
import LogoIcon from "./logo/LogoIcon";
import RightNavBar from "./right-navigation/RightNavBar";

export default function NavBar() {
  return (
    <AppBar position="sticky" color="primary" elevation={10}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <LeftNavBar />
        <RightNavBar />
      </Toolbar>
    </AppBar>
  );
}
