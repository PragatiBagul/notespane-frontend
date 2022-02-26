import * as React from "react";
import { styled } from "@mui/material/styles";
import { Tooltip,Container,Menu,MenuItem,Avatar,Box, Toolbar, List, CssBaseline, Typography, Divider, ListItem, ListItemIcon, ListItemText,IconButton,Button} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import RuleOutlinedIcon from "@mui/icons-material/RuleOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import QueueMusicOutlinedIcon from "@mui/icons-material/QueueMusicOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

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

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const renderSwitch = (param) => {
  switch (param) {
    case "Feed":
      return <DynamicFeedOutlinedIcon />;
    case "Mock Tests":
      return <RuleOutlinedIcon />;
    case "Notebook":
      return <BookOutlinedIcon />;
    case "Courses":
      return <CastForEducationOutlinedIcon />;
    case "Saved":
      return <BeenhereOutlinedIcon />;
    case "Flash Cards":
      return <StyleOutlinedIcon />;
    case "Calculator":
      return <CalculateOutlinedIcon />;
    case "Planner":
      return <FactCheckOutlinedIcon />;
    case "Schedule":
      return <EventOutlinedIcon />;
    case "Music":
      return <QueueMusicOutlinedIcon />;
    case "Help Guide":
      return <HelpCenterOutlinedIcon />;
    case "Trash":
      return <DeleteForeverOutlinedIcon />;
    default:
      return "foo";
  }
};
export default function Home() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    console.log(isAuthenticating);
  }, []);

  const { Logout, user, isAuthenticating } = useAuth();

  const login = () => {
    navigate("/login");
  }

  const pages = ['Products', 'Pricing', 'Blog'];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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

  const viewProfile = () => {
    console.log(user.displayName);
  }

  const logOut = async () => {
    try {
      await Logout();
      localStorage.removeItem(user);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
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
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            edge="start"
          >
            Notespane
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {user == null ?
                <MenuItem>
                  <Button onClick={login}>Log In</Button>
                </MenuItem> : <></>}
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
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            edge="start"
          >
            Notespane
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/*pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))*/
            }
              
          </Box>
          {user == null ? <Box sx={{ flexGrow: 0 }}><Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={login}>Log In</Button></Box> : <></>}
          {user && <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={viewProfile}>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              <MenuItem onClick={logOut}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>}
        </Toolbar>
      </Container>
    </AppBar>
    <Drawer
      variant="permanent"
      open={open}
      onMouseOver={handleDrawerOpen}
      onMouseLeave={handleDrawerClose}
    >
      <DrawerHeader />
      <Divider />
      <List>
        {[
          "Feed",
          "Mock Tests",
          "Notebook",
          "Courses",
          "Saved",
          "Flash Cards",
          "Calculator",
          "Planner",
          "Schedule",
          "Music",
          "Help Guide",
          "Trash",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{renderSwitch(text)}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
    <Box component="main" sx={{ p: 2 }}>
      <DrawerHeader />
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
        dolor purus non enim praesent elementum facilisis leo vel. Risus at
        ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
        quisque non tellus. Convallis convallis tellus id interdum velit
        laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
        adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
        integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
        eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
        quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
        vivamus at augue. At augue eget arcu dictum varius duis at consectetur
        lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
        faucibus et molestie ac.
      </Typography>
      <Typography paragraph>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
        ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
        elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
        sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
        mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
        risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
        purus viverra accumsan in. In hendrerit gravida rutrum quisque non
        tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
        morbi tristique senectus et. Adipiscing elit duis tristique
        sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
        eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
        posuere sollicitudin aliquam ultrices sagittis orci a.
      </Typography>
    </Box>
  </Box>
  );
}