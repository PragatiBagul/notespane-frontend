import { Container, Stack,Divider,Button } from "@mui/material";
import QuestionType from "../../questionTypes/QuestionType";
import NewFlashCardThumbnail from "./NewFlashCardThumbnail";
import { useState } from "react";
import CreateNewFlashCards from "./CreateNewFlashCards";
const NewFlashCards = () => {
    const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mode, setMode] = useState("public");
  const [flashCards, setFlashCards] = useState([]);

    const saveFlashCards = () => {
        const body = { title, description, flashCards };
        fetch(' http://localhost:8000/flashCards/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).then(() => {
      console.log('new flash card added');
    })
    }
  
    const click = () => {
      console.log(flashCards);
  }
    return (<Container>
        <Stack spacing={2}>
        <CreateNewFlashCards mode={mode} setMode={ setMode} title={title} setTitle={setTitle} description={description} setDescription={ setDescription} saveFlashCards={ saveFlashCards}/>
            <Divider />
            {flashCards.map((flashCard,index) => (
              <QuestionType id={ index} key={index} flashCards={flashCards} setFlashCards={ setFlashCards}/>
            ))}
        <NewFlashCardThumbnail  flashCards={flashCards} setFlashCards={ setFlashCards} />
      </Stack>
    </Container>);
}
 
export default NewFlashCards;