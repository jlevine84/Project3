import React from 'react'
import './dashboard.css'
import Calendar from '../../components/Calendar/Calendar'
import LogUserData from './../../components/LogUserData/LogUserData';
import ViewUserData from './../../components/ViewUserData/ViewUserData';
import BarChart from '../../components/Charts/BarChart.js'
import LineChart from '../../components/Charts/LineChart.js'
import API from '../../utils/API';
import moment from 'moment'
import DateRangeSearch from './../../components/dateRangeSearch/dateRangeSearch';

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
    test: "test",
    startDay: '01',
    startMonth: 'January',
    startYear: '2019',
    endDay:'01',
    endMonth: 'December',
    endYear: '2020',
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
            Date: moment(response.data.todaysentry[0].Date, 'YYYYDDMM').format('MMMM Do YYYY'),
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
          Date: "",
          Logged: false
        })
      }
    }).catch(err => console.log(err))
  }

  prevEntryCallBack = () => {
    this.viewByDate()
  }

  // Stuff for Jeffy to Dooz
  // Validation of inputs, Log new Entry and search fields.
  // Validation of future calendar dates
  // If the exercise button is false or unselected; Don't render the Exercise.
  // Ability to update a user's entry.
  grabDateRange = () => {
    let startDate= this.state.startMonth + " " + this.state.startDay + " " + this.state.startYear;
    let endDate = this.state.endMonth + " " + this.state.endDay + " " + this.state.endYear;
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
    console.log(name)
    console.log(value)
    await this.setState({ [name]: value} )
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="container-fluid container-top">
          <div className="row">
            <div className="col-6 charts">
              <BarChart
                dbreturn = {this.state.dbreturn}
              />
              <LineChart
                dbreturn={this.state.dbreturn}
              />
            </div>
            <div className="col-6 calendar">
              <Calendar grabCalendarDate={this.grabCalendarDate}/>
              {/* Search Range Component */}
              <DateRangeSearch updateValue={this.updateValue} grabDateRange={this.grabDateRange}></DateRangeSearch>
            </div>
          </div>
        </div>
        <div className="container-fluid container-bottom">
          <div className="row">
            {/* <div className="col"></div> */}
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
            prevEntryCallBack={this.prevEntryCallBack}
            selectedDate={this.state.selectedDate}
            userID={this.props.userID}
          />
              
              
            </div>
            <div className="col-6">
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard