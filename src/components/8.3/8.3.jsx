import React from "react";
import './style.css';

class ChangeColor extends React.Component{
    constructor(props){
    super(props)
    this.state={
        boxColor:'', radius:'', counter:0} 
    this.boxColors=['green', 'blue', 'pink', 'orange', 'grey']
       
    }
    getColor=()=>{
        setTimeout(()=>{
            this.setState({boxColor: this.state.boxColor})
            this.setState({counter: this.state.counter})
        },500)
    }
    componentDidMount(){
        this.getColor();
    }
    componentDidUpdate(){
        if(this.state.counter<5){
            setTimeout(()=>{
            this.setState({ boxColor: this.boxColors[this.state.counter], counter: this.state.counter + 1 });
        },500)
        }else{
            console.log(this.state.radius)
            this.setState({radius:'50%', counter:0})
        }
        
        
    }
    render(){
        return(
            <div>
               <div className="box5" style={{backgroundColor:this.state.boxColor, borderRadius:this.state.radius }}></div>
            </div>
        )
    }

}
export default ChangeColor