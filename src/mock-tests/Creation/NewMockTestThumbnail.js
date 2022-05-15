import { Grid,Card,CardContent,Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
const NewMockTestThumbnail = ({ mockTests,setMockTests }) => {
    const addMockTest = () => {
        const defaultMockTest = {
            "id":String(mockTests.length),
            "questionType":"",
            "question": String(mockTests.length),
            "answer":""
        }
        setMockTests([...mockTests,defaultMockTest]);
    }
    return (
                <Button variant="outlined" onClick={addMockTest}>
                <AddIcon/>
                </Button>);
}
 
export default NewMockTestThumbnail;