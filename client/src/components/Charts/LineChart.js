import React from 'react';
import { Line } from 'react-chartjs-2';
import './LineChart.css'
const data = {
    labels: ['05/05/19', '05/06/19', '05/07/19', '05/08/19', '05/09/19'],
    datasets: [
        {
            label: 'Sleep',
            fillColor: 'rgba(220,220,220,0.2)',
            strokeColor: 'rgba(220,220,220,1)',
            pointColor: 'rgba(220,220,220,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data: [9, 7, 14, 10, 3],
        },
    ]
}

class LineChart extends React.Component {


    render() {
        return (
            <div className = "lineChart">
                <Line
                    data={data}
                    width={500}
                    height={100}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        );
    }
};

export default LineChart