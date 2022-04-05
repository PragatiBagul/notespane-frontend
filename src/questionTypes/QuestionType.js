import { Grid,Card, FormControl,MenuItem,Select,InputLabel, Button, CardContent, CardActions } from "@mui/material";
import { useEffect, useState } from "react";
import MultipleWordQuestionEditable from "./Editable/MultipleWordQuestionEditable";
import SingleChoiceQuestionEditable from "./Editable/SingleChoiceQuestionEditable";
import SingleWordQuestionEditable from "./Editable/SingleWordQuestionEditable";
import MultipleChoiceQuestionEditable from "./Editable/MultipleChoiceQuestionEditable";
const QuestionType = ({id,isThumbnail}) => {
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [answer, setAnswer] = useState(""); 
    const [questionType, setQuestionType] = useState("swq");
    const submit = () => {
        console.log(question);
        console.log(options);
        console.log(answer);
        console.log(answers);
    }
    useEffect(() => {

    }, [questionType]);
    return (
        <Card style={{margin:"2"}}>
            <CardContent>
                {questionType == "swq" && <SingleWordQuestionEditable
                    question={question} setQuestion={setQuestion}
                    answer={answer} setAnswer={setAnswer} />}
                {questionType == "mwq" && <MultipleWordQuestionEditable
                    question={question} setQuestion={setQuestion}
                    answer={answer} setAnswer={setAnswer} />}
                {questionType == "scq" && <SingleChoiceQuestionEditable
                    question={question} setQuestion={setQuestion}
                    answer={answer} setAnswer={setAnswer}
                    options={options} setOptions={setOptions} />}
                {questionType == "mcq" && <MultipleChoiceQuestionEditable
                    question={question} setQuestion={setQuestion}
                    answers={answers} setAnswers={setAnswers}
                    options={options} setOptions={setOptions} />}
            </CardContent>
            
            {!isThumbnail &&
                <CardActions>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Question Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={questionType}
                        label="Age"
                        onChange={(e) => setQuestionType(e.target.value)}
                    >
                        
                        <MenuItem value={"swq"}>Single Word Question</MenuItem>
                        <MenuItem value={"mwq"}>Multiple Word Question</MenuItem>
                        <MenuItem value={"scq"}>Single Choice Question</MenuItem>
                        <MenuItem value={"mcq"}>Multiple Choice Question</MenuItem>
                            </Select>
                        </FormControl>
                    
                    <Button variant="contained" onClick={submit}> Save </Button>
            </CardActions>}
            </Card>);
}
 
export default QuestionType;