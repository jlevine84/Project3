import React from 'react'
import './input.css'


function Input(props) {
  return (
    <div className="form-group">
      <label>{props.name}</label>
      <textarea 
        className="form-control" 
        placeholder={props.name} 
        name={props.name}
        onChange={props.update}
        rows="3"></textarea>
    </div>
  )
}

export default Input