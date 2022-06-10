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
} from "@mui/material";
const CommonButton = ({ variant, label, color, width, handleClick }) => {
  return (
    <>
      <Button
        variant={variant}
        color={color}
        style={{ width }}
        onClick={handleClick}
      >
        {label}
      </Button>
    </>
  );
};

export default CommonButton;
