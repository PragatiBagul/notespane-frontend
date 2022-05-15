import { Stack,Card, FormControl,MenuItem,Select,InputLabel, Button, CardContent, CardActions, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import MultipleWordQuestionEditable from "./Editable/MultipleWordQuestionEditable";
import SingleChoiceQuestionEditable from "./Editable/SingleChoiceQuestionEditable";
import SingleWordQuestionEditable from "./Editable/SingleWordQuestionEditable";
import MultipleChoiceQuestionEditable from "./Editable/MultipleChoiceQuestionEditable";
import DeleteIcon from '@mui/icons-material/Delete';
const QuestionTypeEditable = ({mockTests,setMockTests,id}) => {
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [answer, setAnswer] = useState(""); 
    const [questionType, setQuestionType] = useState("swq");
    const submit = () => {
        var mockTest;
        if (questionType === "swq")
        {
            mockTest = {
                "questionType":questionType,
                "question": question,
                "answer":answer
            };
        }
        else if (questionType === "mwq")
        {
            mockTest = {
                "questionType":questionType,
                "question": question,
                "options": options,
                "answer":answer
            };
        }
        else if (questionType === "scq")
        {
            mockTest = {
                "questionType":questionType,
                "question": question,
                "options": options,
                "answer":answer
            };
        }
        else if (questionType === "mcq")
        {
            mockTest = {
                "questionType":questionType,
                "question": question,
                "options": options,
                "answers":answers
            };
        }
        let newArr = [...mockTests]; // copying the old datas array
        newArr[id] = mockTest; // replace e.target.value with whatever you want to change it to
        setMockTests(newArr);
    }
    const deleteMockTest = async() => {
        setMockTests(mockTests.filter((mockTest,index) => index != id));
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
                    <IconButton flex="end" onClick={deleteMockTest}>
                        <DeleteIcon/>
                    </IconButton>
                </Stack>
                
            </CardActions>
            </Card>);
}
 
export default QuestionTypeEditable;