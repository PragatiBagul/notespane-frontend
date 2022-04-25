/*Importing Indigenous Components */
import UserHome from "../user/UserHome";
import Feed from "../feed/Feed";
import Calculator from "../calculator/Calculator";
import FlashCards from "../flash-cards/FlashCards";
import MockTests from "../mock-tests/MockTests";
import MotivationalMusic from "../motivational-music/MotivationalMusic";
import TaskApp from "../planner-and-scheduler/taskapp/TaskApp/TaskApp";
import Trash from "../trash/Trash";
import Saved from "../saved/Saved";
import Notebook from "../notebook/Notebook";
import HelpGuide from "../help-guide/HelpGuide";
import Courses from "../courses/Courses";
import { useAuth } from "../hooks/useAuth";
import { styled } from "@mui/material/styles";

/*Importing icons from material icons */
import HomeIcon from "@mui/icons-material/HomeIcon";
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
import MusicNoteIcon from "@mui/icons-material/MusicNote";

import MuiDrawer from "@mui/material/Drawer";

import {
    Switch,
    Tooltip,
    Container,
    Menu,
    MenuItem,
    Avatar,
    Box,
    Toolbar,
    List,
    CssBaseline,
    Typography,
    Divider,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    IconButton,
    Button,
} from "@mui/material";

import { useState } from "react";

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
      case "Home":
        return <HomeIcon/>
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


const FeaturesNavigation = ({ setCurrentNavigation }) => {
  const { Logout, user, isAuthenticating } = useAuth();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Feed");
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [displayMusic, setDisplayMusic] = useState(false);

    return ( <><Drawer
        variant="permanent"
        open={open}
        onMouseOver={handleDrawerOpen}
        onMouseLeave={handleDrawerClose}
      >
        <DrawerHeader />
        <Divider />
        <List>
        {[
            "Home",
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
            <ListItemButton key={text} onClick={() => { setSelected(text); setCurrentNavigation(text); }}>
              <ListItemIcon>{renderSwitch(text)}</ListItemIcon>
              <ListItemText primary={text} />
              {text == "Music" && (
                <Switch onChange={(e) => setDisplayMusic(e.target.checked)} />
              )}
            </ListItemButton>
          ))}
          {displayMusic && (
            <ListItemButton v key={"music"} style={{ marginTop: "100%" }}>
              <ListItemIcon>
                <MusicNoteIcon />
              </ListItemIcon>
            </ListItemButton>
          )}
        </List>
      </Drawer>
      <Box component="main" sx={{ p: 2 }}>
        <DrawerHeader />
        {selected == "Home" && <UserHome uid={ user.uid}/>}
        {selected == "Feed" && <Feed />}
        {selected == "Mock Tests" && <MockTests />}
        {selected == "Notebook" && <Notebook />}
        {selected == "Courses" && <Courses />}
        {selected == "Saved" && <Saved />}
        {selected == "Flash Cards" && <FlashCards />}
        {selected == "Calculator" && <Calculator />}
        {selected == "Planner" && <TaskApp />}
        {selected == "Schedule" && <TaskApp />}
        {selected == "Music" && <MotivationalMusic />}
        {selected == "Help Guide" && <HelpGuide />}
        {selected == "Trash" && <Trash />}
      </Box></>);
}
 
export default FeaturesNavigation;