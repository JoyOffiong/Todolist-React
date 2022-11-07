import "../../src/pages/TogoList/TodoList.css";
import { Link } from "react-router-dom";
import axios from "axios";

// import Input from "./Input";

function TodoListCard(props) {
  const { todo, todos, setTodos} = props;
const { id, title, completed } = todo;

  function deleteToDo (){
  const response = axios
          .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
          .then ((response)=>{
              const deleted = todos.filter((todo) => todo.id !== id);
               setTodos(deleted) 
             
     return response
          })
 .catch ((error)=> {
  console.log(error)
})  

return response
 }




  function toggle() {
    let updatedTodos = todos.find((todo) => todo.id=== id)
    
      if (updatedTodos.completed === false) {
        updatedTodos.completed = true
      }  
      else{
        updatedTodos.completed = false
      }
      console.log(updatedTodos)

    let updates=  todos.map((todo)=> (todo.id === id? updatedTodos: todo)
      
   
      )
      console.log(updates)
      setTodos(updates);
   
    };
   
  
  return (
    <>
    <div className="toDoContainer">
    <ul className="todos align" id="toDoContainer" />

{/* <li className={isCompleted ? "checked" : undefined}> */}
<li className="toDoContainer">

  <div className="input">
    <input onChange={toggle} type="checkbox" />
  </div>

  <div className="label" >
    <label htmlFor="todo_1" className={completed ? "checked" : undefined}>
      {title}

    </label>
  </div>

  <div className="icons">
    <div className="edit">
      <span>Edit</span>
    </div>

    {/* <div > */}
      <button className="delete"
        onClick={deleteToDo}
        
      >
        Delete
      </button>
    {/* </div> */}

    <div className="showMore">
      <Link to= {`/${id}`}>😳</Link>
        
    </div>

  </div>
</li>
<ul />
    </div>

    </>
  );
}

export default TodoListCard;
