import { Stack, Grid, Box } from "@mui/material";
import Post from "./View/Post";
import "../css/general.css";
import useWindowDimensions from "../utils/useWindowDimensions";
import { useState, useEffect } from "react";
import { deepPurple } from "@mui/material/colors";
import { fetchPosts } from "../utils/RequestEndPoints";
const Feed = () => {
  const { height, width } = useWindowDimensions();
  const [posts, setPosts] = useState([]);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    const fetch = async () => {
      var response = await fetchPosts();
      return response;
    };
    setTimeout(async () => {
      const response = await fetch();
      setPosts(response);
      setIsPending(false);
    }, 1000);
  }, []);
  return (
    <Box className="infinitescroll" style={{ width: "100%", height: height }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
          <Stack style={{ alignSelf: "center" }} spacing={2}>
            {posts.map((post, i) => (
              <Post key={i} post={post} />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>);
}

export default Feed;