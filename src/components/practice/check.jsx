import React from "react";

class Check extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isGoing:true,
            numberOfGuests:2,
            isWorking: false
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(event){
        const target= event.target
        const value= target.type==='checkbox'? target.checked: target.value;
        const name= target.name
        this.setState({[name]: value })
    }
    render(){
        return(
            <form>
                <label >
                    is going:
                <input
                 type="checkbox" 
                 name="isGoing"
                 checked={this.state.isGoing}
                 onChange={this.handleChange} />
                </label>
                <label >
                    is working:
                <input
                 type="checkbox" 
                 name="isWorking"
                 checked={this.state.isWorking}
                 onChange={this.handleChange} />
                </label>
                <label>
                    number of guests:
                    <input
                    type='number'
                    name="number of guests"
                    value={this.state.numberOfGuests}
                    onChange={this.handleChange} />

                </label>
            </form>
        )
    }
}
export default Check