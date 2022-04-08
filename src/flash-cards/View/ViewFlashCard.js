import { Stack,Card,CardContent, Typography,Grid,Container } from "@mui/material";
import { useEffect,useState } from "react";
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
        <Grid container spacing={2}>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                <FlashCardSide cards={cards} setSelected={ setSelected}/>
            </Grid>
            <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                <FlashCard card={ cards[selected]}/>
            </Grid>
      </Grid> );
}
 
export default ViewFlashCard;