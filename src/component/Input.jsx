

function Input({todoText, setTodoText }){

  return  <input 
   type="text"
   value={todoText}
    onChange = {(e) => setTodoText(e.target.value)}
    placeholder="Add to-do..."
     id="input-field"/>
}
export default Input