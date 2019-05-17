import React from 'react'
import './dashboard.css'
import Calendar from '../../components/Calendar/Calendar'
import ViewUserData from './../../components/ViewUserData/ViewUserData';
import BarChart from '../../components/Charts/BarChart.js'
import LineChart from '../../components/Charts/LineChart.js'
import API from '../../utils/API';
import moment from 'moment'
import DateRangeSearch from '../../components/DateRangeSearch/DateRangeSearch';
import Scrape from '../../components/scrape/scrape';

class Dashboard extends React.Component {

  state = {
    selectedDate: moment().format('YYYYMMDD'),
    Mood: "",
    Anxiety: "",
    Energy: "",
    MedicineTaken: "",
    Exercise: "",
    SleepHours: "",
    DailyLog: "",
    ExerciseAmount: "",
    Date: "",
    Logged: null,
    dbreturn:{},
    currentDate: moment().format('YYYYMMDD')

  }

  componentDidMount() {
    this.viewByDate();
    this.pullAll()
  }

  grabCalendarDate = (grabYear, grabDay, grabMonth) => {
    let date = `${grabYear}${grabMonth}${grabDay}`
    this.setState({ selectedDate: date })
    this.viewByDate()
  }

  pullAll = () => {
    API.getAll()
    .then(response =>{
        this.setState({dbreturn: response.data.allLogs})
    })
  }

  viewByDate = async () => {
    API.getByDate(this.state.selectedDate)
    .then( async response => {
      if (response.data.todaysentry[0]) {
        await this.setState({
            Mood: response.data.todaysentry[0].Mood,
            Anxiety: response.data.todaysentry[0].Anxiety,
            Energy: response.data.todaysentry[0].Energy,
            MedicineTaken: response.data.todaysentry[0].MedicineTaken,
            Exercise: response.data.todaysentry[0].Exercise,
            SleepHours: response.data.todaysentry[0].SleepHours,
            DailyLog: response.data.todaysentry[0].DailyLog,
            ExerciseAmount: response.data.todaysentry[0].ExerciseAmount,
            Date: moment(response.data.todaysentry[0].Date, 'YYYYMMDD').format('MMMM Do YYYY'),
            Logged: true
        })
      } else {
        await this.setState({ 
          Mood: "",
          Anxiety: "",
          Energy: "",
          MedicineTaken: "",
          Exercise: "",
          SleepHours: "",
          DailyLog: "",
          ExerciseAmount: "",
          Date: ""
        })
      }
    }).catch(err => console.log(err))
  }

  prevEntryCallBack = () => {
    this.viewByDate()
    this.pullAll()
  } 

  // Stuff for Jeffy to Dooz
  // If the exercise button is false or unselected; Don't render the Exercise.

  viewDateRange = (startDate, endDate) => {
    API.getRange(startDate, endDate)
      .then(async response => {
        await this.setState({ dbreturn: response.data.rangeData})
      }).catch(err => console.log(err))

  }

  render() {
    return (
      <div className="container-fluid">
        <div className="container-fluid container-top">
          <div className="row">
            <div className="col-6 charts">
              <BarChart
                dbreturn={this.state.dbreturn}
              />
              <LineChart
                dbreturn={this.state.dbreturn}
              />
            </div>
            <div className="col-6 calendar">
              <Calendar grabCalendarDate={this.grabCalendarDate}/>
              {/* Search Range Component */}
              <DateRangeSearch 
                viewDateRange={this.viewDateRange}
                currentDate={this.state.currentDate}
              />
            </div>
          </div>
        </div>
        <div className="container-fluid container-bottom">
          <div className="row">
            {/* <div className="col"></div> */}
            <div className="col-6">
              {(this.state.selectedDate > this.state.currentDate) ? <h5>You can not enter an Entry for a future date</h5> :
              <ViewUserData  
                selectedDate={this.state.selectedDate}
                mood={this.state.Mood}
                anxiety={this.state.Anxiety}
                energy={this.state.Energy}
                medicineTaken={this.state.MedicineTaken.toString()}
                exercise={this.state.Exercise.toString()}
                sleepHours={this.state.SleepHours}
                dailyLog={this.state.DailyLog}
                exerciseAmount={this.state.ExerciseAmount}
                date={this.state.Date}
                logged={this.state.Logged}
                prevEntryCallBack={this.prevEntryCallBack}
                selectedDate={this.state.selectedDate}
                userID={this.props.userID}
              />}
            </div>
            <div className="col-6">
              <Scrape></Scrape>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard