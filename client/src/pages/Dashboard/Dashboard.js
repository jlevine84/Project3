import React from 'react'
import './dashboard.css'
import Calendar from '../../components/Calendar/Calendar'
import LogUserData from './../../components/LogUserData/LogUserData';
import ViewUserData from './../../components/ViewUserData/ViewUserData';
import BarChart from '../../components/Charts/BarChart.js'
import LineChart from '../../components/Charts/LineChart.js'
import moment from 'moment'
class Dashboard extends React.Component {

  state = {
    selectedDate: moment().format('MM DD YYYY')
  }

  grabCalendarDate = (selectedDate) => {
   let date = selectedDate.month+ " " + selectedDate.day + " " +selectedDate.year
   console.log(date)
   this.setState({
     selectedDate: date
   });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          
          <div className="col-6">
          <BarChart>
          </BarChart>
          <LineChart />
          </div>
          <div className="col-6">
            <div className="calendar-component">
            <Calendar grabCalendarDate= {this.grabCalendarDate}/>
              

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
           <ViewUserData  date={this.state.selectedDate}>
           </ViewUserData>
           </div>
          <div className="col-6">
          <LogUserData userID={this.props.userID}/>
          </div>
          
        </div>
      </div>
    )
  }
}

export default Dashboard