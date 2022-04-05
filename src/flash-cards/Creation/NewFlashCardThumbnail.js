import { Grid,Card,CardContent,Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
const NewFlashCardThumbnail = ({ n, setN }) => {
    const addFlashCard = () => {
        setN(n + 1);
    }
    return (
                <Button variant="outlined" onClick={addFlashCard}>
                <AddIcon/>
                </Button>);
}
 
export default NewFlashCardThumbnail;