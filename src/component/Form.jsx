import React, { useState, useEffect } from "react";
import Input from "./Input";
import SpanButton from "./SpanButton";
import axios from "axios";

function Form({ todos, setTodos }) {
  const [todoText, setTodoText] = useState("");
  // console.log("FROM APP.JS ", onsetTodos);

  //ADD FUNCTION
  const addTodo = () => {
   
    // let newTodo = {
    //   id: crypto.randomUUID(),
    //   title: todoText,
    //   completed: false,
    // };
    // console.log("clickedaddTodo", newTodo);

    
     const fetchTodos = async () =>{
       const response = await axios.post("https://jsonplaceholder.typicode.com/todos")
      
  
       console.log(response.data)
      setTodos([...todos, response.data])
      
     }
    
    fetchTodos()
  useEffect(()=>{
    
   fetchTodos();
   },
  [])
    
  };

  return (
    <form className="add">
      <Input todoText={todoText} setTodoText={setTodoText} />

      <div className="add-btn" >
             <span onClick={addTodo}>ADD</span>
        </div>
      <SpanButton text={"UPDATE"} idname={"edit-btn"} />
    </form>
  );

  }
export default Form;
