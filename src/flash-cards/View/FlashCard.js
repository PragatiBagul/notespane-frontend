import { Container, Card, CardContent, Typography, Button } from "@mui/material";
const FlashCard = ({ card }) => {
    const click = () => {
        console.log(card.question);
    }
    return (
        <Container>
            <Card>
                <CardContent>
                    <Typography variant="h6">{card.question }</Typography>
                </CardContent>
            </Card>
        </Container>);
}
 
export default FlashCard;