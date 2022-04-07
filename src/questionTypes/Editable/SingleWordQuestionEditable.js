import { Card, CardActionArea,Typography,Alert,AlertTitle,TextField,Button, CardContent, CardActions } from "@mui/material";
import { useState } from "react";
const SingleWordQuestionEditable = ({question, setQuestion,answer, setAnswer}) => {
    const limitToSingleWord = (str) => {
        const s = String(str).split(" ");
        setAnswer(s[0]);
    }
    return (
        <>
        <TextField id="question" label="Question" variant="standard" value={question} onChange={e => setQuestion(e.target.value)} fullWidth required={true}/>
            <TextField id="standard-basic" label="Answer" variant="standard" value={answer} onChange={(e) => limitToSingleWord(e.target.value)}  fullWidth required={true}/>
            </>);
}
 
export default SingleWordQuestionEditable;