import React from 'react'
import './slider.css'

function Slider(props) {
  return (
    <div className = "float">
      <label>{props.name}</label>
      <br/>
      <input
        name={props.name}
        type="range"
        min="0"
        max="10"
        defaultValue="5"
        onChange={props.update}
      />
      <p>{props.display}</p>
    </div>
  )
}

export default Slider