import React, { Component } from 'react';
import ViewUserData from '../ViewUserData/ViewUserData';
import { Bar, Line, Scatter } from "react-chartjs-2"

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData{
                labels: [ //x axes]
                ]
            }
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: bottom.
        
    }

    render() {
        return (
            <div className="chart">
                <Bar
                    data={this.state.moodsData}
                    datasets: [{
                        label: 'Moods Data'
                        data: []
            }]
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Mental Health Data',
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                /> 
                <Line
                    data={this.state.hrsSleepData}
                    options={{
                        legend: {
                            display: this.props.lineLegend,
                            position: this.props.lineLegendPosition
                        }
                    }}
                />
                <Scatter
                    data={this.state.medsexerData}
                />
            </div>
        )
    }

}

var ctx = document.getElementById('myChart').getContext('2d');

var mixedChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: ['Mood', 'Anxiety', 'Energy'],
            datasets: [{
                label: 'Mood// mood data: [10, 20, 30, 40]',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [
                //mood data: [5, 6, 7, 8]
                // energy data: [10, 20, 30, 40]
                // anxiety data: [10, 20, 30, 40]
                ]
        }, {
            label: 'Line Dataset-Hrs Sleep',
            // data: [50, 50, 50, 50],
            // Changes this dataset to become a line
            type: 'line'
        }, {
            label: 'Scatter Data-set Medications',
            //data [0 for false, 10 for true]
            type: 'scatter'
        }]
    
          // labels: [Dates]
    },
    options: options
});


export default Chart
