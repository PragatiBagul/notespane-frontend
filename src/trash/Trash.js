import { Button } from "@mui/material";
import { fetchFollowedTopics } from "../utils/RequestEndPoints";
import { useAuth } from "../hooks/useAuth";
const Trash = () => {
  const { user } = useAuth();
  const fetchSomething = async () => {
    const response = await fetchFollowedTopics(user.uid);
    console.log(response);
  }
  return <Button onClick={fetchSomething}> Click Me</Button>;
};

export default Trash;
