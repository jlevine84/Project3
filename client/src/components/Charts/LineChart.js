import React from 'react';
import { Line } from 'react-chartjs-2';
import './LineChart.css'

let dates = [];
let sleep = []

function getData(props) {
    // can't test functionality of for loop until db call can return all entries. Currently only returning one.
    for (var i = 0; i < props.length; i++) {
        dates.push(props[i]['Date'])
        sleep.push(props[i]['SleepHours'])
    }
}
const data = {
    labels: dates,
    datasets: [
        {
            label: 'Sleep',
            backgroundColor: 'rgba(55, 240, 240, 0.19)',
            strokeColor: 'rgba(220,220,220,1)',
            pointColor: 'rgba(220,220,220,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#37F0F0',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data: sleep, 
        },
    ]
}

class LineChart extends React.Component {
 componentDidUpdate(){
     dates =[];
     sleep=[];
 }
 componentWillUnmount(){
    dates=[];
    sleep=[];
}

    render() {
        getData(this.props.dbreturn); 
        return (
            <div className="lineChart">
                <Line
                    data={data}
                    width={500}
                    height={100}
                    options={{
                        maintainAspectRatio: false,
                        scales: { yAxes: [{ ticks: { beginAtZero: true, max: 20 } }], xAxes: [{ ticks: { beginAtZero: true } }] }
                    }}
                />
            </div>
        );
    }
};

export default LineChart