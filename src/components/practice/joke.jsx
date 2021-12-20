import React from "react";
import axios from "axios";

export default class ReactRandomJoke extends React.Component{
    constructor(){
        super()

        this.state={
            joke:'',
            category:["animal",
            "career",
            "celebrity"]
        }
    }
    componentDidMount=async ()=>{
        const response= await axios.get 
        ('https://api.chucknorris.io/jokes/categories')
        this.setState({category:response.data})
    }
    getRandomJoke=async()=>{
        const response= await axios.get 
    ('https://api.chucknorris.io/jokes/random')
    this.setState({joke:response.data.value})
    }
    getRandomCategoryJoke=async(category)=>{
        const response= await axios.get 
    ('https://api.chucknorris.io/jokes/random?category='+ category)
    this.setState({joke:response.data.value})
    }
    getCategory=()=>{
        return this.state.category.map(category=>
            (<button onClick={()=>this.getRandomJoke(category)} key={category}>{category}</button>))
        
    }
    render(){
        return(
        <div>
            <h1>choode random joke</h1>
            <button onClick={this.getRandomJoke}>get a joke</button>
        {this.getCategory()}
        <h3>{this.state.joke}</h3>
        </div>
    ) 
    }
   
}