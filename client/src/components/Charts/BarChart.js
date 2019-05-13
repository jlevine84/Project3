import React from 'react';
import { defaults } from 'react-chartjs-2';
import { Bar, Line } from 'react-chartjs-2';
import './BarChart.css'
// import Dashboard from '../../pages/Dashboard/Dashboard'


  function getData(props){
      console.log(props)
      props.date = []
      props.moode = []
      props.anxiety = []
      props.energy = []
      console.log(props.date, props.mood, props.anxiety, props.energy)


    //   let Date = [],
    //   let Mood = [],

      
    //   var dbreturn = {
    //     date:[]
    //     mood:[]
//       }
//       Object.keys(dbreturn).forEach(function (item, key) {
//           console.log(key);
//           console.log(item);
//       });
}


const data = {
    labels: [],
    datasets: [
        {
            label: '',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(114, 191, 63, 0.52)',
            hoverBorderColor: 'rgb(93, 142, 61)',
            data: []
        },
        {
            label: '',
            backgroundColor: 'rgba(83, 181, 181, 0.4)',
            borderColor: 'rgba(41, 182, 182, 0.77)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(236, 230, 64, 0.44)',
            hoverBorderColor: 'rgba(236, 230, 64, 0.82)',
            data: []
        },
        {
            label: '',
            backgroundColor: 'rgba(41, 142, 182, 0.29)',
            borderColor: 'rgba(41, 142, 182, 0.8)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(241, 28, 138, 0.6)',
            hoverBorderColor: 'rgb(241, 28, 138)',
            data: []
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
        console.log(this.props);

        return (
            <div className = "barChart">
                <Bar
                    data={
                        data}
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