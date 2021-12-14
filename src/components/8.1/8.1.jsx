import React from "react";

class LifeCycle extends React.Component{
    constructor(props){
    super(props)
    this.state={
        favouriteColor:'blue'
    }    
    }
    getColor=()=>{
        setTimeout(()=>{
            this.setState({favouriteColor:'red'})
        },1000)
    }
    componentDidMount(){
        this.getColor();
    }
    render(){
        return(
            <div>
                <h1>my favourite color is {this.state.favouriteColor}</h1>
            </div>
        )
    }

}
export default LifeCycle