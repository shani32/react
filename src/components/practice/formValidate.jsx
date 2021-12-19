import React from "react";

const initial={
name:'',
email:'',
password:'',
nameError:'',
emailError:'',
passwordError:''

}
export default class ValidForms extends React.Component{
  state= initial ;

  handleChange= event=>{
const isCheckbox= event.target.type==="chechbox";
this.setState({
    [event.target.name]:isCheckbox
    ? event.target.checked
    :event.target.value
})

  }

  isValidate=()=>{
let nameError=''
let emaiError=''
// let passwordError=""

if(!this.state.name){
    nameError="nme canno be blank"
}

if (!this.state.email.includes('@')){
    emaiError="invalid email"
}
if (emaiError || nameError){
    this.setState({emaiError, nameError})
    return false;
}
return true;

  };

  handleSubmit=event=>{
      event.preventaDefault();
      const isValidate= this.isValidate();
      if(isValidate){
          console.log(this.state);
          this.state(initial)
      }
  }
  
  


  render(){
      return(
      <form onSubmit={this.handleSubmit}>
          <div>
              <input 
              type="text"
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={this.handleChange} />
              <div style={{fontSize:12, color:"red"}}>
                  {this.state.nameError}
              </div>
          </div>
          <div>
              <input 
              type="email"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange} />
              <div style={{fontSize:12, color:"red"}}>
                  {this.state.emailError}
              </div>
          </div>
          <div>
              <input 
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange} />
              <div style={{fontSize:12, color:"red"}}>
                {this.state.passwordError}
              </div>
          </div>
          <button type="submit">submit</button>
      </form>
      )
  }
}
