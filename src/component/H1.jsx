

function H1(props) {
    const {text, redColor, blueColor,}= props //destructuring of the props, 
  return (
    <div>
        <h2 className={(redColor && "color-red") || (blueColor && "color-blue")}>    {  /*the logical and logocal or operators  and for boolean */}
            {text || "default information if no value is passed in the app.js " }  {/*for strings */}
        </h2>
      
    </div>
  )
}

export default H1

/* 
The logc behind hthe props and useState features of reaact is that"

//PROPS
first, u might decide tO pass the prop as a paramter to the parent OR NOT, this can be any data type
 Then in the parent file , in this case, it is the app.js file, we bring in the values of the parameter

 in a case where we need to change the state of the prop, 
 use the useState syntax= const [initialState, setinitialState] = useState("the value of the initialState")
 now, in the parent fil, where their value is stated, and in here the value of the property we want to make changes to, will the the {"initialStaTe"(FROM OUR EXAMPLE ABLOVE)}
 
 And to change the state of the property of this item we're making changes to , we can use any event, e.g onclick, onchange, etc, and declaser it as a function- ()=>setTextColor("value of the new state")


 also, note the value of the property can be called used in the child component, that was imported into it. All we need to do is to call the property name and it WORKS!!!!! 
 




*/