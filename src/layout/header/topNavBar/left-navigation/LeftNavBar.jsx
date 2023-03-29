import { Box } from "@mui/material";
import React from "react";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";
import Logo from "../logo/Logo";
import LogoIcon from "../logo/LogoIcon";

export default function LeftNavBar() {
  const { user } = useUser();
  console.log(user);
  return (
    <Box>
      <LogoIcon />
      <Logo />
      <NavItem to={ROUTES.CARDS} label="Cards" />
      <NavItem to={ROUTES.ABOUT} label="About" />
      {user && <NavItem to={ROUTES.FAV_CARDS} label="Favorite cards" />}
      {user?.isBusiness && <NavItem to={ROUTES.MY_CARDS} label="My cards" />}
      {user?.isAdmin && <NavItem to={ROUTES.SANDBOX} label="Sandbox" />}
    </Box>
  );
}
