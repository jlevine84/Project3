import React from 'react';
import { Pie } from 'react-chartjs-2';
import './PieChart.css'
import moment from 'moment'

function PieChart(props) {

   let medtrues = 0
   let medfalses = 0
   let exertrues = 0
   let exerfalses = 0
   let showertrues = 0
   let showerfalses = 0
   let counter = 0

   function getData(props) {
       console.log(props)

    for (var i = props.length - 1; i > -1; i--) {
       if (props[i][MedicineTaken] = true) {
           let medtrues = medtrues++
           console.log(medtrues)
       } else if
           (props[i][MedicineTaken] = false) {
           let medfalses = medfalses++
           console.log(medfalses)
       }

      

    // medicineTaken.push(data[i]['Medicine Taken'])
       // exercise.push(data[i]['Exercised'])
       // showered.push(data[i])['Showered']


       // if (exercise = true) {
       //     let exertrues = counter++
       // } else if
       //     (exercise = false) {
       //     let exerfalses = counter++
       // }

       // if (showered = true) {
       //     let showertrues = counter++
       // } else if
       //     (showered = false) {
       //     let showerfalses = counter++
       // }


       // for (var i = data.length - 1; i > -1; i--) {
       //     console.log(props)
       // let dateFormatted = moment(data[i]['Date'], 'YYYYMMDD').format('MMMM DD')
       // dates.push(dateFormatted)
       // medicineTaken.push(data[i]['Medicine Taken'])
       // exercise.push(data[i]['Exercised'])
       // showered.push(data[i])['Showered']
   }


   let medicineData = {
       labels: [
           'Red',
           'Blue'
       ],
       datasets: [
           {
               data: medtrues,
               backgroundColor: ['rgba(255,99,132,0.2)'],
               hoverBackgroundColor: ['rgba(255,99,132,1)']
           },
           {
               data: medfalses,
               backgroundColor: ['rgba(255,99,132,0.2)'],
               hoverBackgroundColor: ['rgba(255,99,132,1)']
           },
       ]
   }

   // let exerciseData = {
   //     labels: [
   //         'Red',
   //         'Blue'
   //     ],
   //     datasets: [
   //         {
   //             data: falses,
   //             backgroundColor: ['rgba(83, 181, 181, 0.4)'],
   //             hoverBackgroundColor: ['rgba(41, 182, 182, 0.77)']
   //         }]
   // }

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

//    return (
//        <div className="pieChart">
//            {getData(props.dbreturn)}
//        </div>
//    );
// }


// export default PieChart