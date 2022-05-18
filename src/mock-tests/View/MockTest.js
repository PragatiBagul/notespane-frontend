import { Accordion,AccordionSummary,AccordionDetails,Typography,Stack,Box,Button } from "@mui/material";
import { useEffect, useState } from "react";
import QuestionType from "../../questionTypes/QuestionType";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { fetchMockTest } from "../../utils/RequestEndPoints";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Preloader from "../../preloader/Preloader";
import useWindowDimensions from "../../utils/useWindowDimensions";
const MockTest = ({ setView, id }) => {
    const [cards, setCards] = useState([]);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
  const [isPending, setIsPending] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const { width, height } = useWindowDimensions();
  useEffect(() => {
    var fetch = async () => {
      var response = await fetchMockTest(id);
      return response;
    };
    setTimeout(async () => {
      const response = await fetch();
      console.log(response);
      setTitle(response.title);
      setDescription(response.description);
      setCards(response.mocktestData);
      setIsPending(false);
      setRefresh(true);
    }, 1000);
  }, [refresh]);
    return (
      <Box className="infinitescroll" sx={{ height: height }}>
        {isPending && <Preloader />}
            {!isPending && (
          <Box sx={{ padding: "2%" }}>
            <Button onClick={() => setView("default")}><ChevronLeftIcon /> All Tests </Button>
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
              {cards != null && cards.length > 0 && cards.map((card, index) => (
                        <QuestionType card={card}/>
              ))}
            </Stack></Box>)}</Box>);
}
 
export default MockTest;