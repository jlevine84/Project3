import React from 'react'
import './dashboard.css'
import Calendar from '../../components/Calendar/Calendar'
import LogUserData from '../../components/LogUserData/LogUserData'
import ViewUserData from '../../components/ViewUserData/ViewUserData'
// Styling for map
const style = {
	position: "relative",
	margin: "50px auto"
}

class Dashboard extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <h1>Welcome, {this.props.username}</h1>
            Dashboard Main Component
          </div>
          <div className="col-6">
            <div className="calendar-component">
              <Calendar style={style} width="302px" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <ViewUserData></ViewUserData>
          </div>
          <div className="col-6">
           <LogUserData></LogUserData>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard