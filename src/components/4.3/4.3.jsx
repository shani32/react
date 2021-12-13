import React from "react";


class Card2 extends React.Component{
    render(){
    return(
            <div className="container2">
            <img className="image" src={this.props.src} />
            <div className="title" >{this.props.title} </div>
            <p className="description">{this.props.description}</p>
            <a className="link" href={this.props.href}>{this.props.link}</a>
        </div>
    )
    }
}
    
        

export default Card2