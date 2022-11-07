
 import { useParams } from "react-router-dom";
import Header from "./Header";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
 
 export function TodolistInfo (){
   const {todoid} = useParams();
 const [todo, setTodo] = useState({})
   const fetchTodos = async () =>{
    const response = await axios.post(`https://jsonplaceholder.typicode.com/todos/${todoid}`)
    
   setTodo(...response.data)
    // setIsLoading(false)

  }
 useEffect(()=>{
  fetchTodos();
 },[])

 const {title, id, completed} = todo;
   
 return(  
  <React.Fragment>
        <Header/>
        <h2>{title}</h2>
        <h3>{id}</h3>
        <p>{completed?'Done': "pending"}</p>
    </React.Fragment>
   
   )
}