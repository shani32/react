import React from "react";
import './style.css';

class BoxColor extends React.Component {
    constructor(){
        super();
        this.state={
            isYellow:false, 
            text:false
        };
        
    }
    
    getToggle =()=>{
        this.setState ({isYellow: !this.state.isYellow})
    }
    
    render() {
  return(
      <div >
         <button onClick={this.getToggle}>{this.state.isYellow ? "hide" : "show"}</button>
        {this.state.isYellow && (<div className="yellow" style={{backgroundColor:'yellow'}}></div>)}
         
      </div>
      );
  }
}

export default BoxColor;