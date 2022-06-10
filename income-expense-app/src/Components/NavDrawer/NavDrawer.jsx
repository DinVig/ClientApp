import React from "react";
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
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Drawer,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
const NavDrawer = ({ drawerWidth, drw }, ...props) => {
  const classes = useStyles(props);
  return (
    <div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            color: "#fff",
            backgroundColor: "#0D131D",
          },
        }}
        variant="persistent"
        anchor="left"
        open={drw}
        classes={{
          paper: classes.drawerPaper,
        }}
        className={classes.drawer}
      >
        <Grid container direction="column" spacing={2}>
          <Grid item>Dashboard</Grid>
          <Grid item>
            <Grid container>
              <Grid item>sjdkfj</Grid>
              <Grid item>ajkdj</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Drawer>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: (props) => props.drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    color: "#0D131D",
    backgroundColor: "#0D131D",
    width: (props) => props.drawerWidth,
    "& *": {
      // color: "rgba(255, 255, 255, 0.7)",
    },
  },
}));
export default NavDrawer;
