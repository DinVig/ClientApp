import React from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";
import { set } from "lodash";
const MuiAlerts = ({ alertOpen, setAlertOpen, errorMessage, type }) => {
  const [open, setOpen] = React.useState(false);
  console.log("sdfa");
  const onCloseAlert = () => {
    setAlertOpen(false);
  };

  return (
    <div>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Snackbar
          open={alertOpen}
          autoHideDuration={700}
          onClose={onCloseAlert}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Alert
            // onClose={setAlertOpen(false)}
            severity={type}
            sx={{ width: "100%" }}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                // onClick={onCloseAlert}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {errorMessage}
          </Alert>
        </Snackbar>
        {/* <Alert
          
        >
          This is a success alert — check it out!
        </Alert> */}
      </Stack>
    </div>
  );
};

export default MuiAlerts;
