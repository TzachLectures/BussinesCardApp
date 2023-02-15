import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import NavBarLink from "../../../../routes/components/NavBarLink";
import ROUTES from "../../../../routes/routesModel";

export default function Logo() {
  return (
    <>
      <NavBarLink to={ROUTES.ROOT} sx={{ color: "#000" }}>
        <Typography
          variant="h4"
          sx={{
            display: { xs: "none", md: "inline-flex" },
            marginRight: 2,
            fontFamily: "fantasy",
          }}
        >
          BCard
        </Typography>
      </NavBarLink>
    </>
  );
}
