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
  Fade,
  Drawer,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Popper,
  ListItemIcon,
  Grow,
  MenuList,
  // InputBase,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
// import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
const AvatarMenu = (props) => {
  const classes = useStyles(props);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <ListItem
        button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        alignItems="flex-start"
        className={classes.paddingRightZero}
      >
        <ListItemAvatar>
          <Stack direction="row" spacing={2}>
            <Avatar>H</Avatar>
          </Stack>
          {/* <OftadehAvatarBadge
            overlap="circle"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            variant="dot"
          >
            <Avatar
              alt="Mohammad Oftadeh"
              src="https://lh5.googleusercontent.com/-WqhFe4eMggE/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFUa5CK9Wi6g5qd8ZUt6apKFYSwA/photo.jpg?sz=328"
            />
          </OftadehAvatarBadge> */}
        </ListItemAvatar>
        <Paper>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography component="span" variant="subtitle2">
                  Mohammad Oftadeh
                </Typography>
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="caption"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Admin
                </Typography>
              </React.Fragment>
            }
          />
        </Paper>
      </ListItem>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow">
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon className={classes.menuIcon}>
                      <PersonIcon fontSize="small" />
                    </ListItemIcon>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon className={classes.menuIcon}>
                      <SettingsIcon fontSize="small" />
                    </ListItemIcon>
                    settings
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon className={classes.menuIcon}>
                      <ExitToAppIcon fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  inline: {
    display: "inline",
  },
  menuIcon: {
    minWidth: "33px",
  },
  paddingRightZero: {
    paddingRight: 0,
  },
}));

export default AvatarMenu;
