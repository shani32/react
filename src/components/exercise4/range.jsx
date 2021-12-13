import React from "react";

const lable1= 'from 1 to 100'
function Range(){
    return (
        <div>
        <label htmlFor="lable">{lable1}</label>
        <input  type="range" id="points" name="points" min="0" max="100"></input>
        </div>
    )
}
export default Range