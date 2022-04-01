import { Grid,Container } from "@mui/material";
import FlashCardSide from "./FlashCardSide";
import FlashCard from "./FlashCard";
const ViewFlashCard = () => {
    return (<Grid container spacing={2}>
        <Grid xs={2} sm={2} md={2} lg={2} xl={2}>
            <FlashCardSide/>
        </Grid>
        <Grid xs={10} sm={10} md={10} lg={10} xl={10}>
            <Container>
                <FlashCard/>
            </Container>
        </Grid>
      </Grid> );
}
 
export default ViewFlashCard;