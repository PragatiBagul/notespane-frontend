import { Stack,Card, CardContent, Typography } from "@mui/material";
const FlashCardSide = ({cards,setSelected}) => {
    return (
        <Stack spacing={2}>
        {cards.map((card,index) => (
            <Card key={index} onClick={() => setSelected(index)}>
            <CardContent>
            <Typography variant="inherit">{card.question}</Typography>
            <Typography variant="inherit">{card.questionType}</Typography>
            </CardContent>
        </Card>
        ))}
      </Stack>);
}
 
export default FlashCardSide;