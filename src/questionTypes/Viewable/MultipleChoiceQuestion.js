import { Alert,AlertTitle,Card,FormControl,FormControlLabel,FormLabel,Checkbox,FormGroup,FormHelperText,Typography,Button, CardContent, CardActions } from "@mui/material";
import { useState } from "react";
import _ from "lodash";
const MultipleChoiceQuestion = ({question,options,answer}) => {

    //Get from props
    //const [question, setQuestion] = useState("What is 2 + 2 ? ");
    //const [answer, setAnswer] = useState(["1","3"]);
    //const [options, setOptions] = useState(["1","2","3","4"]);
    
    //Declare here
    const [disableAll, setDisableAll] = useState(false);
    const [selectedValue, setSelectedValue] = useState([]);
    const [severity, setSeverity] = useState(null);
    
    
    const handleChange = (e) => {
        var option = e.target.name;
        if (e.target.checked)
        {
            setSelectedValue([...selectedValue, option]);
        }
        else
        {
            setSelectedValue(selectedValue.filter(item => item.name !== option));
        }
    };
    

    const submit= () =>
    {
        if (_.isEqual(selectedValue,answer))
        {
            setSeverity("success");
        }
        else
        {
            setSeverity("error");
        }
        setDisableAll(true);
    }

    return (
                 <FormControl
        required
        component="fieldset"
        sx={{ m: 3 }}
            variant="standard"
            fullWidth
      >
        <CardContent>
            <Typography>{question}</Typography>
       
                <FormGroup>
                    {options.map((option, index) => (
                        <FormControlLabel
                            disabled={disableAll}
                            key={index}
          control={
            <Checkbox onChange={e => handleChange(e)} name={String(option)} />
          }
          label={option}
        /> 
                    ))}
        </FormGroup>
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
                </FormControl> );
}
 
export default MultipleChoiceQuestion;