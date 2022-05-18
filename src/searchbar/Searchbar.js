import React, { useEffect, useState } from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import { experimentalStyled as styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { fetchUsers } from "../utils/RequestEndPoints";
import ViewTopic from "./ViewTopic";
import Preloader from "../preloader/Preloader";
import { useAuth } from "../hooks/useAuth";
import {
  List,
  Box,
  Input,
  ListItemButton,
  Grid,
  Typography,
  Paper,
  TextField,
  IconButton,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import ViewUser from "./ViewUser";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function Searchbar() {
  const [filteredData, setFilteredData] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [view, setView] = useState("default");
  const [user, setUser] = useState(null);
  const [selected, setSelected] = useState(null);
  const { user: self } = useAuth();
  useEffect(() => {
    const fetch = async () => {
      var response = await fetchUsers();
      console.log(response);
      return response;
    };
    setTimeout(async () => {
      const response = await fetch();
      setAllUsers(response);
      setIsPending(false);
    }, 1000);
  }, []);

  const handleChange = (newValue) => {
    const searchWord = newValue.toLowerCase();
    if (searchWord === "") {
      setFilteredData([]);
      return;
    }
    const newFilter = allUsers.filter((value) => {
      return value.name.toLowerCase().includes(searchWord);
    });
    setFilteredData(newFilter);
  };

  return (
    <>
      {isPending && <Preloader />}
      {!isPending && (<div className="infinitescroll">
        {view == "default" && (
          <>
      <TextField
        type="search"
        placeholder="Type Username..."
        onChange={(e) => handleChange(e.target.value)}
        onCancelSearch={() => handleChange("")}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          width: 1 / 2,
          mt: 2,
          p: 2,
        }}
        autoComplete="false"
      />
            <List>
              {filteredData.length !== 0 && (
                filteredData.slice(0, 6).map((value, key) => (
                  <ListItemButton key={key} onClick={() => { setView("userview"); setUser(value); }}>
                    <Box
                      sx={{
                        bgcolor: "background.paper",
                        boxShadow: 1,
                        borderRadius: 2,
                        p: 2,
                        width: 1,
                        "&:hover": {
                          boxShadow: 8,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          color: "text.primary",
                          fontSize: 20,
                          fontWeight: "light",
                        }}
                      >
                        {value.name}
                      </Box>
                      <Box
                        sx={{
                          color: "text.secondary",
                          display: "inline",
                          fontSize: 14,
                        }}
                      >
                        <Typography>{value.name}</Typography>
                      </Box>
                    </Box>
                  </ListItemButton>
                )))}
            </List>
          </>)}
        {
          view == "userview" && (<ViewUser setView={setView} setSelected={setSelected} currentUser={user} isSelf={user.uid == self.uid} />)
        }
        {view == "viewTopic" && <ViewTopic setView={setView} currentUser={user} topic={selected} isSelf={self.uid === user.uid} />}
      </div>)
      }

    </>
  );
}
