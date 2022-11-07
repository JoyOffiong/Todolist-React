
function SpanButton(props){
   const {text, idname , func}= props

    return ( 
<>
    <span onClick={()=>{func()}} id={idname}>{text}</span>
    <span id={idname}>{text}</span>

</>
    
            
    )
}

export default SpanButton