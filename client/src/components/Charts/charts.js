import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

const data = {
    labels: ['May 05, 2019', 'May 06, 2019', 'May 07, 2019', 'May 08, 2019', 'May 09, 2019'],
    datasets: [
        {
            label: 'Mood',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [2, 8, 5, 4, 7]
        }
    ],
    labels: ['May 05, 2019', 'May 06, 2019', 'May 07, 2019', 'May 08, 2019', 'May 09, 2019'],
    datasets: [
        {
            label: 'Anxiety',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [3, 9, 6, 2, 6]
        }
    ],
    labels: ['May 05, 2019', 'May 06, 2019', 'May 07, 2019', 'May 08, 2019', 'May 09, 2019'],
    datasets: [
        {
            label: 'Energy',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [5, 6, 3, 2, 4]
        }
    ],
};

class BarChart extends React.Component {
 

    render() {
        return (
            <div>
                <h2>Mental Health Data (custom size)</h2>
                <Bar
                    data={data}
                    width={100}
                    height={50}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        );
    }
};

export default BarChart