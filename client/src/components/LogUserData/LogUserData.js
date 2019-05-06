import React from 'react';
import Slider from '../Slider/Slider'
import Input from '../Input/Input'
import BooleanInput from '../BooleanInput/BooleanInput'

class LogUserData extends React.Component{
    state = {
        mood: 3,
        anxiety: 3,
        energy: 3,
        medicineTaken: true,
        exercise: true,
        sleepHours: 0,
        dailyLog: "",
        exerciseAmount: ""
    }
    
    updateValue = event => {
    let name = event.target.name
    let value = event.target.value
    this.setState({[name]: value})
    }
    
    submitNewEntry = () => {
    let newEntry = {
        mood: this.state.mood,
        anxiety: this.state.anxiety,
        energy: this.state.energy,
        medicineTaken: this.state.medicineTaken,
        exercise: this.state.exercise,
        sleepHours: this.state.sleepHours,
        dailyLog: this.state.dailyLog,
        exerciseAmount: this.state.exerciseAmount
    }
    console.log(newEntry)
    }
    
    render() {
    return (
        <div>
            <div className="jumbotron">
                <Slider 
                name={"mood"}
                display={this.state.mood}
                update={this.updateValue}
                />
                <Slider 
                name={"anxiety"}
                display={this.state.anxiety}
                update={this.updateValue}
                />
                <Slider 
                name={"energy"}
                display={this.state.energy}
                update={this.updateValue}
                />
                <BooleanInput
                name={"medicineTaken"}
                update={this.updateValue}
                />
                <BooleanInput
                name={"exercise"}
                update={this.updateValue}
                />
                <Input
                name={"exerciseAmount"}
                update={this.updateValue}
                />
                Insert a drop down list for number of hours slept.
                <Input
                name="dailyLog"
                update={this.updateValue}
                />

            </div>
            <button onClick={this.submitNewEntry} className="btn btn-primary">Submit</button>
        </div>
        );
    }
}

export default LogUserData;