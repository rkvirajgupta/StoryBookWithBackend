import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { useState } from "react";

export const PopUp = (props) => {
  const [open, setOpen] = useState(true);

  return (
    <Collapse in={open}>
      <Stack sx={{ width: "50%", margin: "auto" }} spacing={2}>
        <Alert
          onClose={() => {
            setOpen(!open);
          }}
          sx={{ mb: 2 }}
        >
          <AlertTitle>{props.err}</AlertTitle>
          {props.msg}
        </Alert>
      </Stack>
    </Collapse>
  );
};
