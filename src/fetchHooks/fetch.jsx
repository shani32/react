import axios from "axios";
import React, { useEffect, useState } from "react";


export default function SearchFetch(){
    const [movie, setMovie]=useState('')

    useEffect(()=>{
        const search= async()=>{
           const {data}= await axios.get('https://intense-mesa-62220.herokuapp.com/swapi.dev/api/films/1/')
           setMovie(data)
        
           console.log(data)
        }
        search()
    }, [])

    return(
        <div>
            <div>{movie.title}</div>
            <div>{movie.director}</div>

        </div>
    )
}
