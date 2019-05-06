import React from 'react'
import './booleaninput.css'

function BooleanInput(props) {
  return (
    <div className="medicines-Taken form-check">
      <p><strong>Medicine Taken</strong></p>
      <input 
        className="form-check-input" 
        type="radio" 
        name={props.name}
        value="true"
        onClick={props.update} 
        
      />
      <br/>
      <p><strong>True</strong></p>
      <input 
        className="form-check-input" 
        type="radio" 
        name="exampleRadios" 
        value="false"
        onClick={props.update} 
      />
      <br/>
      <p><strong>False</strong></p>
    </div>
  )
}

export default BooleanInput