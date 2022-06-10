import React from "react";
import MuiAlerts from "Components/Alerts/MuiAlerts";
import DashboardLayout from "Layouts/DashboardLayout/DashboardLayout";
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
  Stack,
  Avatar,
  // InputBase,
} from "@mui/material";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
// import Drawer from "Components/Drawer/Drawer";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import AvatarMenu from "Components/AvatarMenu/AvatarMenu";
const Header = (props) => {
  const classes = useStyles(props);
  const [alertOpen, setAlertOpen] = React.useState(true);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const drawerWidth = 240;
  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
//   const [drw, setDrw] = React.useState(false);
  const handleDrawerToggle = () => {
    console.log("re");
    props.setDrw(!props.drw);
  };
  const theme = useTheme();
  const { drw } = props;
  return (
    <>
      {/* <DashboardLayout> */}
      <div>
        {/* {alertOpen && (
        <MuiAlerts alertOpen={alertOpen} setAlertOpen={setAlertOpen} />
      )} */}
      </div>
      <AppBar
        position="fixed"
        // color="secondary"
        sx={{
          backgroundColor:"#fff",
          color:"#000000",
          width: drw
            ? {
                xs: `calc(100% - ${drawerWidth}px)`,
                sm: `calc(100% - ${drawerWidth}px)`,
              }
            : { xs: "100%", sm: "100%" },
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: drw
              ? theme.transitions.duration.leavingScreen
              : theme.transitions.duration.enteringScreen,
          }),
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Welcome to Your Dashboard!
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Stack direction="row" spacing={2}>
                <Avatar>H</Avatar>
              </Stack>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={drw}
      >
        sdakfjjs
      </Drawer>
      {/* <Drawer open={drw}>sd</Drawer> */}
      {/* <Drawer /> */}

      {/* </DashboardLayout> */}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: (props) => `calc(100% - 240px)`,
    marginLeft: (props) => props.drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    // marginRight: theme.spacing(2)
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    // backgroundColor:
    //   theme.palette.type === "dark"
    //     ? Fade(theme.palette.common.white, 0.15)
    //     : Fade(theme.palette.action.disabled, 0.15),
    // "&:hover": {
    //   backgroundColor:
    //     theme.palette.type === "dark"
    //       ? Fade(theme.palette.common.white, 0.25)
    //       : Fade(theme.palette.action.disabled, 0.25),
    // },
    // marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  appbarSection: {
    display: "flex",
    // display: "none",
    alignItems: "center",
    // [theme.breakpoints.up("sm")]: {
    //   display: "flex"
    // }
  },
  appbarToday: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));
export default Header;
