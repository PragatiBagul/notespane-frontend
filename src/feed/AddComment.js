import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography, TextField } from "@mui/material";
import React from 'react';
const AddComment = () => {
    return ( <ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </ListItemAvatar>
    <TextField size="small"/>
  </ListItem> );
}
 
export default AddComment;