import React from "react";

import './style.css';

class ShowBox extends React.Component {
    constructor(props){
        super(props);
        this.state={display:false}
    }
    render() {
  return(
      <div className="main">
         <button onClick={()=>{console.log(this.state);this.setState({display:!this.state.display})}}>show</button>
         {this.state.display?<div className="yellow-box"></div>:<></>}
         
      </div>
      );
  }
}

export default ShowBox;