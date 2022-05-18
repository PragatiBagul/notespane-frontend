import { Container, Box, Stack, Divider, Button } from "@mui/material";
import QuestionTypeEditable from "../../questionTypes/QuestionTypeEditable";
import NewMockTestThumbnail from "./NewMockTestThumbnail";
import { useState } from "react";
import CreateNewMockTest from "./CreateNewMockTest";
import HomeIcon from '@mui/icons-material/Home';
import { createMockTest } from "../../utils/RequestEndPoints";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import useWindowDimensions from "../../utils/useWindowDimensions";

import "../../css/general.css";
const NewMockTest = ({ setView }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mode, setMode] = useState("public");
  const [mockTest, setMockTest] = useState([]);
  const { width, height } = useWindowDimensions();
  const saveMockTest = () => {
    if (mockTest.length == 0) {
      alert("A mocktest can't have 0 questions");
    }
    else {
      const body = {
        "title": title,
        "description": description,
        "mocktestData": mockTest,
        "mode": mode
      };
      console.log(body);
      const res = createMockTest(body).then(() => {
        console.log('new mock test added');
      })
      setView("default");
    }
  }
  return (

    <Box sx={{ p: 2, height: height }} className="infinitescroll">
      <Button onClick={() => setView("default")}><ChevronLeftIcon /> All Tests </Button>
      <Stack spacing={2}>
        <CreateNewMockTest mode={mode} setMode={setMode} title={title} setTitle={setTitle} description={description} setDescription={setDescription} saveMockTest={saveMockTest} />
        <Divider />
        {mockTest.map((questions, index) => (
          <QuestionTypeEditable id={index} key={index} mockTests={mockTest} setMockTests={setMockTest} />
        ))}
        <NewMockTestThumbnail mockTests={mockTest} setMockTests={setMockTest} />
      </Stack>
    </Box>);
}

export default NewMockTest;