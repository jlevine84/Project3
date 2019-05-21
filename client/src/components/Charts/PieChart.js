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
        let medfalses = 0
        let exertrues = 0
        let exerfalses = 0
        let showertrues = 0
        let showerfalses = 0

        for (var i = data.length - 1; i > -1; i--) {
            if (data[i]["MedicineTaken"]) {
                medtrues = medtrues + 1
            } else if
                (!data[i]["MedicineTaken"]) {
                medfalses = medfalses + 1
            }

        }
        let medTotal = parseInt(medtrues) + parseInt(medfalses)
        let medTruPer = parseInt(medtrues)/parseInt(medTotal) * 100 + '%'
        console.log("medtotal:" + medTotal)
        console.log("medTruPer:" + medTruPer)
        let medFalPer = parseInt(medfalses) / parseInt(medTotal) * 100 + '%'
        console.log("medtotal:" + medTotal)
        console.log("medFalPer:" + medFalPer)


        const medicineData = {

            labels: ['Took Meds % of time', "No Meds % of time"],
            datasets: [
                {
                    data: [parseInt(medTruPer), parseInt(medFalPer)],
                    backgroundColor: ['rgba(149, 88, 206,0.2)'],
                    hoverBackgroundColor: ['rgba(149, 88, 206,1)']
                }
            ]
        }



        for (var i = data.length - 1; i > -1; i--) {
            if (data[i]["Exercise"]) {
                exertrues = exertrues + 1
            } else if
                (!data[i]["Exercise"]) {
                exerfalses = exerfalses + 1
            }
        }
        let exerTotal = parseInt(exertrues) + parseInt(exerfalses)
        let exerTruPer = parseInt(exertrues) / parseInt(exerTotal) * 100 + '%'
        console.log("exertotal:" + exerTotal)
        console.log("exerTruPer:" + exerTruPer)
        let exerFalPer = parseInt(exerfalses) / parseInt(exerTotal) * 100 + '%'
        console.log("exertotal:" + exerTotal)
        console.log("exerFalPer:" + exerFalPer)

        const exerciseData = {

            labels: ['Exercised % of time', "Didn't Exercise % of time"],
            datasets: [
                {
                    data: [parseInt(exerTruPer), parseInt(exerFalPer)],
                    backgroundColor: ['rgba(142, 204, 159,0.4)'],
                    hoverBackgroundColor: ['rgba(142, 204, 159,1)']
                }
            ]
        }

        for (var i = data.length - 1; i > -1; i--) {
            if (data[i]["Showered"]) {
                showertrues = showertrues + 1
            } else if
                (!data[i]["Showered"]) {
                showerfalses = showerfalses + 1
            }
        }
        let showerTotal = parseInt(showertrues) + parseInt(showerfalses)
        let showerTruPer = parseInt(showertrues) / parseInt(showerTotal) * 100 + '%'
        console.log("showertotal:" + showerTotal)
        console.log("showerTruPer:" + showerTruPer)
        let showerFalPer = parseInt(showerfalses) / parseInt(showerTotal) * 100 + '%'
        console.log("exertotal:" + showerTotal)
        console.log("exerFalPer:" + showerFalPer)

        const showerData = {

            labels: ['Showered % of time', "Didn't Shower % of time"],
            datasets: [
                {
                    data: [parseInt(showerTruPer), parseInt(showerFalPer)],
                    backgroundColor: ['rgba(142, 195, 204,0.4)'],
                    hoverBackgroundColor: ['rgba(142, 195, 204,1)']
                }
            ]
        }


        return (
            <div class="row">
                <div class="col-sm-4">
                    <div style={{ height: '180px', width: '180px' }}>
                        <Pie data={medicineData} width={10} height={10} />
                    </div>
                </div>
                <div class="col-sm-4">
                    <div style={{ height: '180px', width: '180px' }}>
                        <Pie data={exerciseData} width={10} height={10} />
                    </div>
                </div>

                <div class="col-sm-4">
                    <div style={{ height: '180px', width: '180px' }}>
                        <Pie data={showerData} width={10} height={10} />
                    </div>
                </div>

            </div>

        )
    }

    return (
        <div className="pieChart">
            {getData(props.dbreturn)}
        </div>
    );

}



export default PieChart