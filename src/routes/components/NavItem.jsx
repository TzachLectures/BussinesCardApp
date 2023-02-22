import { Button, Typography } from "@mui/material";
import { object, string } from "prop-types";
import React from "react";
import NavBarLink from "./NavBarLink";

export default function NavItem({ to, sx, label }) {
  return (
    <NavBarLink to={to} sx={sx}>
      <Button color="inherit">
        <Typography>{label}</Typography>
      </Button>
    </NavBarLink>
  );
}

NavItem.propTypes = {
  to: string.isRequired,
  label: string.isRequired,
  sx: object,
};
