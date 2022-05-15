import * as React from 'react';
import NewTask from "./NewTask";
import AllTasks from "./AllTasks";
import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { Stack, Divider, Button, Container, CssBaseline, AppBar, Toolbar, Typography, Box, Fab } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from './ScrollTop';
import { purple, deepPurple } from "@mui/material/colors";
import url from "./url";
import { fetchTasks } from '../../../utils/RequestEndPoints';
import { useAuth } from "../../../hooks/useAuth";
const TaskApp = (props) => {
  const { user } = useAuth();
  const [refresh, setRefresh] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    console.log(user);
    console.log("Refreshing .. ");
    const fetch = async () => {
      var response = await fetchTasks();
      return response;
    };
    setTimeout(async () => {
      const response = await fetch();
      console.log(response);
      setTasks(response);
      setIsPending(false);
    }, 1000);
  }, [refresh, tasks]);
  return (
    <>
      {/*<CssBaseline />*/}
      <Toolbar id="back-to-top-anchor" />
      <Box style={{ backgroundColor: purple[50], padding: "0.25 %" }} maxWidth="100%">
        <Box
          sx={{
            backgroundColor: purple[500],
            borderRadius: '15px',
            mt: -5,
            pt: 1,
            pb: 1,
          }}
        >
          <Container maxWidth="xl">
            <Typography
              component="h3"
              variant="h3"
              align="center"
              color="white"
              gutterBottom
            >
              {user.displayName}'s Tasks
          </Typography>
          </Container>
        </Box>
        {/*<Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start">
          <Typography variant="h3" sx={{ color: purple[700], mt: -5 }}>Pragati's Task</Typography>
        </Stack>
        <Divider />*/}
        <Box>
          <Container style={{ padding: "1%", marginBottom: "1%" }} maxWidth="xl">
                <NewTask refresh={refresh} setRefresh={setRefresh} update={false} />    
            </Container>
          <AllTasks tasks={tasks} refresh={refresh} setRefresh={setRefresh} isPending={isPending} />  
            </Box>
      </Box>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
    );
}
 
export default TaskApp;

