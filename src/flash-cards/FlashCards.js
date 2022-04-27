import ViewAllFlashCards from "./View/ViewAllFlashCards";
import { useState } from "react";
const FlashCards = () => {

    const [view, setView] = useState("default");
    return (<>
        {view == "default" && <ViewAllFlashCards />}
    </>);
}
 
export default FlashCards;