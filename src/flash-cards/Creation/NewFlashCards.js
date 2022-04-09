import { Container, Stack,Divider,Fab,Typography } from "@mui/material";
import QuestionTypeEditable from "../../questionTypes/QuestionTypeEditable";
import NewFlashCardThumbnail from "./NewFlashCardThumbnail";
import { useState } from "react";
import CreateNewFlashCards from "./CreateNewFlashCards";
import HomeIcon from '@mui/icons-material/Home';
const NewFlashCards = ({setView}) => {
    const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mode, setMode] = useState("public");
  const [flashCards, setFlashCards] = useState([]);

    const saveFlashCards = () => {
        const body = { title, description, flashCards,mode };
        fetch(' http://localhost:8000/flashCards/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).then(() => {
      console.log('new flash card added');
    })
      setView("default");
    }
  return (

    <Container sx={{ p: 2 }}>
       <Fab color="primary" flex="start" style={{left:0}} aria-label="add" onClick={() => setView("default")}>
  <HomeIcon/>
</Fab>
      <Stack spacing={2}>   
        <CreateNewFlashCards mode={mode} setMode={ setMode} title={title} setTitle={setTitle} description={description} setDescription={ setDescription} saveFlashCards={ saveFlashCards}/>
            <Divider />
            {flashCards.map((flashCard,index) => (
              <QuestionTypeEditable id={ index} key={index} flashCards={flashCards} setFlashCards={ setFlashCards}/>
            ))}
        <NewFlashCardThumbnail flashCards={flashCards} setFlashCards={setFlashCards} />
      </Stack>
    </Container>);
}
 
export default NewFlashCards;