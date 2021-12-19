import React from "react";
import {data }from "./data";

export default function Main() {
    console.log({ data });
    const getNames=(data)=>{
        return data.map((el)=>{

        })
    }

    const getNamesFromData= (data)=>{
        return data.map((name)=>{
           return <h3>{name.name}</h3> 
        })
    }

    const getBirthDay = (data)=>{
        return data.map((element)=>{
            return <h4>{element.birthday}</h4>
        })

    }
    const getPeopleByAge=(data)=>{
        return data.filter((age)=>{
           console.log( +age.birthday.slice(-4)<1990)
        })
    }
  
    return(
        <div>
        <h3>{getNamesFromData(data)}</h3>
        <h4>{getBirthDay(data)}</h4>
        <h4>{getPeopleByAge(data)}</h4>
        </div>
    )
}
  