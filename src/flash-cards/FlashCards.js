import ViewAllFlashCards from "./View/ViewAllFlashCards";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import NewFlashCards from "./Creation/NewFlashCards";
const FlashCards = () => {
  const [view, setView] = useState("default");
  return (
  <>
      {view == "default" ? <ViewAllFlashCards setView={setView} /> : <></>}
      {view == "create" ? <NewFlashCards setView={ setView}/> : <></>}
      </>
  );
};

export default FlashCards;
