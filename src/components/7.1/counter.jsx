import React, { useState } from "react";
function Counter (){
const [count, setCount]= useState(0)
const increment= ()=>{
setCount(prevCount => prevCount+1)
};

        return (
            <div>
                <h4>count is {count}</h4>
                <button onClick={increment}>increment</button>
            </div>
        )

    }
   
export default Counter