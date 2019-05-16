import React from 'react'
import './dashboard.css'
import Calendar from '../../components/Calendar/Calendar'
import ViewUserData from './../../components/ViewUserData/ViewUserData';
import BarChart from '../../components/Charts/BarChart.js'
import LineChart from '../../components/Charts/LineChart.js'
import API from '../../utils/API';
import moment from 'moment'
import DateRangeSearch from '../../components/DateRangeSearch/DateRangeSearch';

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
    currentDate: moment().format('YYYYDDMM'),
    dateRangeStart: "", 
    dateRangeEnd: "",
    data: {}

  }

  componentDidMount() {
    this.viewByDate();
    this.pullAll()
  }

  grabCalendarDate = (grabYear, grabDay, grabMonth) => {
    let date = `${grabYear}${grabDay}${grabMonth}`
    this.setState({ selectedDate: date })
    this.viewByDate()
  }

  pullAll = () => {
    API.getAll()
    .then(response =>{
        this.setState({dbreturn: response.data.allLogs})
        this.getData(this.state.dbreturn)
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
          Date: ""
        })
      }
    }).catch(err => console.log(err))
  }

  prevEntryCallBack = () => {
    this.viewByDate()
    this.pullAll()
  }

  getData = data => {
    let dates = []
    let energy = []
    let mood = []
    let anxiety = []
    let sleep = []
    let dailyLog = []
    let exerciseAmount = []
    let medicineTaken = []
    let exercise = []

    for(var i = data.length -1; i>-1; i--){
      let dateFormatted = moment(data[i]['Date'], 'YYYYDDMM').format('MMMM DD')      
      anxiety.push(data[i]['Anxiety'])
      dailyLog.push(data[i]['DailyLog'])
      dates.push(dateFormatted)          
      energy.push(data[i]['Energy'])
      exercise.push(data[i]['Exercise'])
      exerciseAmount.push(data[i]['ExerciseAmount'])
      medicineTaken.push(data[i]['MedicineTaken'])
      mood.push(data[i]['Mood'])
      sleep.push(data[i]['SleepHours'])
    }


    let chartData = {
      labels: dates,
      // once loop is working, replace with dates array
      datasets: [
          {
              label: 'Mood',
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'rgba(255,99,132,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(114, 191, 63, 0.52)',
              hoverBorderColor: 'rgb(93, 142, 61)',
              data: mood
              // once loop is working, replace with mood array
          },
          {
              label: 'Anxiety',
              backgroundColor: 'rgba(83, 181, 181, 0.4)',
              borderColor: 'rgba(41, 182, 182, 0.77)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(236, 230, 64, 0.44)',
              hoverBorderColor: 'rgba(236, 230, 64, 0.82)',
              data: anxiety
              // once loop is working, replace with anxiety array
          },
          {
              label: 'Energy',
              backgroundColor: 'rgba(41, 142, 182, 0.29)',
              borderColor: 'rgba(41, 142, 182, 0.8)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(241, 28, 138, 0.6)',
              hoverBorderColor: 'rgb(241, 28, 138)',
              data: energy
              // once loop is working, replace with energy array
          }
      ],
      options: {
          scales: {
              yAxes: [{
                  display: true,
                  ticks: {
                      beginAtZero: true,
                      min: 0,
                      max: 10
                  }
              }]
          }
      }
    }
    this.setState({data: chartData})
  }
  

  // Stuff for Jeffy to Dooz
  // If the exercise button is false or unselected; Don't render the Exercise.

  viewDateRange = (startDate, endDate) => {
    API.getRange(startDate, endDate)
      .then(response => {
        console.log(response.data.rangeData)
        this.setState({ dbreturn: response.data.rangeData})
        this.getData(this.state.dbreturn)
      }).catch(err => console.log(err))

  }

  render() {
    return (
      <div className="container-fluid">
        <div className="container-fluid container-top">
          <div className="row">
            <div className="col-6 charts">
              <BarChart
                data={this.state.data}
              />
              <LineChart
                dbreturn={this.state.dbreturn}
              />
            </div>
            <div className="col-6 calendar">
              <Calendar grabCalendarDate={this.grabCalendarDate}/>
              {/* Search Range Component */}
              <DateRangeSearch viewDateRange={this.viewDateRange} currentDate={this.state.currentDate}></DateRangeSearch>
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
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard