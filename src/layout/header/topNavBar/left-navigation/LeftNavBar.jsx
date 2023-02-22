import { Box } from "@mui/material";
import React from "react";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";
import Logo from "../logo/Logo";
import LogoIcon from "../logo/LogoIcon";

export default function LeftNavBar() {
  return (
    <Box>
      <LogoIcon />
      <Logo />
      <NavItem to={ROUTES.CARDS} label="Cards" />
      <NavItem to={ROUTES.ABOUT} label="About" />
    </Box>
  );
}
