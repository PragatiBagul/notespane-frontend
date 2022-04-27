import { useState,useEffect } from "react";
import FlashCardThumbnail from "./FlashCardThumbnail";
import { Container, Grid, Fab,Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { fetchAllFlashCards } from "../../utils/RequestEndPoints";
const ViewAllFlashCards = ({setView,setId }) => {
    const [flashCards, setFlashCards] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [publicFlashCards,setPublicFlashCards] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            var response = await fetchAllFlashCards();
            return response;
          };
          setTimeout(async () => {
            const response = await fetch();
            setFlashCards(response);
            setIsPending(false);
          }, 1000);
    }, []);
    
    return (
        <Container>
        <Grid container spacing={2}>{!isPending && flashCards.map((flashCard, index) => (
            <FlashCardThumbnail key={index} flashCard={flashCard} setView={setView} setId={setId}/>
        ))}</Grid>
            <Divider/>
            <Grid container spacing={2}>{!isPending && publicFlashCards.map((flashCard, index) => (
            <FlashCardThumbnail key={index} flashCard={flashCard} setView={setView} setId={setId}/>
        ))}</Grid>
    </Container>);
}
 
export default ViewAllFlashCards;