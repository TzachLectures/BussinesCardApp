import Button from "@mui/material/Button";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
const ButtonComponent = () => {
  return (
    <>
      <Button
        variant="contained"
        color="success"
        size="small"
        endIcon={<SendIcon />}
      >
        Click Here
      </Button>

      <Button
        variant="outlined"
        startIcon={<ShareIcon />}
        color="primary"
        size="large"
      >
        Click Here
      </Button>

      <Button startIcon={<ShareIcon />}></Button>

      <IconButton aria-label="Delete">
        <DeleteIcon />
      </IconButton>
    </>
  );
};

export default ButtonComponent;
