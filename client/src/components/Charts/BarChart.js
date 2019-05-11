import React from 'react';
import { defaults } from 'react-chartjs-2';
import { Bar, Line } from 'react-chartjs-2';
import './BarChart.css'
const data = {
    labels: ['05/05/19', '05/06/19', '05/07/19', '05/08/19', '05/09/19'],
    datasets: [
        {
            label: 'Mood',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(114, 191, 63, 0.52)',
            hoverBorderColor: 'rgb(93, 142, 61)',
            data: [2, 8, 5, 4, 7]
        },
        {
            label: 'Anxiety',
            backgroundColor: 'rgba(83, 181, 181, 0.4)',
            borderColor: 'rgba(41, 182, 182, 0.77)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(236, 230, 64, 0.44)',
            hoverBorderColor: 'rgba(236, 230, 64, 0.82)',
            data: [3, 9, 6, 2, 6]
        },
        {
            label: 'Energy',
            backgroundColor: 'rgba(41, 142, 182, 0.29)',
            borderColor: 'rgba(41, 142, 182, 0.8)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(241, 28, 138, 0.6)',
            hoverBorderColor: 'rgb(241, 28, 138)',
            data: [5, 6, 3, 2, 4]
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