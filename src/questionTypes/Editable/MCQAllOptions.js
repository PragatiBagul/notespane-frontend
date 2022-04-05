import { List } from "@mui/material";
import { set } from "lodash";
import { useEffect, useState } from "react";
import MCQAddOption from "./MCQAddOption";
import MCQOption from "./MCQOption";
const MCQOptionList = ({ optionList, setOptionList,answers,setAnswers }) => {
    return (
        <List>
            {optionList.length != 0 ? 
                (
                    optionList.map((option, index) => 
                        <MCQOption
                            data={option}
                            optionList={optionList}
                            setOptionList={setOptionList}
                            index={index}
                            key={index}
                            answers={answers}
                            setAnswers={setAnswers}
                        />)
                ) :
                <></>
        }
            <MCQAddOption options={optionList} setOptions={setOptionList}/>
        </List>
    );
}
 
export default MCQOptionList;