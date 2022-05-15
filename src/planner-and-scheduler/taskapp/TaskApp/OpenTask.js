import { Input,Button, Dialog, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import useFetch from './useFetch';
import NewTaskList from './TaskList/NewTaskList';
import NewTaskContent from './TaskContent/NewTaskContent';
import ClearOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { useState } from 'react';
import url from "./url";
import { taskUpdate, taskDelete } from '../../../utils/RequestEndPoints';
const OpenTask = ({ refresh, setRefresh, onClose, task, open }) => {

  const [taskTitle, setTaskTitle] = useState("");
  const [taskContent, setTaskContent] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [isTaskList, setIsTaskList] = useState(false);
  const [refreshCurrent, setRefreshCurrent] = useState(true);
  useEffect(() => {
    setTaskTitle(task.taskTitle);
    if (task.taskType === "content") {
      setIsTaskList(false);
      setTaskContent(task.taskContent);
    } else {
      setIsTaskList(true);
      setTaskList(task.taskList);
    }
    if (taskTitle != null) {
      setIsPending(false);
    }
    console.log(taskTitle);
    setRefreshCurrent(false);
  }, [refreshCurrent])

  const handleClose = () => {
    onClose();
  };

  const clearTask = () => {
    setTaskTitle(null);
    if (isTaskList) {
      setTaskList([]);
    }
    else {
      setTaskContent("");
    }
  }

  const updateTask = (e) => {
    console.log("updating...");
    emptyTaskAlert();
    const taskType = isTaskList ? "list" : "content";
    const t = isTaskList ? {
      "documentId": task.documentId,
      "taskTitle": taskTitle,
      "taskList": taskList,
      "taskType": taskType
    } : {
      "documentId": task.documentId,
      "taskTitle": taskTitle,
      "taskContent": taskContent,
      "taskType": taskType
    };

    console.log(t);
    setIsPending(true);
    //Update task function call here
    const fetch = async () => {
      var response = await taskUpdate(t);
      return response;
    };
    setTimeout(async () => {
      const response = await fetch();
      console.log(response);
      setIsPending(false);
    }, 1000);

    setIsPending(false);
    setTaskTitle("");
    isTaskList ? setTaskList([]) : setTaskContent("");
    setRefresh(!refresh);
    handleClose();
  }
  
  const emptyTaskAlert = () => {
    if (isTaskList) {
      if ((taskTitle == null || taskTitle === "") &&
        (taskList.length == 0)) {
        alert("Cannot add an empty task");
      }
    }
    else {
      if ((taskTitle == null || taskTitle === "") &&
        (taskContent == null || taskContent === "")) {
        alert("Cannot add an empty task");
      }
    }
  }
  
  const deleteTask = () => {
    alert("Are you sure you want to delete the task?");
    const taskType = isTaskList ? "list" : "content";
    const t = isTaskList ? { taskTitle, taskList, taskType } : { taskTitle, taskContent, taskType };
    setIsPending(true);

    const fetch = async () => {
      var response = await taskDelete(task.documentId);
      return response;
    };
    setTimeout(async () => {
      const response = await fetch();
      console.log(response);
      setIsPending(false);
    }, 1000);

    console.log('Task deleted');
    setIsPending(false);
    setRefresh(!refresh);
    handleClose();
  }
  return (
    <>
      {!isPending && (
        <Dialog onClose={handleClose} open={open} >
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                fullWidth
                placeholder="Task Title"
                style={{ marginBottom: '0.5%' }} />
              {isTaskList ? <NewTaskList taskList={taskList} setTaskList={setTaskList} /> : <NewTaskContent taskContent={taskContent} setTaskContent={setTaskContent} />}
            </CardContent>
            <CardActions>
              <Button onClick={clearTask}><ClearOutlinedIcon />&emsp;Clear</Button>
              <Button onClick={updateTask}><AddTaskIcon />&emsp;Save</Button>
              <Button color="error" onClick={deleteTask}><DeleteOutlineOutlinedIcon fontSize='inherit' />&emsp;Delete</Button>
            </CardActions>
          </Card>
        </Dialog>
      )}
    </>
  );
}

export default OpenTask;

/*
  
*/