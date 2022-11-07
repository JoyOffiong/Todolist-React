import React, { useState} from "react";
import Input from "./Input";
import SpanButton from "./SpanButton";
import axios from "axios";

function Form({ todos, setTodos }) {
  const [todoText, setTodoText] = useState("");
  // console.log("FROM APP.JS ", onsetTodos);

  //ADD FUNCTION
  async function addTodo () {
   
   
    // console.log("clickedaddTodo", newTodo);

       const response = await axios
       .post("https://jsonplaceholder.typicode.com/todos")
       .then((response)=>{
        let newTodo = {
          id: crypto.randomUUID(),
          title: todoText,
          completed: false,
        };
        setTodos([newTodo,...todos ])

        return response
      })
  
      .catch((error)=>{
        console.log(error)
      })
 
     return response
    
  //   fetchTodos()
  // useEffect(()=>{
    
  //  fetchTodos();
  //  },
  // [])
    
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
