import React from 'react'
import './dashboard.css'
import Calendar from '../../components/Calendar/Calendar'
import LogUserData from './../../components/LogUserData/LogUserData';
import ViewUserData from './../../components/ViewUserData/ViewUserData';
import BarChart from '../../components/Charts/BarChart.js'
import LineChart from '../../components/Charts/LineChart.js'
import API from '../../utils/API';
import moment from 'moment'
import Input from '../../components/Input/Input'

class Dashboard extends React.Component {

  state = {
    selectedDate: moment().format('YYYYDDMM'),
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
    dateRangeStart: "", 
    dateRangeEnd: ""

  }

  componentDidMount() {
    this.viewByDate();
    this.pullAll()
  }

  grabCalendarDate = (grabYear, grabDay, grabMonth) => {
    console.log(`${grabYear}${grabDay}${grabMonth}`)
    let date = `${grabYear}${grabDay}${grabMonth}`
    this.setState({ selectedDate: date })
    this.viewByDate()
  }

  pullAll = () => {
    console.log('pull all executed')
    API.getAll()
    .then(response =>{
        console.log(response)
        this.setState({dbreturn: response.data.logs.entries})
        console.log(this.state.dbreturn)
    })
  }
  // will need to foreach through data.logs.entries and parse into arrays

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
            Date: moment(response.data.todaysentry[0].Date, 'YYYYDDMM').format('MMMM DD YYYY'),
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
  }

  // Stuff for Jeffy to Dooz
  // Create two inputs and a submit button
  // format the inputs to only accept dates in a specific format and alert the user if the inputs are invalid
  // Grab the values of the the two inputs
  grabDateRange = () => {
    console.log(`Search Range: ${this.state.dateRangeStart} ${this.state.dateRangeEnd}`)
    let startDate = this.state.dateRangeStart.split('/').join('')
    let endDate = this.state.dateRangeEnd.split('/').join('')
    console.log(startDate, endDate)
    this.viewDateRange(moment(startDate, 'MMDDYYYY').format('YYYYDDMM'), moment(endDate, 'MMDDYYYY').format('YYYYDDMM'))
  }

  viewDateRange = (startDate, endDate) => {
    console.log(startDate + " " + endDate)
    API.getRange(startDate, endDate)
      .then(response => {

      }).catch(err => console.log(err))
  }

  updateValue = async event => {
    let name = event.target.name
    let value = event.target.value
    await this.setState({ [name]: value} )
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <BarChart
            dbreturn = {this.state.dbreturn}
            />
            <LineChart/>
          </div>
          <div className="col-6">
            <div className="calendar-component">
              <Calendar grabCalendarDate={this.grabCalendarDate}/>
            </div>
          </div>
        </div>
        <div className="row">
            <Input
              placeholder="MM/DD/YYYY"
              title="Start Date"
              name="dateRangeStart"
              update={this.updateValue}
            />
            <Input
              placeholder="MM/DD/YYYY"
              title="End Date"
              name="dateRangeEnd"
              update={this.updateValue}
            />
            <button onClick={this.grabDateRange} className="btn btn-secondary">Search</button>
        </div>
        <div className="row">
          <div className="col-6">
            
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
            />
          </div>
          <div className="col-6">

          <LogUserData 
            userID={this.props.userID}
            selectedDate={this.state.selectedDate}
            prevEntryCallBack={this.prevEntryCallBack}           
          />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard