import { Card,FormControl,Typography,Alert,AlertTitle,TextField,Button, CardContent, CardActions } from "@mui/material";
import { useState } from "react";
const MultipleWordQuestion = ({question,answer}) => {
    //Get from props
    //const [question, setQuestion] = useState("What is 2 + 2 ? ");
    //const [answer, setAnswer] = useState("Four");

    const [userAnswer, setUserAnswer] = useState("");
    const [severity, setSeverity] = useState(null);

    const submit = () => {
        if (String(userAnswer).trim() == String(answer))
        {
            setSeverity("success");
        }
        else
        {
            setSeverity("error");
        }
    }
    return (<Card>
           <FormControl
        required
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
        >
        <CardContent>
            <Typography variant="h5">{question}</Typography>
            <TextField id="standard-basic" label="Answer" variant="standard" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)}  fullWidth/>
            {severity != null && <Alert severity={severity}>
                {severity == "success" && <><AlertTitle>Correct Answer</AlertTitle>
                    Your answer is right <strong>You scored a point!</strong></>}
                {severity == "error" && <><AlertTitle>Wrong Answer</AlertTitle>
                Your answer is wrong <strong>Better luck next time!</strong></>}
            </Alert>}
        </CardContent>
        <CardActions>
        <Button variant="contained" onClick={submit}> OK </Button>
            </CardActions>
            </FormControl>
    </Card>  );
}
 
export default MultipleWordQuestion;