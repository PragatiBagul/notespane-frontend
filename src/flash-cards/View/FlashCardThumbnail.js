import { Grid, Card, CardContent, Typography, CardMedia, CardActionArea, CardActions, Button } from "@mui/material";
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
const FlashCardThumbnail = ({ flashCard, setView, setFlashCard }) => {
    return (
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3} style={{padding:'1.5%'}}>
        <Card sx={{ maxWidth: 345 }} onClick={() => { setView("play"); setFlashCard(flashCard); }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
              image="https://www.pngitem.com/pimgs/m/25-254660_transparent-flashcards-clipart-flashcard-png-png-download.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {flashCard.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                    {
                        flashCard.description
                    }
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary" onClick={(e) => { setView("play"); setFlashCard(flashCard); }}>
            <ViewCarouselIcon/> &nbsp;Play 
          </Button>
        </CardActions>
            </Card>
            </Grid>);
}
 
export default FlashCardThumbnail;