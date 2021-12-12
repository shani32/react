import React from "react";
import './4.css';
import Input from "./input";
import Text from "./text";
import InputText from "./inputtext";
import Text2 from "./text2";
import Range from "./range";


function Container(){
    return(
        <div className="container">
            <Text />
            <Text2 />
            <Range />
            <InputText />
            <Input />
        </div>
    )
}
export default Container