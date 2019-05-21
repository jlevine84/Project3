import React from 'react';
import { Line } from 'react-chartjs-2';
import './LineChart.css'
import moment from 'moment'

function LineChart (props) {

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
          let dateFormatted = moment(data[i]['Date'], 'YYYYMMDD').format('MMMM DD')      
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
        
            datasets: [
            {
                label: 'Sleep',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderColor: 'rgba(140, 6, 224,1)',
                hoverBackgroundColor: 'rgba(140, 6, 224,1)',
                hoverBorderColor: 'rgba(140, 6, 224,1)',
                borderWidth: 2,
                data: sleep
                
            },
              {
                label: 'Mood',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                data: mood
        
            },
            {
                label: 'Anxiety',
                backgroundColor: 'rgba(83, 181, 181, 0.4)',
                borderColor: 'rgba(41, 182, 182, 0.77)',
                borderWidth: 1,
                data: anxiety
            },
            {
                label: 'Energy',
                backgroundColor: 'rgba(41, 142, 182, 0.29)',
                borderColor: 'rgba(41, 142, 182, 0.8)',
                borderWidth: 1,
                data: energy
            }
          ] 
        }

        return(
            <Line
                data={chartData}
                width={500}
                height={200}
                options={{
                    maintainAspectRatio: false,
                    scales: { yAxes: [{ ticks: { beginAtZero: true } }], xAxes: [{ ticks: { beginAtZero: true } }] }
                }}
            />
        )
    }


    return (
        <div className="lineChart">
            {getData(props.dbreturn)}
        </div>
    );
};

export default LineChart