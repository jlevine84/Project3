import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

let dates = []
let energy = []
let mood = []
let anxiety = []
let sleep = []
let dailyLog = []
let exerciseAmount = []
let medicineTaken = []
let exercise = []



function getData(data) {
    
    for (var i = 0; i < data.length; i++) {
        // console.log(props[i])
        // console.log(props[i]['Anxiety'])
        anxiety.push(data[i]['Anxiety'])
        dailyLog.push(data[i]['DailyLog'])
        dates.push(data[i]['Date'])
        energy.push(data[i]['Energy'])
        exercise.push(data[i]['Exercise'])
        exerciseAmount.push(data[i]['ExerciseAmount'])
        medicineTaken.push(data[i]['MedicineTaken'])
        mood.push(data[i]['Mood'])
        sleep.push(data[i]['SleepHours'])
    }
}
const data = [
    {
        Date: dates, Mood: mood, Anxiety: anxiety, Energy: energy,
    }
];

export default class Example extends PureComponent {
    // static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

    render() {

        getData(this.props.dbreturn); 
        return (
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="Mental Health Data" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Mood" fill="#8884d8" />
                <Bar dataKey="Anxiety" fill="#82ca9d" />
                <Bar dataKey="Energy" fill="#82ca9d" />
            </BarChart>
        );
    }
}
