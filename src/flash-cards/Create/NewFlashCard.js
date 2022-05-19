import { Container, Box, Stack, Divider, Button } from "@mui/material";
import QuestionTypeEditable from "./QuestionTypeEditable";
import NewFlashCardThumbnail from "./NewFlashCardThumbnail";
import { useState } from "react";
import CreateNewFlashCard from "./CreateNewFlashCard";
import HomeIcon from '@mui/icons-material/Home';
import { createFlashCard } from "../../utils/RequestEndPoints";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import useWindowDimensions from "../../utils/useWindowDimensions";
import "../../css/general.css";
const NewFlashCard = ({ setView }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [mode, setMode] = useState("public");
    const [flashCard, setFlashCard] = useState([]);
    const { width, height } = useWindowDimensions();
    const saveFlashCard = async () => {
        if (flashCard.length == 0) {
            alert("A flashcard can't have 0 questions");
        }
        else {
            const body = {
                "flashcardName": title,
                "flashcardDescription": description,
                "flashcardData": flashCard,
                "mode": mode
            };
            console.log(body);
            const res = await createFlashCard(body).then(() => {
                console.log('new flash cards added');
            });
            setView("default");
        }
    }
    return (
        <Box sx={{ p: 2, height: height }} className="infinitescroll">
            <Button onClick={() => setView("default")}><ChevronLeftIcon /> All Flash Cards </Button>
            <Stack spacing={2}>
                <CreateNewFlashCard mode={mode} setMode={setMode} title={title} setTitle={setTitle} description={description} setDescription={setDescription} saveFlashCard={saveFlashCard} />
                <Divider />
                {flashCard.map((questions, index) => (
                    <QuestionTypeEditable id={index} key={index} flashCards={flashCard} setFlashCards={setFlashCard} />
                ))}
                <NewFlashCardThumbnail flashCards={flashCard} setFlashCards={setFlashCard} />
            </Stack>
        </Box>);
}

export default NewFlashCard;