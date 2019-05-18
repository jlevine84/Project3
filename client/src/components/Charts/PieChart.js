import React from 'react';
import { Pie } from 'react-chartjs-2';
import './PieChart.css'
import moment from 'moment'

function PieChart(props) {

    function getData(data) {
        let dates = []
        let medicineTaken = []
        let exercise = []
        let showered = []

        for (var i = data.length - 1; i > -1; i--) {
            let dateFormatted = moment(data[i]['Date'], 'YYYYMMDD').format('MMMM DD')
            dates.push(dateFormatted)
            medicineTaken.push(data[i]['Medicine Taken'])
            exercise.push(data[i]['Exercised'])
            showered.push(data[i])['Showered']
        }


        let medicineData = {
            labels: [
                'Red',
                'Blue'
            ],
            datasets: [
                {
                    data: medicineTaken,
                    backgroundColor: ['rgba(255,99,132,0.2)'],
                    hoverBackgroundColor: ['rgba(255,99,132,1)']
                }]
        }

        let exerciseData = {
            labels: [
                'Red',
                'Blue'
            ],
            datasets: [
                {
                    data: exercise,
                    backgroundColor: ['rgba(83, 181, 181, 0.4)'],
                    hoverBackgroundColor: ['rgba(41, 182, 182, 0.77)']
                }]
        }
        
        // let showeredData = {
        //     labels: [
        //         'Red',
        //         'Blue'
        //     ],
        //     datasets: [
        //         {
        //             data: [showered],
        //             backgroundColor: ['rgba(41, 142, 182, 0.29)'],
        //             hoverBackgroundColor: ['rgba(41, 142, 182, 0.8)']
        //         }]
        // }   
    }
    return (
        <div className="pieChart">
            {getData(props.dbreturn)}
        </div>
    );
}

export default PieChart