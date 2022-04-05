import { Card,CardContent,CardActions,TextField,Button } from "@mui/material";
import { useState } from "react";

const CreateNewFlashCards = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const proceed = () => {

    }
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
                    <Button variant="contained" onClick={proceed }>Proceed</Button>
                </CardActions>
        </Card>);
}
 
export default CreateNewFlashCards;