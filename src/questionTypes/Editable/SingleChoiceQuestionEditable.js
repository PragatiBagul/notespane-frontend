import { Card,TextField, CardContent, CardActions, Button } from "@mui/material";
import SCQAllOptions from "./SCQAllOptions";
import { useState } from "react";
const SingleChoiceQuestionEditable = ({question, setQuestion,answer, setAnswer,options,setOptions}) => {
    const submit= () =>
    {
        console.log(question);
        console.log(options);
        console.log(answer);
    }

    return ( <>
            <TextField id="question" label="Question" variant="standard" value={question} onChange={e => setQuestion(e.target.value)} fullWidth required/>
            <SCQAllOptions optionList={options} setOptionList={setOptions} answer={answer} setAnswer={setAnswer}/>
    </> );
}

export default SingleChoiceQuestionEditable;