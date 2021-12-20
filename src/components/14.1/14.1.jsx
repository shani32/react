import React from "react";

class InputFocus extends React.Component{ 
        state={
            fullName:''
        }
        inputFullNameRef=React.createRef()
  
    componentDidMount = () => {
        this.inputFullNameRef.current.focus()
    }
    render(){
        return(
            <div>
                <h1>input</h1>
                <form >
                <div><input ref={this.inputFullNameRef} type="text" placeholder="your name" value={this.fullName} /></div>
                <div><button onClick={this.handleButtonClick}>send</button></div>
                </form>
            </div>
        )
    }
}
export default InputFocus