import { Stack, Grid, Box, Card, CardHeader, Skeleton, CardContent } from "@mui/material";
import Post from "./View/Post";
import React from "react";
import "../css/general.css";
import useWindowDimensions from "../utils/useWindowDimensions";
import { useState, useEffect } from "react";
import { deepPurple } from "@mui/material/colors";
import { fetchPosts } from "../utils/RequestEndPoints";
import Footer from "../footer/Footer";
import PostSkeleton from "./skeleton/PostSkeleton";
const Feed = () => {
  const { height, width } = useWindowDimensions();
  const [posts, setPosts] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      var response = await fetchPosts();
      console.log(response);
      return response;
    };
    setTimeout(async () => {
      const response = await fetch();
      setPosts(response);
      setIsPending(false);
      setRefresh(true);
    }, 1000);
  }, [refresh]);
  return (
    <Box className="infinitescroll" style={{ width: "100%", height: height }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        {isPending && (
          <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
            <Stack style={{ alignSelf: "center" }} spacing={2}>
              {[...Array(5)].map((post, i) => (
                <PostSkeleton />
              ))}
            </Stack>
          </Grid>
        )}
        {!isPending && (
        <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
          <Stack style={{ alignSelf: "center" }} spacing={2}>
            {posts.map((post, i) => (
              <Post key={i} post={post} />
            ))}
          </Stack>
          </Grid>)}
        </Grid>
      <Footer />
    </Box>);
}

export default Feed;