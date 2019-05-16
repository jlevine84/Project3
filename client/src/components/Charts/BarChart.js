import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import './BarChart.css'


function BarChart (props)  {

    return (
        <div className = "barChart">
            <Bar
                data={props.data}
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

export default BarChart