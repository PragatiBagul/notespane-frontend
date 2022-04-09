import { List,ListItem,Card, CardContent, Typography } from "@mui/material";
const FlashCardSide = ({cards,setSelected}) => {
    return (
    <List sx={{
        width: '100%',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}>
        {
        cards.map((card, index) => (
            <ListItem>
            <Card key={index} onClick={() => setSelected(index)}>
            <CardContent>
            <Typography variant="inherit">{card.question}</Typography>
            </CardContent>
                </Card>
            </ListItem>
        ))
            }
            </List>
    );
}
 
export default FlashCardSide;