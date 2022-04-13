import { List,ListItem, ListItemAvatar, Avatar, ListItemText,Typography, IconButton} from "@mui/material";
import React from 'react'
import CommentIcon from '@mui/icons-material/Comment';
import CommentReply from "./CommentReply";
import { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Comment = ({ replies, setReplies }) => {
  const [like, setLike] = useState(false);
  return (<>
    <ListItem alignItems="flex-start" fullWidth disableGutters
      secondaryAction={
        <>
          <IconButton onClick={() => setLike(!like)}>
            {!like && <FavoriteBorderIcon />}
            {like && <FavoriteIcon color="error" />}
          </IconButton>
        <IconButton>
          <CommentIcon />
        </IconButton>
        </>
      }>
    <ListItemAvatar>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </ListItemAvatar>
    <ListItemText
      secondary={
        <React.Fragment>
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            Ali Connors
          </Typography>
          {" — I'll be in your neighborhood doing errands this…"}
        </React.Fragment>
      }
      />
    </ListItem>
        <List>
      {[...Array(5)].map((e, i) => (
          <>
          <CommentReply replies={replies} setReplies={setReplies} />
          </>
          ))}
        </List>
  </>);
}
 
export default Comment;