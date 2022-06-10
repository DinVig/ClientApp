import React from "react";
import Buttons from "ButtonsExample/Buttons";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import theme from "Assets/theme";
import Login from "Features/AuthScreen/Login";
import AuthScreen from "Features/AuthScreen";
import Router from "Router/index";
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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Income } from "Features/Income/Income";
import Private from "Router/Private";
import Dashboard from "Features/Dashboard";

const App = () => {
  return (
    <div>
      {/* style={{ background: "rebeccapurple", minHeight: "100vh" }} */}
      <ThemeProvider theme={theme}>
        <Router />

        {/* <Routes>
          <Route path="/auth" element={<AuthScreen />} />
          <Route
            path="/dashboard"
            element={
              <Private>
                <Dashboard />
              </Private>
            }
          />
          <Route path="/income" element={<Income />} />
        </Routes> */}
      </ThemeProvider>
    </div>
  );
};

export default App;
