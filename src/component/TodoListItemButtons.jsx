
function TodoListItemButtons(props){
    const {text, classname, func}=props
    return (
        <>
        <div className="edit">
             <span className={classname}>{text}</span>
        </div>
        <div className="delete" >
             <span className={classname} onClick={()=>{func()}}>{text}</span>
        </div>
        </>
    )
}
export default TodoListItemButtons
