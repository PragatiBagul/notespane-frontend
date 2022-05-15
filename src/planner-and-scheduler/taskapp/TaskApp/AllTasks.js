import { CircularProgress, IconButton, Box, Grid, Card, CardContent, Typography, CardActions } from "@mui/material";
import ViewTaskList from "./TaskList/ViewTaskList";
import { useState } from "react";
import { Check } from "@mui/icons-material";
import OpenTask from "./OpenTask";
import { useEffect } from "react";
const AllTasks = ({ refresh, setRefresh, tasks, isPending }) => {
    const [raised, setRaised] = useState(-1);   
    const [open, setOpen] = useState(false);
    const [cardId,setCardId] = useState(-1);

    const handleClickOpen = (id) => {
        setCardId(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        console.log(tasks);
    }, []);
    return (
        <Box maxWidth="100%">
            {isPending && <CircularProgress color="secondary" />}
            {
            !isPending &&
                <Grid container rowSpacing={3} columnSpacing={3}>
                    {tasks.map((task,index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
                            <Card key={index} sx={{ maxHeight: '100%', maxWidth: '100%', margin: "0.25%", borderRadius: "15px" }} raised={raised == index ? true : false} onMouseOver={() => setRaised(index)} onMouseLeave={() => setRaised(-1)} onClick={() => handleClickOpen(index)}>
                                <CardContent sx={{maxHeight:'100%'}}>
                                    <Typography variant="h5">{task.taskTitle}</Typography>
                                    <hr />
                                    {task.taskType == "content" &&
                                        <Typography className="alignLeft" variant="p">
                                                {task.taskContent}
                                        </Typography>}
                                    {task.taskType == "list" && <ViewTaskList taskList={task.taskList} />}
                                    <br/>
                                </CardContent>
                            </Card>
                        </Grid>))}
                        {open && <OpenTask
                            task={tasks[cardId]}
                            open={open}
                            onClose={handleClose}
                            refresh={refresh}
                            setRefresh={setRefresh}
                        />}
                </Grid>
            }
        </Box>);
}
export default AllTasks;