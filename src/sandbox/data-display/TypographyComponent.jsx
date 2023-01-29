import { Box, Chip, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

const TypographyComponent = () => (
  <>
    <Box display="flex">
      <Typography variant="h1" component="h1" color="initial">
        Hello!!
      </Typography>
      <Divider orientation="vertical" flexItem />
      <Typography variant="h2" component="h1" align="center" color="initial">
        All!!
      </Typography>
    </Box>
    <Divider />
    <Typography
      sx={{
        padding: 10,
        color: "blue",
      }}
      variant="body1"
      component="h1"
      fontWeight={200}
      color="primary"
    >
      Yess!!
    </Typography>
    <Divider> Center</Divider>
    <Divider textAlign="right"> Right</Divider>
    <Divider textAlign="left"> Left</Divider>
    <Divider>
      <Chip label="Something" />
    </Divider>
  </>
);

export default TypographyComponent;
