import { useState,useEffect } from "react";
import FlashCardThumbnail from "./FlashCardThumbnail";
import { Container, Grid, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
const ViewAllFlashCards = ({setView,setId }) => {
    const [flashCards, setFlashCards] = useState([]);
    const [isPending, setIsPending] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/flashCards')
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setFlashCards(data.filter((flashCard,index) => flashCard.mode === "public"));
                    setIsPending(false);
                })
        }, 1000);
    }, []);
    
    return (
        <Container>
        <Grid container spacing={2}>{!isPending && flashCards.map((flashCard, index) => (
            <FlashCardThumbnail key={index} flashCard={flashCard} setView={setView} setId={setId}/>
        ))}</Grid>
            <Fab color="primary" aria-label="add" style={{ position: "absolute",right: "0",bottom: "0",margin:"2.5%" }} onClick={() => setView("create")}>
  <AddIcon />
</Fab>
            </Container>);
}
 
export default ViewAllFlashCards;