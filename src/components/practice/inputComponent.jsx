import React from "react";

const InputComponent= ({label, type, name, inputCallback, value})=>{
    return(
        <div>
            <label htmlFor={name}>{label}:</label>
            <input
             type={type}
             name={name}
             onChange={inputCallback}
             value={value}
             />
        </div>
    )
}
export default InputComponent