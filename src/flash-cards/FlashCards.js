import ViewAllFlashCards from "./View/ViewAllFlashCards";
import { useState } from "react";
import PlayFlashCard from "./View/PlayFlashCard";
import NewFlashCard from "./Create/NewFlashCard";
const FlashCards = () => {
    const [view, setView] = useState("default");
    const [flashCard, setFlashCard] = useState(null);

    return (<>
        {view == "default" && <ViewAllFlashCards setView={setView} setFlashCard={setFlashCard} />}
        {view == "play" && <PlayFlashCard flashCard={flashCard} />}
        {view == "create" && <NewFlashCard setView={setView} />}
    </>);
}
 
export default FlashCards;