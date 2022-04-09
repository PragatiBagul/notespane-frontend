import { Card,Alert,AlertTitle,FormControl, Radio,RadioGroup,FormControlLabel, CardContent, Typography, CardActions, Button } from "@mui/material";

import { useState } from "react";
const SingleChoiceQuestion = ({question,options,answer}) => {
    
    //Get from props
    //const [question, setQuestion] = useState("What is 2 + 2 ? ");
    //const [answer, setAnswer] = useState(4);
    //const [options, setOptions] = useState([1,2,3,4]);
    
    //Declare here
    const [disableAll, setDisableAll] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const [severity, setSeverity] = useState(null);
    
    const handleChange = (value) => {
        setSelectedValue(value);
    };

    const submit= () =>
    {
        if (String(selectedValue) == String(answer))
        {
            setSeverity("success");
        }
        else
        {
            setSeverity("error");
        }
        setDisableAll(true);
    }

    return ( <Card>
             <FormControl
        required
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
        >
            <CardContent>
                <Typography variant="h5">{question}</Typography>
                
            <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    name="radio-buttons-group"
            >
                {options!=null &&
                    options.map((option,index) => (
                        <FormControlLabel key={index} value="end" control={<Radio value={option} onChange={(e) => handleChange(e.target.value)} disabled={ disableAll}/>} label={option} />
                    ))
                }
            </RadioGroup>
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
    </Card> );
}

export default SingleChoiceQuestion;