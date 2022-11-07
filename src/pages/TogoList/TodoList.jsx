import TodoListItems from "../../component/TodoListItems";
import Header from "../../component/Header";
import Form from "../../component/Form";
import "./TodoList.css";

function TodoList({todos, setTodos, isLoading}) {
console.log(todos)
  return (
    <div className="todoList">
      < Header />
      <div className="content"> 
        <Form todos={todos} setTodos={setTodos}/>
        <TodoListItems todos={todos} setTodos= {setTodos} isLoading= {isLoading}/>
      </div>
    </div>
  );
}

export default TodoList;
