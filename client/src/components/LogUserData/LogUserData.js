import React from 'react';
import Slider from '../Slider/Slider'
import Input from '../Input/Input'
import BooleanInput from '../BooleanInput/BooleanInput'
import DropDownInput from './../dropdownInput/DropDownInput';
import Axios from 'axios';
import API from './../../utils/API';
import './LogUserData.css'
import moment from 'moment';
class LogUserData extends React.Component{
    state = {
        Mood: "5",
        Anxiety: "5",
        Energy: "5",
        MedicineTaken: "",
        Exercise: "",
        SleepHours: "0",
        DailyLog: "",
        ExerciseAmount: "",
        logged: false
    }
    
    componentDidMount(){
        API.getByDate(moment(Date.now()).format('MMMM DD YYYY')).then(response=>{
            if (response.data.todaysentry[0]){
                this.setState({
                    logged:true
                })
            }
        
        })
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
        ExerciseAmount: this.state.ExerciseAmount,
        Date: moment(Date.now()).format('MMMM DD YYYY'),
        UserID: this.props.userID
    }
    console.log(newEntry)
    API.createEntry(newEntry)
    .then(response=>{
        console.log(response)
        this.setState({
            logged:true
        })
    })
    }
    
    render() {
    return (
        
        <div>
            {!this.state.logged && 
            <div className="jumbotron">
            <h5>How are you feeling today?</h5>
            <div className="row">
                <div className="col-sm-12">
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
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
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
                    <DropDownInput
                        title={"Hours Slept: "}
                        name="SleepHours"
                        update={this.updateValue}
                    />
                </div>
            </div> 
            <div className="row">
                <div className="col-sm-12">
                    <Input
                        name={"ExerciseAmount"}
                        title={"Exercise Details"}
                        placeholder={"Log your exercise details here"}
                        update={this.updateValue}
                    />
                    <Input
                        name="DailyLog"
                        title={"Daily Log"}
                        placeholder={"Log your thoughts about today here"}
                        update={this.updateValue}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-9"></div>
                <div className="col-sm-3">
                    <button onClick={this.submitNewEntry} className="btn btn-success float">Submit</button>
                </div>
            </div>
            
            </div>
            }
            {this.state.logged &&
            <div className="jumbotron">
            <h5>Thank you for logging today's data!</h5>
            </div>
            }
            
        </div>
        );
    }
}

export default LogUserData;