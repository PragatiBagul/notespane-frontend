import { TextField } from "@mui/material";

import MCQAllOptions from "./MCQAllOptions";
import _ from "lodash";
const MultipleChoiceQuestionEditable = ({question,setQuestion,options,setOptions,answers,setAnswers}) => {

    return (
        <>
            <TextField id="question" label="Question" variant="standard" value={question} onChange={e => setQuestion(e.target.value)} fullWidth required/>
            <MCQAllOptions optionList={options} setOptionList={setOptions} answers={answers} setAnswers={setAnswers} />
        </>
         );
}
 
export default MultipleChoiceQuestionEditable;