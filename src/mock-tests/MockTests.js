import ViewAllMockTests from "./View/ViewAllMockTests";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import NewMockTest from "./Creation/NewMockTest";
import MockTest from "./View/MockTest";
import { useEffect } from "react";
const MockTests = () => {
  const [view, setView] = useState("default");
  const [id, setId] = useState(0);
  useEffect(() => {
    console.log(view);
  }, [view]);
  return (
    <>
      {view == "default" ? <ViewAllMockTests setView={setView} setId={setId} /> : <></>}
      {view == "create" ? <NewMockTest setView={setView} /> : <></>}
      {view == "play" ? <MockTest setView={setView} id={id} /> : <></>}
    </>
  );
};

export default MockTests;
