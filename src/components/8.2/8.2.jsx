import React from "react";
import './style.css'

class LifeBoxes extends React.Component{
    constructor(props){
    super(props)
    this.state={
        isBox:false,
        isBox2:false,
        isBox3:false
    }    
    }
    getBoxes=()=>{
        setTimeout(()=>{
            this.setState({isBox:!this.setState.isBox})
            this.setState({isBox2:!this.setState.isBox2})
            this.setState({isBox3:!this.setState.isBox3})
        },1000)
    }
    componentDidMount(){
        this.getBoxes();
    }
    componentDidUpdate(){
        setTimeout(()=>{
            this.setState({isBox:false})
            this.setState({isBox2:false})
            this.setState({isBox3:false})
        },4000)
    }
    render(){
        return(
            <div>
                {this.state.isBox && (<div className="box"></div>)}
                {this.state.isBox2 && (<div className="box2"></div>)}
                {this.state.isBox3 && (<div className="box3"></div>)}
            </div>
        )
    }

}
export default LifeBoxes