import { useState } from "react";
import FlashCardThumbnail from "./FlashCardThumbnail";
import { Container, Grid, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
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
            <Fab color="primary" aria-label="add" style={{ position: "absolute",right: "0",bottom: "0",margin:"2.5%" }}>
  <AddIcon />
</Fab>
            </Container>);
}
 
export default ViewAllFlashCards;