import { Container } from "@mui/material";
import { useState } from "react";
import SingleWordQuestion from "./Viewable/SingleWordQuestion";
import MultipleWordQuestion from "./Viewable/MultipleWordQuestion";
import SingleChoiceQuestion from "./Viewable/SingleChoiceQuestion";
import MultipleChoiceQuestion from "./Viewable/MultipleChoiceQuestion";
const QuestionType = ({ card }) => {
    return (<Container>
        
                {card.questionType == "swq" && <SingleWordQuestion
                    question={card.question}
                    answer={card.answer}/>}
                {card.questionType == "mwq" && <MultipleWordQuestion
                    question={card.question}
                    answer={card.answer} />}
                {card.questionType == "scq" && <SingleChoiceQuestion
                    question={card.question}
                    answer={card.answer}
                    options={card.options} />}
                {card.questionType == "mcq" && <MultipleChoiceQuestion
                    question={card.question}
                    answer={card.answers}
            options={card.options} />}
        </Container>
     );
}
 
export default QuestionType;