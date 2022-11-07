import TodoListCard from "./TodoListCard";
function TodoListItems({todos, setTodos, isLoading}) {

  console.log(todos)
  return (
    <div>
      <div className="content"> 
      {isLoading&& <p>Loading</p>} 
     
      {!isLoading && todos.length === 0 && (<p>No Record</p>)} 

      {todos.map((todo)=>{
      
    return  (<TodoListCard 
    todo= {todo} 
     key= {todo.id} 
     todos={todos}
      setTodos=
     {setTodos}
     />)
      }
    )
    // console.log(todo.id)
          
    }  
      </div>
    </div>)
};

export default TodoListItems;
