import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import './BarChart.css'
import moment from 'moment'

function BarChart (props)  {

    function getData(data) {
        let dates = []
        let energy = []
        let mood = []
        let anxiety = []
        let sleep = []
        let dailyLog = []
        let exerciseAmount = []
        let medicineTaken = []
        let exercise = []
    
        for (var i = data.length -1; i>-1; i--) {
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
        
        return (
            <Bar
                data={chartData}
                width={500}
                height={100}
                options={{
                    maintainAspectRatio: false,
                    scales: { yAxes: [{ ticks: { beginAtZero: true, max: 10 } }], xAxes: [{ ticks: { beginAtZero: true } }] }

                }}
            />
        )
    }

    return (
        <div className = "barChart">
            {getData(props.dbreturn)}
        </div>
    );
}

export default BarChart