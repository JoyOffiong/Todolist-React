import React from 'react'


function Label(props) {
    const {labelColor, labelText, font, showLabel} = props
   
  return (
    <React.Fragment>
   <label style={{color: labelColor, fontSize:font, display: showLabel}}> {labelText}</label>

    </React.Fragment>
  )
}

export default Label