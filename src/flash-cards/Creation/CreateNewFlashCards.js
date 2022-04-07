import { Card, CardContent, CardActions, TextField, Button, Stack, InputLabel,FormControl,Select,MenuItem } from "@mui/material";
import { useState } from "react";

const CreateNewFlashCards = ({title,setTitle,description,setDescription,saveFlashCards,mode,setMode}) => {
    return (
            <Card>
                <CardContent>
                        <TextField id="title" label="Title" variant="standard" value={title} onChange={e => setTitle(e.target.value)} fullWidth required />
                        <TextField
          id="standard-multiline-flexible"
          label="Description"
          multiline
          maxRows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
                            variant="standard"
                             fullWidth required 
        />
                </CardContent>
                    <CardActions>
                            <Stack direction="row" spacing={2}>
                            <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Mode</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
                                                    value={mode}
    label="Mode"
    onChange={(e) => setMode(e.target.value)}
  >
    <MenuItem value={"public"}>Public</MenuItem>
    <MenuItem value={"private"}>Private</MenuItem>
  </Select>
</FormControl>
                                    <Button variant="contained" onClick={saveFlashCards}>Save</Button>
                                    </Stack>
                </CardActions>
        </Card>);
}
 
export default CreateNewFlashCards;