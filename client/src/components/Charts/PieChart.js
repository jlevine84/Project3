import React from 'react';
import { Pie } from 'react-chartjs-2';
import './PieChart.css'
import moment from 'moment'

function PieChart(props) {


   function getData(data) {
       console.log(data)

       let meds = []
       let medsLabels = []
       let medtrues = 0
       let medfalses =0
       let exertrues = 0
       let exerfalses = 0
       let showertrues = 0
       let showerfalses = 0
       let counter = 0

    for (var i = data.length - 1; i > -1; i--) {
       if (data[i]["MedicineTaken"]) {
           medtrues = medtrues+1
           console.log(medtrues)
       } else if
           (!data[i]["MedicineTaken"]) {
           medfalses = medfalses+1
        console.log(medfalses) 
       }
    }
   

   const medicineData = {
 
       labels: ['Took Medicine',"Didn't Take Medicine"],
       datasets: [
           {
               data: [medtrues, medfalses],
               backgroundColor: ['rgba(149, 88, 206,0.2)'],
               hoverBackgroundColor: ['rgba(149, 88, 206,1)']
           }
       ]
   }



   for (var i = data.length - 1; i > -1; i--) {
    if (data[i]["Exercise"]) {
        exertrues = exertrues+1
        console.log(exertrues)
    } else if
        (!data[i]["Exercise"]) {
        exerfalses = exerfalses+1
     console.log(exerfalses) 
    }
 }


const exerciseData = {

    labels: ['Exercised',"Didn't Exercise"],
    datasets: [
        {
            data: [exertrues, exerfalses],
            backgroundColor: ['rgba(142, 204, 159,0.4)'],
            hoverBackgroundColor: ['rgba(142, 204, 159,1)']
        }
    ]
}

for (var i = data.length - 1; i > -1; i--) {
    if (data[i]["Showered"]) {
        showertrues = showertrues+1
        console.log(showertrues)
    } else if
        (!data[i]["Showered"]) {
        showerfalses = showerfalses+1
     console.log(showerfalses) 
    }
 }


const showerData = {

    labels: ['Showered',"Didn't Showered"],
    datasets: [
        {
            data: [showertrues, showerfalses],
            backgroundColor: ['rgba(142, 195, 204,0.4)'],
            hoverBackgroundColor: ['rgba(142, 195, 204,1)']
        }
    ]
}


   return(
    <div class="row">
    <div class="col-sm-4">       
    <div style={{height: '180px', width: '180px'}}>
        <Pie data={medicineData} width={10} height={10}/>      
    </div>
    </div>
    <div class="col-sm-4">       
    <div style={{height: '180px', width: '180px'}}>
    <Pie data={exerciseData} width={10} height={10}/>
    </div>
    </div>

    <div class="col-sm-4">       
    <div style={{height: '180px', width: '180px'}}>
    <Pie data={showerData} width={10} height={10}/>
    </div>
    </div>
       
 </div>

   )}

return (
    <div className="pieChart">
        {getData(props.dbreturn)}
    </div>
);

    }

   

export default PieChart