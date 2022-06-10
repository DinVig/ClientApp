import React from "react";
import {
  SnackbarContent,
  Snackbar,
  Button,
  Paper,
  Box,
  Grid,
  makeStyles,
  Typography,
  InputAdornment,
  FormControl,
  TextField,
  Chip,
  Menu,
  Badge,
  ClickAwayListener,
  IconButton,
  InputBase,
  withStyles,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";
const Buttons = () => {
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Button variant="text" color="primary">
            Text
          </Button>
          <Button variant="outlined" color="primary">
            outlined
          </Button>
          <Button variant="contained" color="primary">
            contained
          </Button>
        </Grid>
        <Grid item>
          <Button variant="text" color="secondary">
            Text
          </Button>
          <Button variant="outlined" color="secondary">
            outlined
          </Button>
          <Button variant="contained" color="secondary">
            contained
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Buttons;
