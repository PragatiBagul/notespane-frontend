import { Stack } from "@mui/material";
const FlashCardSide = ({cards}) => {
    return (<Stack spacing={2}>
        {cards.map(card => (
            <h1>Hello World</h1>
        ))}
      </Stack> );
}
export default FlashCardSide;