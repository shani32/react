import React from "react";
import axios from "axios"


export default class RandomJoke extends React.Component{
    state={
        joke:'',
        category: [],
        categoryJoke: "",
    }


    // async componentDidMount(){
    //     const url= "https://api.chucknorris.io/jokes/random";
    //     const response= await fetch(url)
    //     const data=await response.json();
    //     // this.setState({joke:data.value, loading:false})
    //     console.log(data.value)
    // }

    randomJoke=()=>{
        axios.get('https://api.chucknorris.io/jokes/random')
        .then((response)=>{
            this.setState({
                joke: response.data.value
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
   handleJoke = async ()=>{
    const response= await axios.get('https://api.chucknorris.io/jokes/categories')
   this.setState({category:response.data})
    this.setState({joke: response.data.value})
}
btnClick = async (category) => {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    )
    this.setState({ categoryJoke:response.data.value});
      console.log(response.data.value);
    };

    render(){
     return(
        <div>
            <div>{this.state.joke}</div>
            <button  onClick={this.randomJoke}> Get joke</button>
         
        
            <button  onClick={this.handleJoke}> Get joke from category</button>
         
        
            <div>{this.state.category.map((category)=>{
              return (
                <button onClick={() => {this.btnClick(category)}}>{category} </button>);
                  })}  
                 
            </div> 
        
        </div>  
        )
    }
}