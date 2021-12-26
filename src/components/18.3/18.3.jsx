import React, { useState } from "react";
export default function Clock (){
    const[seconds, setSeconds]= useState('')
    const[minutes, setMinutes]= useState('')
    const[hours, setHours]= useState('')

const getInput= (e)=>{
   const {name, value}= e.target;
    switch(name){
        case "seconds":
            setSeconds(value)
            setMinutes(value/60)
            setHours(value/3600)
            break;
            case "minutes":
            setSeconds(value*60)
            setMinutes(value)
            setHours(value/60)
            break;
            case "hours":
            setSeconds(value*3600)
            setMinutes(value*60)
            setMinutes(value)
            break;
            default:
                break;
     }            
    }
    return(
        <div>
            <div>
                <label htmlFor="seconds">seconds</label>
                <input type="number" name="seconds" onChange={getInput} value={seconds} />
            </div>
            <div>
                <label htmlFor="minutes">minutes</label>
                <input type="number" name="minutes" onChange={getInput} value={minutes} />
           </div>
           <div>
               <label htmlFor="hours">hours</label>
            <input type="number" name="hours" onChange={getInput} value={hours} />
            </div>
            
        </div>
    )
   

}