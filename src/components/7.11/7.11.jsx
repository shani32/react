import React from "react";
import './styles.css'

class Colors extends React.Component {
    constructor (){
    super()
    this.state= {counter:0}
    } 

    increment =()=>{
        this.setState({counter: this.state.counter +1});
    }

    decrement =()=>{
        this.setState({counter: this.state.counter -1});
    }


    render(){
       return (
            <div>
                <button onClick={this.increment}>+</button>
                <div>{this.state.counter}</div>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}
export default Colors