import { Box, Stack, Grid, Typography, IconButton } from "@mui/material";
import FlashCardPlayer from "./FlashCardPlayer";
import { useState } from "react";
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
const PlayFlashCard = () => {
    const [initialCards, setInitialCards] = useState([
        { "id": 1, "question": "This is question 1", "answer": "This is answer 1" },
        { "id": 2, "question": "This is question 2", "answer": "This is answer 2" },
        { "id": 3, "question": "This is question 3", "answer": "This is answer 3" },
        { "id": 4, "question": "This is question 4", "answer": "This is answer 4" },
        { "id": 5, "question": "This is question 5", "answer": "This is answer 5" },
        { "id": 6, "question": "This is question 6", "answer": "This is answer 6" },
        { "id": 7, "question": "This is question 7", "answer": "This is answer 7" },
        { "id": 8, "question": "This is question 8", "answer": "This is answer 8" }
    ]);
    const [cards, setCards] = useState(initialCards);
    const [card, setCard] = useState(0);


    const shuffle = () => {
        let currentIndex = cards.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [cards[currentIndex], cards[randomIndex]] = [
                cards[randomIndex], cards[currentIndex]];
        }

        return cards;
    }
    return (
        <Box sx={{ p: 8, m: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Box>
                        <Typography variant="h3">Flash Card Title</Typography>
                        <Typography variant="h6">Flash Card Description</Typography>

                        <Stack direction="row" justifyContent={"center"} alignItems={"center"} spacing={2}>
                            <IconButton variant="filled" size="large" onClick={() => shuffle()}>
                                <ShuffleIcon color="secondary" fontSize="medium" />
                            </IconButton>
                            <IconButton variant="filled" size="large" onClick={() => { setCards(initialCards); setCard(0) }}>
                                <RestartAltIcon color="secondary" fontSize="medium" />
                            </IconButton>
                        </Stack>
                    </Box>
                </Grid>
                <FlashCardPlayer cards={cards} card={card} setCard={setCard} />
            </Grid>
        </Box >);
}

export default PlayFlashCard;