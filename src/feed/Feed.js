import { Stack,Container } from "@mui/material";
import Post from "./Post";
import "./Post.css";
const Feed = () => {
    return (
        <Container>
        <Stack className="feed" spacing={2}>
         {[...Array(20)].map((e, i) => (
          <Post/>
        ))}
    </Stack></Container> );
}

export default Feed;