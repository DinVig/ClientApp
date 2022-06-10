import React from "react";
import Login from "./Login";
import Signup from "./Signup";
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
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import SignIn from "./SignIn";
// import SignUp from "./Signup";
const AuthScreen = ({ setUser }) => {
  const classes = useStyles();
  const [signUpOpen, setSignUpOpen] = React.useState(false);
  React.useEffect(() => {
    localStorage.setItem("user", false);
  }, []);
  return (
    <>
      {/* <Grid container alignItems="center" justify="center">
        <Grid item style={{ width: "100%" }}>
          <Grid container spacing={2} alignItems="center" justify="center">
            <Grid item xs={6}>
              fadjfk
            </Grid>
            <Grid item xs={true}>
              safdj
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}

      {/* properly working */}
      {/* <Grid
        container
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item style={{ width: "100%" }}>
          <Box p={6}>
            <Paper elevation={3} style={{ height: "80vh" }}>
              <Grid
                container
                spacing={2}
                alignItems="center"
                justify="center"
                textAlign={"center"}
              >
                <Grid
                  item
                  style={{ paddingTop: 0 }}
                  sx={{
                    display: { xs: "none", lg: "block", md: "block" },
                    paddingTop: 0,
                  }}
                  md={6}
                >
                  <Paper style={{ background: "red" }}>xs=4</Paper>
                </Grid>
                <Grid item style={{ paddingTop: 0 }} xs={12} md={6}>
                  <Paper style={{ background: "red" }}>xs=8</Paper>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Grid>
      </Grid> */}

      {/* <Grid container alignItems="center" justify="center" textAlign="center">
        <Grid item style={{ width: "100%" }}>
          <Grid container spacing={2} alignItems="center" justify="center">
            <Grid item xs={6}>
              <Paper>xs=4</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>xs=8</Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}
      {/* <Grid container>
        <Grid item style={{ width: "100%" }}>
          <Box p={4}>
            <Grid container spacing={2} textAlign="center">
              <Grid
                item
                sx={{
                  display: { xs: "none", lg: "block", md: "block" },
                  paddingTop: 0,
                }}
                md={6}
              ></Grid>
              <Grid item xs={12} md={6}>
                <Login />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid> */}
      <Grid container>
        <Grid
          item
          sx={{
            display: { xs: "none", lg: "block", md: "block" },
            paddingTop: 0,
          }}
          md={6}
          style={{ background: "rebeccapurple", minHeight: "100vh" }}
        ></Grid>
        <Grid item xs={12} md={6}>
          {!signUpOpen && (
            <Login
              setSignUpOpen={setSignUpOpen}
              signUpOpen={signUpOpen}
              setUser={setUser}
            />
          )}
          {signUpOpen && (
            <Signup setSignUpOpen={setSignUpOpen} signUpOpen={signUpOpen} />
          )}
        </Grid>
      </Grid>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  main: {
    height: "80vh",
  },
}));
export default AuthScreen;
