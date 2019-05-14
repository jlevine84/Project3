import React from 'react';
import Slider from '../Slider/Slider'
import Input from '../Input/Input'
import BooleanInput from '../BooleanInput/BooleanInput'
import DropDownInput from './../dropdownInput/DropDownInput';
import API from './../../utils/API';
import './LogUserData.css'
import moment from 'moment'

class LogUserData extends React.Component{

    state = {
        Mood: "5",
        Anxiety: "5",
        Energy: "5",
        MedicineTaken: "false",
        Exercise: "false",
        SleepHours: "0",
        DailyLog: "",
        ExerciseAmount: "",
        logged: false,
        selectedDate: this.props.selectedDate
    }
    
    componentDidMount(){
        API.getByDate(this.props.selectedDate)
        .then(async response=>{
            if (response.data.todaysentry[0]){
                await this.setState({ logged: true })
            } else await this.setState({ logged: false })
        }).catch(err => console.log(err))
    }

    componentWillReceiveProps() {
        API.getByDate(this.props.selectedDate)
        .then(async response=>{
            if (response.data.todaysentry[0]){
                await this.setState({ logged: true })
            } else await this.setState({ 
                    Mood: "5",
                    Anxiety: "5",
                    Energy: "5",
                    MedicineTaken: false,
                    Exercise: false,
                    SleepHours: "0",
                    DailyLog: "",
                    ExerciseAmount: "",
                    logged: false 
                })
        }).catch(err => console.log(err))
    }

    updateValue = async event => {
        let name = event.target.name
        let value = event.target.value
        await this.setState({[name]: value})
    }
    
    submitNewEntry = () => {
        let newEntry = {
            Mood: this.state.Mood,
            Anxiety: this.state.Anxiety,
            Energy: this.state.Energy,
            MedicineTaken: this.state.MedicineTaken,
            Exercise: this.state.Exercise,
            SleepHours: this.state.SleepHours,
            DailyLog: this.state.DailyLog,
            ExerciseAmount: this.state.ExerciseAmount,
            Date: this.props.selectedDate,
            UserID: this.props.userID
        }
    API.createEntry(newEntry)
        .then(async response=>{
            await this.setState({
                logged: true
            })
        })
        .then(() => this.props.prevEntryCallBack())
        .catch(err => console.log(err))
    }
    
    render() {
        const entryDate = moment(this.props.selectedDate, 'YYYYDDMM').format('MMMM Do YYYY')
        return (      
            <div>
                {!this.state.logged && 
                    <div className="jumbotron">
                        <div className="row">
                            <div className="col-sm-12">
                                <h5>New Entry for: {entryDate}</h5>
                            </div>
                        </div>
                        <hr/>
                        <h5>How are you feeling today?</h5>
                        <div className="row">
                            <div className="col-sm-12">
                                <Slider 
                                    name={"Mood"}
                                    display={this.state.Mood}
                                    update={this.updateValue}
                                    defaultValue={this.state.Mood}
                                />
                                <Slider 
                                    name={"Anxiety"}
                                    display={this.state.Anxiety}
                                    update={this.updateValue}
                                    defaultValue={this.state.Anxiety}
                                />
                                <Slider 
                                    name={"Energy"}
                                    display={this.state.Energy}
                                    update={this.updateValue}
                                    defaultValue={this.state.Energy}
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
                                    defaultValue={this.state.SleepHours}
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
                        <h5>Thank you for logging {entryDate}'s data!</h5>
                    </div>
                }
            </div>
        );
    }
}

export default LogUserData;