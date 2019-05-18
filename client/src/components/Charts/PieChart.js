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
        //    meds.push(1)
        //    medsLabels.push("True")
           medtrues = medtrues+1
           console.log(medtrues)
        //    console.log(medsLabels)
       } else if
           (!data[i]["MedicineTaken"]) {
            // meds.push(1)
            // medsLabels.push("False")
           medfalses = medfalses+1
        console.log(medfalses)
        // console.log(medsLabels) 
       }
    }
   

   const medicineData = {
 
       labels: ['True','False'],
       datasets: [
           {
               data: [medtrues, medfalses],
               backgroundColor: ['rgba(255,99,132,0.2)'],
               hoverBackgroundColor: ['rgba(255,99,132,1)']
           }
       ]
   }




   return(
       
       <div style={{height: '180px', width: '180px'}}>
    <Pie
        data={medicineData}
        width={10}
        height={10}
    />
    </div>
)}

return (
    <div className="pieChart">
        {getData(props.dbreturn)}
    </div>
);

    }

   

export default PieChart