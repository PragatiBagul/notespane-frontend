import * as React from "react";
import { styled } from "@mui/material/styles";
import { fetchData } from "../utils/RequestEndPoints";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  Switch,
  Tooltip,
  Container,
  Menu,
  MenuItem,
  Avatar,
  Box,
  Toolbar,
  MenuList,
  CssBaseline,
  Typography,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Button,
} from "@mui/material";

import MuiAppBar from "@mui/material/AppBar";

import UserProfile from "../user/UserProfile";

import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import FeaturesNavigation from "./FeaturesNavigation";
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
export default function Home() {
  useEffect(() => {
    console.log(isAuthenticating);
    console.log(user);
  }, []);

  const { Logout, user, isAuthenticating } = useAuth();

  const login = () => {
    navigate("/login");
  };

  const pages = ["Products", "Pricing", "Blog"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logOut = async () => {
    try {
      await Logout();
      localStorage.removeItem(user);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const [action, setAction] = useState("home");
  const [data, setData] = useState();
  const [currentNavigation, setCurrentNavigation] = useState();
  const setActionTest = (value) => {
    setAction(value);
    console.log(action);
  }
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              edge="start"
              onClick={() => setActionTest("home")}
            >
              Notespane <ChevronRightIcon  fontSize="large"/> {currentNavigation}
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {user == null ? (
                  <MenuItem>
                    <Button onClick={login}>Log In</Button>
                  </MenuItem>
                ) : (
                  <></>
                )}
                {/*pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))*/}
              
    </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              edge="start"
              onClick={() => setActionTest("home")}
            >
              Notespane  <ChevronRightIcon fontSize="large"/> {currentNavigation}
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {/*pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))*/}
            </Box>
            {user == null ? (
              <Box sx={{ flexGrow: 0 }}>
                <Button
                  sx={{ my: 2, color: "white", display: "block" }}
                  onClick={login}
                >
                  Log In
                </Button>
              </Box>
            ) : (
              <></>
            )}
            {user && (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt={user.displayName}
                      src={ user.photoURL}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuList>
                  <MenuItem key={"profile"} onClick={() => setActionTest("profile")}>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                    <MenuItem key={ "logout"} onClick={logOut}>
                    <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                    </MenuList>
                </Menu>
              </Box>
            )}
          </Toolbar>
        </Container>
                </AppBar>
      <Container>
        {action == "profile" && <UserProfile data={ data}/>}
        {action == "home" && <FeaturesNavigation setCurrentNavigation={ setCurrentNavigation}/>}
        </Container>
    </Box>
  );
}