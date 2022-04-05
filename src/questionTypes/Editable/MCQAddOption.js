/* eslint-disable react-hooks/rules-of-hooks */
import { ListItem, ListItemButton, IconButton, TextField } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useState } from "react";
const MCQAddOption = ({options,setOptions}) => {
    const [option, setOption] = useState("");
    const addOption = (e) =>
    {
        if (option !== "")
        {
            setOptions([...options, option]);
            setOption("");
        }   
        else
        {
            alert("Cannot add an empty option");  
        }
    }
    return (
        <ListItem disablePadding>
            <ListItemButton>
                <IconButton edge="start" onClick={addOption}>
                    <AddOutlinedIcon/>
                </IconButton>
                <TextField
                    value={option}
                    onChange={(e)=>setOption(e.target.value)}
                            fullWidth
                            type="text"
                            size="small"
                        />
                        <IconButton edge="end"
                            onClick={()=>setOption("")}
                    color="primary"
                    disabled={option === "" ? true : false}
                    >
                            <ClearIcon/>
                        </IconButton>
            </ListItemButton>
    </ListItem> );
}
 
export default MCQAddOption;