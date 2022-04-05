import { TextField } from "@mui/material";

const MultipleWordQuestionEditable = ({question,setQuestion,answer,setAnswer}) => {
    return (  
        <>
        <TextField id="question" label="Question" variant="standard" value={question} onChange={e => setQuestion(e.target.value)} fullWidth required/>
        <TextField id="answer" label="Answer" variant="standard" value={answer} onChange={(e) => setAnswer(e.target.value)}  fullWidth required />
    </>  );
}
 
export default MultipleWordQuestionEditable;