import React from 'react';
import { defaults } from 'react-chartjs-2';
import { Bar, Line } from 'react-chartjs-2';
import './BarChart.css'

let dates = []
let energy = []
let mood = []
let anxiety = []
let sleep = []
let dailyLog = []
let exerciseAmount = []
let medicineTaken = []
let exercise = []

function getData(data){   
    
    for(var i = 0; i < data.length; i++){         
        anxiety.push(data[i]['Anxiety'])
        dailyLog.push(data[i]['DailyLog'])
        dates.push(data[i]['Date'])
        energy.push(data[i]['Energy'])
        exercise.push(data[i]['Exercise'])
        exerciseAmount.push(data[i]['ExerciseAmount'])
        medicineTaken.push(data[i]['MedicineTaken'])
        mood.push(data[i]['Mood'])
        sleep.push(data[i]['SleepHours'])
        console.log(data[i])
    }

}

const data = {
    labels: dates,
    datasets: [
        {
            label: 'Mood',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(114, 191, 63, 0.52)',
            hoverBorderColor: 'rgb(93, 142, 61)',
            data: mood
        },
        {
            label: 'Anxiety',
            backgroundColor: 'rgba(83, 181, 181, 0.4)',
            borderColor: 'rgba(41, 182, 182, 0.77)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(236, 230, 64, 0.44)',
            hoverBorderColor: 'rgba(236, 230, 64, 0.82)',
            data: anxiety
        },
        {
            label: 'Energy',
            backgroundColor: 'rgba(41, 142, 182, 0.29)',
            borderColor: 'rgba(41, 142, 182, 0.8)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(241, 28, 138, 0.6)',
            hoverBorderColor: 'rgb(241, 28, 138)',
            data: energy
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

class BarChart extends React.Component {

    render() {
        getData(this.props.dbreturn);
        console.log(dates, mood, energy)
        return (
            <div className = "barChart">
                <Bar
                    data={data}
                    width={500}
                    height={100}
                    options={{
                        maintainAspectRatio: false,
                        scales: { yAxes: [{ ticks: { beginAtZero: true, max: 10 } }], xAxes: [{ ticks: { beginAtZero: true } }] }

                    }}
                />
            </div>
        );
    }
};

export default BarChart