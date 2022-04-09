import { Box } from "@mui/material";
import QuestionType from "../../questionTypes/QuestionType";
const FlashCard = ({ card }) => {
    return (
        <Box>
            <QuestionType card={card}/>
            </Box>);
}
 
export default FlashCard;