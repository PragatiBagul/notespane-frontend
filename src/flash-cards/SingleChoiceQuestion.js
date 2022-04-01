import { Card,Alert,AlertTitle, Radio,RadioGroup,FormControlLabel, CardContent, Typography } from "@mui/material";

import { useState } from "react";
const SingleChoiceQuestion = () => {
    const [question, setQuestion] = useState("What is 2 + 2 ? ");
    const [answer, setAnswer] = useState("4");
    const [options, setOptions] = useState([1,2,3,4]);
    const [disableAll, setDisableAll] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const [severity, setSeverity] = useState();
    const handleChange = (value) => {
        setSelectedValue(value);
        console.log(answer == String(selectedValue));
        /*if (answer === JSON.stringify(selectedValue))
        {
            setSeverity("success");
        }
        else
        {
            setSeverity("error");
        }
        setDisableAll(true);*/
    };

    return ( <Card>
            <CardContent>
            <Typography variant="h5">Question Here</Typography>
            <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
                <FormControlLabel value="end" control={<Radio value={"1"} onChange={(e) => handleChange(e.target.value)} disabled={ disableAll}/>} label="1" />
                <FormControlLabel value="end" control={<Radio value={"2"}/>} onChange={ (e) => handleChange(e.target.value)} disabled={ disableAll} label="2" />
                <FormControlLabel value="end" control={<Radio value={"3"}/>} onChange={ (e) => handleChange(e.target.value)} disabled={ disableAll} label="3" />
                <FormControlLabel value="end" control={<Radio value={"4"} />} onChange={ (e) => handleChange(e.target.value)} disabled={ disableAll} label="4" />
            </RadioGroup>
            
            {selectedValue != null && <Alert severity={severity}>
                {severity == "success" && <><AlertTitle>Correct Answer</AlertTitle>
                    Your answer is right <strong>You scored a point!</strong></>}
                {severity == "error" && <><AlertTitle>Wrong Answer</AlertTitle>
                Your answer is wrong <strong>Better luck next time!</strong></>}
            </Alert>}
        </CardContent>
    </Card> );
}

export default SingleChoiceQuestion;