import { List,ListItem,TextField,ListItemAvatar,Avatar,ListSubheader } from "@mui/material";
import Comment from "./Comment";
import "./Post.css";
import React, { useState } from 'react'
const CommentSection = () => {
  const [replies, setReplies] = useState([]);
  return (
    <>
      <List disablePadding subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Add a comment
        </ListSubheader>
      }>
       <ListItem alignItems="flex-start" position="sticky">
    <ListItemAvatar>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </ListItemAvatar> 
    <TextField size="small" fullWidth/>
  </ListItem>
      </List>
        <List className="commentSection" sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Comments
        </ListSubheader>
      }
      >
          
        {[...Array(5)].map((e, i) => (
          <Comment key={ i}replies={replies} setReplies={ setReplies}/>
        ))}
    </List>
    </>);
}
 
export default CommentSection;