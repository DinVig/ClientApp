import React from "react";
import { makeStyles } from "@mui/styles";
import {
  SnackbarContent,
  Snackbar,
  Button,
  Paper,
  Box,
  Grid,
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
  Item,
  AppBar,
  Container,
  Toolbar,
  Divider,
  Checkbox,
} from "@mui/material";
const DashboardLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      {/* <Grid item xs={1} className={classes.sidebar}>
          <Sidebar />
        </Grid> */}
      <Grid item style={{ flexGrow: 1 }} className={classes.main} xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    // overflow: "hidden",
  },
  main: {
    backgroundColor: "#EDEDF5",
  },
  sidebar: {},
}));
export default DashboardLayout;
