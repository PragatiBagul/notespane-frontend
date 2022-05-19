import { Stack, Card, FormControl, MenuItem, Select, InputLabel, Button, CardContent, CardActions, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import MultipleWordQuestionEditable from "./MultipleWordQuestionEditable";
import DeleteIcon from '@mui/icons-material/Delete';
const QuestionTypeEditable = ({ flashCards, setFlashCards, id }) => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const submit = () => {
        const flashCard = {
            "flashcardQuestion": question,
            "flashcardAnswer": answer
        };
        let newArr = [...flashCards]; // copying the old datas array
        newArr[id] = flashCard; // replace e.target.value with whatever you want to change it to
        setFlashCards(newArr);
    }
    const deleteFlashCard = async () => {
        setFlashCards(flashCards.filter((flashCard, index) => index != id));
        console.log("Deleted successfully ");
    }
    useEffect(() => {
        submit();
    }, [question, answer]);
    return (
        <Card style={{ margin: "2" }}>
            <CardContent>
                <MultipleWordQuestionEditable
                    question={question} setQuestion={setQuestion}
                    answer={answer} setAnswer={setAnswer} />
            </CardContent>
            <CardActions>
                <Stack direction="row" spacing={2}>
                    <IconButton flex="end" onClick={deleteFlashCard}>
                        <DeleteIcon />
                    </IconButton>
                </Stack>
            </CardActions>
        </Card>);
}

export default QuestionTypeEditable;