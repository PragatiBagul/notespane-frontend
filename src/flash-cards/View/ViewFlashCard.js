import { Box, Stack, Card, CardContent, Typography, Grid, Container } from "@mui/material";

import { useEffect, useState } from "react";

import FlashCard from "./FlashCard";
import FlashCardSide from "./FlashCardSide";
const ViewFlashCard = ({ setView, id }) => {
    const [cards, setCards] = useState([]);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [isPending, setIsPending] = useState(true);
    const [selected, setSelected] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/flashCards/'+id)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setTitle(data.title);
                    setDescription(data.description);
                    setCards(data.flashCards);
                    setIsPending(false);
                })
        }, 1000);
    },[]);
    return (
        <Box>
        <Grid container spacing={2}>
        
        </Grid>
    </Box>      );
}
 
export default ViewFlashCard;