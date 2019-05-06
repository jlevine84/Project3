import React from 'react'
import './slider.css'

function Slider(props) {
  return (
    <div>
      <label>{props.name}</label>
      <br/>
      <input
        name={props.name}
        type="range"
        min="1"
        max="5"
        defaultValue="3"
        onChange={props.update}
      />
      <p>{props.display}</p>
    </div>
  )
}

export default Slider