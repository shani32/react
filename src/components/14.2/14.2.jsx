import React from "react";

export default class Clipboard extends React.Component{
constructor(){
    super()
    this.inputref=React.createRef();
    this.state={
        inputMeaning:''
    }
}
    copyToClipboard=(newClip)=>{
        navigator.clipboard.writeText(newClip).then(function(){
console.log(newClip)
        },function(){
            console.log('failed')
        })
        
       
    }
    render(){
        return(
            <div>
               <h1>meaning of life</h1>
               <input ref={this.inputref} type="textArea" 
                     value={this.state.inputMeaning} onChange={(e)=> this.setState({inputMeaning: e.target.value})} />
                    <button 
                    onClick={()=>{this.copyToClipboard(this.inputref.current.value)}}>copy</button>
                
            </div>
        )
    }
}