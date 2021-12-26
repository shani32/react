import React from "react";
import InputComponent from "./inputComponent";

export default class FormUser extends React.Component{
    constructor(){
        super()
        this.state={
            firstName:'',
            lastName: ''
        }
    }
    getInput= (e)=>{
        this.setState({ [e.target.name]: e.target.value })
    }
    
    render=()=>{
return(
    <form>
        <InputComponent 
        type="text"
         value={this.state.firstName}
        name="firstName"
        inputCallback={this.getInput}
        label="First Name"
        />

        <br />
        <InputComponent 
        type="text"
         value={this.state.lastName}
        name="lastName"
        inputCallback={this.getInput}
        label="Last Name"
        />
        {/* <br />
        <input type="email"
         value={this.state.value}
        name="email"
        onChange={this.getInput}
        label="Email"
        />
        <br />
        <input type="password"
         value={this.state.value}
        name="password"
        onChange={this.getInput}
        label="Password"
        /> */}
        <br />
        my name is: {this.state.firstName}{this.state.lastName}

    </form>
)
    }
}