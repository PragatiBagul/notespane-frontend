import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText,TextField } from "@mui/material";
import { useState } from 'react';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const MCQOption = ({optionList,setOptionList,data, index,answers,setAnswers}) => {
    const [option, setOption] = useState(data);
    const [isEditable, setIsEditable] = useState(false);
    const handleDelete = (id) => {
        setOptionList(optionList.filter((option,index) => index != id));
    }
    const handleChange = () => {
        let newArr = [...optionList]; // copying the old datas array
        newArr[index] = option;
        setAnswers([]);
        setOptionList(newArr);
    }
    const selectOption = (e) => {
        if (e.target.checked)
        {
            setAnswers([...answers, option]);
        }
        else
        {
            setAnswers(answers.filter(item => item.name !== option));
        }
    }
    return (
    <ListItem disablePadding key={index}>        
            <ListItemButton>
                <Checkbox edge="start" id={`checkbox-${index}`} disabled={isEditable} checked={ answers.includes(option) } onChange={(e) => selectOption(e)} />
            {
                isEditable ?
                    <>
                        <TextField
                                fullWidth
                                type="text"
                                size="small"
                                defaultValue={option}
                                onChange={(e) => { setOption(e.target.value); }}
                        />
                        <IconButton edge="end"
                                onClick={() => { setIsEditable(false); handleChange(); }}
                            color="primary">
                            <DoneOutlinedIcon />
                        </IconButton>
                    </> :
                    <>
                        <ListItemText
                            id={index}>
                            <span>{option}</span>
                            </ListItemText>
                            <IconButton edge="end" onClick={() => handleDelete(index)} color="primary">
                                <DeleteOutlineOutlinedIcon/>
                            </IconButton>
                            <IconButton edge="end" onClick={() => setIsEditable(true)} color="primary">
                    <EditOutlinedIcon/>
                </IconButton></>
                }
            </ListItemButton>
    </ListItem>);
}
 
export default MCQOption;