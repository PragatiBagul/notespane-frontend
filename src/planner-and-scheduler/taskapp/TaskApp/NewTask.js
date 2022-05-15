import { Card, CardActions, CardContent, Input, TextField, Button, IconButton } from "@mui/material";
import { useState } from "react";
import ClearOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import NewTaskList from './TaskList/NewTaskList';
import NewTaskContent from './TaskContent/NewTaskContent';
import { createTask } from "../../../utils/RequestEndPoints";
import url from "./url";
const NewTask = ({refresh,setRefresh}) => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskContent, setTaskContent] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [isPending, setIsPending] = useState(false);
    const [isTaskList, setIsTaskList] = useState(false);
    const clearTask = () => {
        setTaskTitle(null);
        if (isTaskList)
        {
            setTaskList([]);    
        }
        else
        {
            setTaskContent("");
        }
    }

    const addTask = async (e) => {
        //e.preventDefault();
        emptyTaskAlert();   
        const taskType = isTaskList ? "list" : "content";
        const t = isTaskList ? {
            "taskTitle": taskTitle,
            "taskList": taskList,
            "taskType": taskType
        } : { "taskTitle": taskTitle, "taskContent": taskContent, "taskType": taskType };
        setIsPending(true);

        const response = await createTask(t).then(() => {
            console.log('new task added');
            setIsPending(false);
        }).then(() => {
            setTaskTitle("");
        }).then(() => {
            isTaskList ? setTaskList([]) : setTaskContent("");
        }).then(() => {
            setRefresh(!refresh);
        });
    }

    const convertTaskType = () => {
        setIsTaskList(!isTaskList);
    }

    const emptyTaskAlert = () =>
    {
        if (isTaskList)
        {
            if ((taskTitle == null || taskTitle === "") &&
                (taskList.length == 0))    
            {
                alert("Cannot add an empty task");
            }
        }
        else
        {
            if ((taskTitle == null || taskTitle === "") &&
            (taskContent == null || taskContent === ""))    
            {
                alert("Cannot add an empty task");
            }
        }
    }
    return (<Card sx={{ boxShadow: "3", borderRadius: "15px" }}>
        <CardContent>
        <Input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
                fullWidth
                placeholder="Task Title"
            style={{ marginBottom: '0.5%' }} />
            {isTaskList ? <NewTaskList taskList={taskList} setTaskList={ setTaskList}/> : <NewTaskContent taskContent={taskContent} setTaskContent={ setTaskContent}/> }
        </CardContent>
        <CardActions>
        {!isTaskList && <IconButton color="primary" onClick={convertTaskType}><FormatListBulletedOutlinedIcon fontSize='inherit' /></IconButton>}
            {isTaskList && <IconButton color="primary" onClick={convertTaskType}><ArticleOutlinedIcon fontSize='inherit' /></IconButton>}
            <Button onClick={clearTask}><ClearOutlinedIcon/>&emsp;Clear</Button>
            <Button onClick={addTask}><AddTaskIcon/>&emsp;Save</Button>
        </CardActions>
        <CardActions>
            
        </CardActions>
    </Card> );
}
export default NewTask;