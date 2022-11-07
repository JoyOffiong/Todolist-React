import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoList from './pages/TogoList/TodoList';
import { TodolistInfo } from "./component/TodolistInfo";
import { Routes, Route} from "react-router-dom";
// import { BrowserRouter, Routes } from "react-router-dom";
function App() {

  let [todos, setTodos] =useState([

    {
      id: "1",
      title: "Joy",
      completed: false,

    }
  ])

  const [isLoading, setIsLoading] = useState(true)


 

    const fetchTodos = async () =>{
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
      
     setTodos(response.data)
      setIsLoading(false)
     
    }
    
   useEffect(()=>{
    
    fetchTodos();
   },
   [])



  // const [greetingText, setGreetingText] = useState("Because I'm happy");
  // const [TextColor, setTextColor] = useState("blue");
  // const [sizeofFont, setsizeofFont] = useState(120);
  // const [showLabel, setshowLabel] = useState(true)

  // const details = {
  //   name: "Joy Offiong",
  //   age: "22",
  //   profession: "Software Developer",
  // };

  // const softDrinks = ["coke", "fanta", "malt"];
// const[ Todo, setTodo] = useState([
//    { id: crypto.randomUUID,
//     title: title,
//     isCompleted: false,
// }
// ]  )
  
  
  return (
    <React.Fragment>
       
       <Routes>
       <Route path='/' element={<TodoList 
      todos={todos}   setTodos={setTodos} isLoading={isLoading} />
      }/> 
   
   
  
      <Route path=':todo.id'
    element= {<TodolistInfo  todos={todos}/>} /> 
 
 </Routes>

    
 
      {/* <H1
        text={greetingText}
        redColor
        objectOfDetails={details}
        drinks={softDrinks}
        number={12345}
      />
      <button onClick={() => setGreetingText("Joy Loves God")}>
        Change Greeting Text
      </button>

      <br />
      <Label labelText={"Joy"} labelColor={TextColor} font={sizeofFont} showLabel= {showLabel} />

      <button onClick={() => {
        setTextColor("red")
         setsizeofFont(50)
    } }>
        Change Joy's name color
      </button>
          
      <button onClick={()=>setshowLabel(!showLabel)} >toggle this baby</button> */}
   </React.Fragment>
  );
}

export default App;
