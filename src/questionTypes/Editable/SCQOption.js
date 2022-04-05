import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText,TextField } from "@mui/material";
import { useState } from 'react';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const SCQOption = ({optionList,setOptionList,data, index,answer,setAnswer}) => {
    const [option, setOption] = useState(data);
    const [isEditable, setIsEditable] = useState(false);
    const handleDelete = (id) => {
        setOptionList(optionList.filter((option,index) => index != id));
    }

    const selectOption = (e) => {
        if (e.target.checked)
        {
            setAnswer(option);
        }
        else
        {
            setAnswer();
        }
    }
    return (
    <ListItem disablePadding key={index}>        
            <ListItemButton>
                <Checkbox edge="start" id={`checkbox-${index}`} disabled={isEditable} onChange={(e) => selectOption(e)} checked={ answer == option}/>
            {
                isEditable ?
                    <>
                        <TextField
                                fullWidth
                                type="text"
                                size="small"
                                defaultValue={option}
                                onChange={(e) => setOption(e.target.value)}
                        />
                        <IconButton edge="end"
                            onClick={() => setIsEditable(false)}
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
 
export default SCQOption;