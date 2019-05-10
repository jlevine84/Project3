import React from 'react'
import './dashboard.css'
import Calendar from '../../components/Calendar/Calendar'
import LogUserData from './../../components/LogUserData/LogUserData';
import ViewUserData from './../../components/ViewUserData/ViewUserData';
import BarChart from './../../components/Chart'


const style = {
	position: "relative",
	margin: "50px auto"
}

class Dashboard extends React.Component {
  onDayClick = (e, day) =>  {
    return <div className="activity-container">This is a div</div>
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <BarChart>
          </BarChart>
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
           <ViewUserData>
           </ViewUserData>
           </div>
          <div className="col-6">
          <LogUserData/>
          </div>
          
        </div>
      </div>
    )
  }
}

export default Dashboard