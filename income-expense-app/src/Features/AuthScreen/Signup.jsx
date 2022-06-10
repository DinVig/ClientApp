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
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CommonButton from "Components/CommonButton/CommonButton";
import AuthAPI from "Http/api/Auth";
const Signup = ({ setSignUpOpen, signUpOpen }) => {
  const classes = useStyles();
  const [showPassword, setshowPassword] = React.useState(false);
  const handleLoginOpen = () => {
    setSignUpOpen(!signUpOpen);
  };
  const handleSignUp = () => {
    AuthAPI.signUpApi();
  };

  return (
    <>
      <Paper style={{ height: "100vh" }}>
        <Grid
          container
          spacing={0}
          direction="column"
          // alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item>
            <Box
              sx={{
                px: { xs: "2rem", lg: "9rem", md: "9rem" },
              }}
            >
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Grid
                    container
                    direction="column"
                    spacing={2}
                    textAlign="center"
                  >
                    <Grid item>
                      <Typography variant="h4">Get Started</Typography>
                    </Grid>

                    <Grid item>
                      <Typography variant="h6">
                        Already have an account?{" "}
                        <span
                          style={{ color: "red" }}
                          onClick={handleLoginOpen}
                        >
                          Login here
                        </span>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Divider>Or</Divider>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Box>
                    <Grid container direction={"column"} spacing={2}>
                      <Grid item xs={4}>
                        <TextField
                          required
                          name="name"
                          label="Name"
                          style={{ color: "#fff", borderBottomColor: "#fff" }}
                          inputProps={{ className: classes.textfield }}
                          InputLabelProps={{
                            className: classes.paper,
                          }}
                          variant="standard"
                          sx={{
                            width: { xs: "100%", lg: "100%", md: "100%" },
                          }}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          required
                          name="email"
                          label="Email"
                          type={"text"}
                          InputProps={{
                            className: classes.multilineColor,
                          }}
                          variant="standard"
                          sx={{
                            width: { xs: "100%", lg: "100%", md: "100%" },
                          }}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          required
                          name="password"
                          label="Password"
                          type={showPassword ? "text" : "password"}
                          InputProps={{
                            className: classes.multilineColor,

                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  style={{ color: "#fff" }}
                                  aria-label="toggle password visibility"
                                  onClick={() => setshowPassword(!showPassword)}
                                >
                                  {showPassword ? (
                                    <VisibilityIcon color="primary" />
                                  ) : (
                                    <VisibilityOffIcon color="secondary" />
                                  )}{" "}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                          sx={{
                            width: { xs: "100%", lg: "100%", md: "100%" },
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item textAlign="center">
                  <CommonButton
                    variant="contained"
                    label="Sign UP Now......."
                    width="100%"
                    color="secondary"
                    handleClick={handleSignUp}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  row: {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: "center",
    color: theme.palette.text.aggregatedText,
    backgroundColor: "white",
  },
  textfield: {
    color: "#fff",
  },
}));
export default Signup;
