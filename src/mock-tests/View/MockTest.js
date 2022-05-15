import { Accordion,AccordionSummary,AccordionDetails,Typography,Stack,Box,Button } from "@mui/material";
import { useEffect, useState } from "react";
import QuestionType from "../../questionTypes/QuestionType";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { fetchMockTest } from "../../utils/RequestEndPoints";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
const MockTest = ({ setView, id }) => {
    const [cards, setCards] = useState([]);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [isPending, setIsPending] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            const response = fetchMockTest(id);
            setTitle(response.title);
            setDescription(response.description);
            setCards(response.mockTests);
            setIsPending(false);
        }, 1000);
    }, []);
    return (
        <>
            {!isPending && (
          <Box sx={{ padding: "2%" }}>
            <Button onClick={setView("default")}><ChevronLeftIcon/> All Tests </Button>
                <Stack  spacing={2}>
                        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
                                    <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {description}
          </Typography>
        </AccordionDetails>
                    </Accordion>
                    {cards.map((card, index) => (
                        <QuestionType card={card}/>
                    ))}
                    </Stack></Box>)}</>      );
}
 
export default MockTest;