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
const SignIn = () => {
  const classes = useStyles();
  const [showPassword, setshowPassword] = React.useState(false);
  return (
    <div>
      <div style={{ overflowY: "hidden", overflowX: "hidden" }}>
        <Grid
          container
          spacing={0}
          direction="column"
          // alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item>
            <Typography variant="h2" className={classes.text}>
              Login
            </Typography>
          </Grid>
          <Grid item>
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
                width: { xs: "100%", lg: "70%", md: "70%" },
              }}
            />
          </Grid>
          <Grid item>
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
                width: { xs: "100%", lg: "70%", md: "70%" },
              }}
            />
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" justifyContent="flex-end">
            <Typography variant={"h6"} className={classes.forgotText}>
              Forgot Password?
            </Typography>
          </Grid>
        </Grid>

        <Grid item>
          <Typography variant={"h6"} className={classes.textcolor}>
            Sign Up
          </Typography>
        </Grid>
      </div>
    </div>
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

export default SignIn;
