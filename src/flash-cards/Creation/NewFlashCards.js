import { Container, Stack,Divider } from "@mui/material";
import QuestionType from "../../questionTypes/QuestionType";
import NewFlashCardThumbnail from "./NewFlashCardThumbnail";
import { useState } from "react";
import CreateNewFlashCards from "./CreateNewFlashCards";
const NewFlashCards = () => {
    const [flashCards, setFlashCards] = useState([]);
    const [n, setN] = useState(0);
    return (<Container>
        <Stack spacing={2}>
            <CreateNewFlashCards />
            <Divider />
            {n > 0 && [...Array(n)].map((flashCard,index) => (
                <QuestionType key={ index}/>
            ))}
            <NewFlashCardThumbnail n={n} setN={ setN }/>
        </Stack>
        </Container>);
}
 
export default NewFlashCards;