import React from 'react';
import Slider from '../Slider/Slider'
import Input from '../Input/Input'
import BooleanInput from '../BooleanInput/BooleanInput'
import DropDownInput from './../dropdownInput/DropDownInput';
import Axios from 'axios';
import API from './../../utils/API';
class LogUserData extends React.Component{
    state = {
        Mood: "5",
        Anxiety: "5",
        Energy: "5",
        MedicineTaken: "",
        Exercise: "",
        SleepHours: "0",
        DailyLog: "",
        ExerciseAmount: ""
    }
    
    updateValue = event => {
    let name = event.target.name
    let value = event.target.value
    this.setState({[name]: value})
    console.log(this.state)
    }
    
    
    submitNewEntry = () => {
        console.log("submitting")
    let newEntry = {
        Mood: this.state.Mood,
        Anxiety: this.state.Anxiety,
        Energy: this.state.Energy,
        MedicineTaken: this.state.MedicineTaken,
        Exercise: this.state.Exercise,
        SleepHours: this.state.SleepHours,
        DailyLog: this.state.DailyLog,
        ExerciseAmount: this.state.ExerciseAmount
    }
    API.createEntry(newEntry)
    .then(response=>{
        console.log(response)
    })
    }
    
    render() {
    return (
        <div>
            <div className="jumbotron">
                <Slider 
                name={"Mood"}
                display={this.state.Mood}
                update={this.updateValue}
                />
                <Slider 
                name={"Anxiety"}
                display={this.state.Anxiety}
                update={this.updateValue}
                />
                <Slider 
                name={"Energy"}
                display={this.state.Energy}
                update={this.updateValue}
                />
                <BooleanInput
                name={"MedicineTaken"}
                title={"Medicine Taken"}
                update={this.updateValue}
                />
                <BooleanInput
                name={"Exercise"}
                title={"Exercise"}
                update={this.updateValue}
                />
                <Input
                name={"ExerciseAmount"}
                title={"Exercise Amount"}
                update={this.updateValue}
                />
                <DropDownInput
                title={"Hours Slept: "}
                name="SleepHours"
                update={this.updateValue}
                />
                <Input
                name="DailyLog"
                title={"Daily Log"}
                update={this.updateValue}
                />

            
            <button onClick={this.submitNewEntry} className="btn btn-primary">Submit</button>
            </div>
        </div>
        );
    }
}

export default LogUserData;