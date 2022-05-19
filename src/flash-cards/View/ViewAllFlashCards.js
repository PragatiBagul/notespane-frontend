import { useState,useEffect } from "react";
import FlashCardThumbnail from "./FlashCardThumbnail";
import { Container, Typography, Box, Grid, Fab, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { fetchAllFlashCards } from "../../utils/RequestEndPoints";
import useWindowDimensions from "../../utils/useWindowDimensions";
import "../../css/general.css";
import { purple } from "@mui/material/colors";
const ViewAllFlashCards = ({ setView, setFlashCard }) => {
    const [flashCards, setFlashCards] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [publicFlashCards, setPublicFlashCards] = useState([]);
    const { width, height } = useWindowDimensions();
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
        <Container className="infinitescroll" sx={{ height: height }}>
            <Box
                sx={{
                    backgroundColor: purple[500],
                    borderRadius: '15px',
                    mt: -5,
                    pt: 1,
                    pb: 1,
                }}
            >
                <Container maxWidth="xl">
                    <Typography
                        component="h3"
                        variant="h3"
                        align="center"
                        color="white"
                        gutterBottom
                    >
                        Flashcards
                    </Typography>
                </Container>
            </Box>
            <Grid container spacing={2}>{!isPending &&
                flashCards.map((flashCard, index) => (
                    <FlashCardThumbnail key={index} flashCard={flashCard} setFlashCard={setFlashCard} setView={setView} />
        ))}</Grid>
            <Divider/>
            <Grid container spacing={2}>{!isPending && publicFlashCards.map((flashCard, index) => (
                <FlashCardThumbnail key={index} flashCard={flashCard} setFlashCard={setFlashCard} setView={setView} />
            ))}</Grid>
            <Fab color="secondary" aria-label="add" style={{ position: "absolute", right: "0", bottom: "0", margin: "2.5%" }} onClick={() => setView("create")}>
                <AddIcon />
            </Fab>
    </Container>);
}
 
export default ViewAllFlashCards;