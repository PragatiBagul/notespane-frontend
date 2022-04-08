import ViewAllFlashCards from "./View/ViewAllFlashCards";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import NewFlashCards from "./Creation/NewFlashCards";
import ViewFlashCard from "./View/ViewFlashCard";
const FlashCards = () => {
  const [view, setView] = useState("default");
  const [id, setId] = useState(0);
  return (
  <>
      {view == "default" ? <ViewAllFlashCards setView={setView} setId={setId}/> : <></>}
      {view == "create" ? <NewFlashCards setView={setView} /> : <></>}
      {view == "play" ? <ViewFlashCard setView={setView} id={id} /> : <></>}
      </>
  );
};

export default FlashCards;
