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
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CommonButton from "Components/CommonButton/CommonButton";
import LoginAPI from "Http/api/Auth";
import { Redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MuiAlerts from "Components/Alerts/MuiAlerts";

const Login = ({ setSignUpOpen, signUpOpen }, ...props) => {
  console.log("props", props);
  const navigate = useNavigate();
  const classes = useStyles();
  const [showPassword, setshowPassword] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [data, setData] = React.useState("");
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [type, setType] = React.useState("");
  const handleSignUpOpen = () => {
    setSignUpOpen(!signUpOpen);
  };
  const handleLogin = () => {
    if (email && pwd) {
      const baseURL = "http://165.22.209.98";
      axios
        .get(`${baseURL}/login?emailid=${email}&password=${pwd}`)
        .then((response) => {
          setData(response.data);
          if (response.data.Message == "Valid user") {
            localStorage.setItem("user", true);

            navigate("/dashboard");
          } else {
            localStorage.setItem("user", false);
            setAlertOpen(true);
            setErrorMessage(response.data.Message);
            setType("error");
          }
        });
    }
  };

  return (
    <>
      <Paper style={{ height: "100vh" }}>
        {/* <Box p={2}> */}
        {/* <Grid
          container
          spacing={0}
          direction="column"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item>
            <Box px={3}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Typography variant="h4">Sign in to Tracker</Typography>
                </Grid>
                <Grid item>Social network</Grid>
                <Grid item>
                  <Divider>Or</Divider>
                </Grid>
                <Grid item>
                  <Box>
                    <Grid container direction={"column"} spacing={2}>
                      <Grid item xs={4}>
                        <TextField
                          required
                          name="email"
                          label="Email"
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
                <Grid item>
                  <CommonButton
                    variant="contained"
                    label="Sign in"
                    color="primary"
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid> */}
        {alertOpen && (
          <MuiAlerts
            alertOpen={alertOpen}
            setAlertOpen={setAlertOpen}
            errorMessage={errorMessage}
            type={type}
          />
        )}
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
                      <Typography variant="h4">Sign in to Tracker</Typography>
                    </Grid>
                    {/* <Grid item>Social network</Grid> */}
                    <Grid item>
                      <Typography variant="h6">
                        Dont have account?{" "}
                        <span
                          style={{ color: "red" }}
                          onClick={handleSignUpOpen}
                        >
                          create here
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
                          name="email"
                          label="Email"
                          style={{ color: "#fff", borderBottomColor: "#fff" }}
                          inputProps={{ className: classes.textfield }}
                          InputLabelProps={{
                            className: classes.paper,
                          }}
                          onChange={(e) => setEmail(e.target.value)}
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
                          onChange={(e) => setPwd(e.target.value)}
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
                          color="secondary"
                          sx={{
                            width: { xs: "100%", lg: "100%", md: "100%" },
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <Grid
                          container
                          directio="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Grid item>
                            <Checkbox
                              // checked={checked}
                              // onChange={handleChange}
                              inputProps={{ "aria-label": "controlled" }}
                            />
                            Remeber Me
                          </Grid>

                          <Grid item>Forgot Password?</Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item textAlign="center">
                  <CommonButton
                    variant="contained"
                    label="Sign in"
                    width="100%"
                    color="secondary"
                    handleClick={handleLogin}
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
export default Login;
