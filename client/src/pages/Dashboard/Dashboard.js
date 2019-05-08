import React from 'react'
import './dashboard.css'
import Calendar from '../../components/Calendar/Calendar'

// Styling for calendar
const style = {
	position: "relative",
	margin: "50px auto"
}

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state={

    }
  }

  onDayClick = (e, day) =>  {
    // let className = $(".activity-container").show();
    return (
      <div className="activity-container"><p>This is a div</p></div>
    )
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <h1>Dadirri Dashboard Component</h1>
            Dashboard Main Component
          </div>
          <div className="col-6">
            <div className="calendar-component">
            <Calendar style={style} width="302px"
              onDayClick={(e, day)=> this.onDayClick(e, day)} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            Edit info Pop Up
          </div>
          <div className="col-6">
            New Input Pop Up
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard