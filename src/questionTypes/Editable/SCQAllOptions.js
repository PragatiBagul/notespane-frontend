import { List } from "@mui/material";
import { findAllByDisplayValue } from "@testing-library/react";
import { set } from "lodash";
import { useEffect, useState } from "react";
import SCQAddOption from "./SCQAddOption";
import SCQOption from "./SCQOption";
const SCQOptionList = ({ optionList, setOptionList, answer, setAnswer }) => {
    return (
        <List>
            {optionList.length != 0 ? 
                (
                    optionList.map((option, index) => 
                        <SCQOption
                            data={option}
                            optionList={optionList}
                            setOptionList={setOptionList}
                            index={index}
                            key={index}
                            answer={answer}
                            setAnswer={setAnswer}
                        />)
                ) :
                <></>
        }
            <SCQAddOption options={optionList} setOptions={setOptionList}/>
        </List>
    );
}
 
export default SCQOptionList;