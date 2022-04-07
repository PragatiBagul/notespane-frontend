import { Grid, Card, CardContent, Typography, CardMedia, CardActionArea, CardActions, Button } from "@mui/material";
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
const FlashCardThumbnail = ({flashCard}) => {
    return (
        <Grid xs={12} sm={12} md={6} lg={3} xl={3} style={{padding:'1.5%'}}>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://www.denofgeek.com/wp-content/uploads/2022/02/iron-man-doctor-strange-avengers-infinity-war.jpg?fit=1280%2C720"
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
          <Button size="small" color="primary">
            <ViewCarouselIcon/> &nbsp;Play 
          </Button>
        </CardActions>
            </Card>
            </Grid>);
}
 
export default FlashCardThumbnail;