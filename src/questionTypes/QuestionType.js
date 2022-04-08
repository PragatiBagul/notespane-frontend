import { Stack,Card, FormControl,MenuItem,Select,InputLabel, Button, CardContent, CardActions, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import MultipleWordQuestionEditable from "./Editable/MultipleWordQuestionEditable";
import SingleChoiceQuestionEditable from "./Editable/SingleChoiceQuestionEditable";
import SingleWordQuestionEditable from "./Editable/SingleWordQuestionEditable";
import MultipleChoiceQuestionEditable from "./Editable/MultipleChoiceQuestionEditable";
import DeleteIcon from '@mui/icons-material/Delete';
const QuestionType = ({flashCards,setFlashCards,id}) => {
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [answer, setAnswer] = useState(""); 
    const [questionType, setQuestionType] = useState("swq");
    const submit = async() => {
        console.log(id);
        var flashCard;
        if (questionType === "swq")
        {
            flashCard = {
                "questionType":questionType,
                "question": question,
                "answer":answer
            };
        }
        if (questionType === "mwq")
        {
            flashCard = {
                "questionType":questionType,
                "question": question,
                "options": options,
                "answer":answer
            };
        }
        if (questionType === "scq")
        {
            flashCard = {
                "questionType":questionType,
                "question": question,
                "options": options,
                "answer":answer
            };
        }
        if (questionType === "mcq")
        {
            flashCard = {
                "questionType":questionType,
                "question": question,
                "options": options,
                "answers":answers
            };
        }
        let newArr = [...flashCards]; // copying the old datas array
        newArr[id] = flashCard; // replace e.target.value with whatever you want to change it to
        setFlashCards(newArr);
    }
    const deleteFlashCard = async() => {
        setFlashCards(flashCards.filter((flashCard,index) => index != id));
        console.log("Deleted successfully ");
    }
    useEffect(() => {
        submit();
    },[question,options,answers,answer,questionType]);
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
            
                <CardActions>
                     <Stack direction="row" spacing={2}>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Question Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={questionType}
                        label="Question Type"
                        onChange={(e) => setQuestionType(e.target.value)}
                    >
                        
                        <MenuItem value={"swq"}>Single Word Question</MenuItem>
                        <MenuItem value={"mwq"}>Multiple Word Question</MenuItem>
                        <MenuItem value={"scq"}>Single Choice Question</MenuItem>
                        <MenuItem value={"mcq"}>Multiple Choice Question</MenuItem>
                            </Select>
                    </FormControl>
                    <IconButton flex="end" onClick={deleteFlashCard}>
                        <DeleteIcon/>
                    </IconButton>
                </Stack>
                
            </CardActions>
            </Card>);
}
 
export default QuestionType;