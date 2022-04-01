import { useState } from "react";
import FlashCardThumbnail from "./FlashCardThumbnail";
import { Container,Grid } from "@mui/material";
const ViewAllFlashCards = () => {
    const [flashCards, setFlashCards] = useState([
        {"id":1,"title":"Title 1","description":"Description 1"},
        { "id": 2, "title":"Title 2", "description":"Description 2"},
        { "id": 3, "title":"Title 3", "description":"Description 3"},
        {"id":4,"title":"Title 4","description":"Description 4"},
        { "id": 5, "title":"Title 5", "description":"Description 5"},
        {"id":6,"title":"Title 6","description":"Description 6"}
    ]);
    return (
        <Container>
        <Grid container spacing={2}>{flashCards.map((flashCard, index) => (
        <FlashCardThumbnail flashCard={flashCard} />
        ))}</Grid>
            </Container>);
}
 
export default ViewAllFlashCards;