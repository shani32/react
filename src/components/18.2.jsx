import React, { useState } from "react";

const useInputValue= inputValue=>{
    const [value, setValue]=useState(inputValue)
return{
    value,
    onChange: e => setValue(e.target.value),
    resetValue: () => setValue('')
}
}


export default ({onSubmit})=>{
    const{ resetValue,...text} =useInputValue('')
    // const email=useInputValue('')
 return (
<form onSubmit={e=>{
    e.preventDefault();
    onSubmit(text.value)
    resetValue()
}}>
 <input {...text}/>
 {/* <input {...email}/> */}
</form>
 )

}