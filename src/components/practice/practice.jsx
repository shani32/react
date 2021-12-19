import { render } from "@testing-library/react";
import React from "react";

class InputChange extends React.Component{
    constructor(props){
        super(props)
        this.state={value: ''}
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState({value: event.target.value})

    }
    handleSubmit(event){
        alert('a name was submitted' + this.state.value)
        event.preventDefault()

    }

render(){
    return(
        <div>I
            <form >
                <label>
                    name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    
                </label>
                <input type='submit' value='submit' />
               
                
            </form>
        </div>
    )
}
}

export default InputChange 