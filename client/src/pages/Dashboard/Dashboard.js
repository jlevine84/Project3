import React from 'react'
import './dashboard.css'
import Calendar from '../../components/Calendar/Calendar'

// Styling for map
const style = {
	position: "relative",
	margin: "50px auto"
}

class Dashboard extends React.Component {
  render() {
    return (
      <div className="Jumbotron">
        <h1>Dadirri Dashboard Component</h1>
        Dashboard Main Component
        <div className="App">
          <Calendar style={style} width="302px" />
        </div>
      </div>
    )
  }
}

export default Dashboard