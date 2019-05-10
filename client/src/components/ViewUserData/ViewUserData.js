import React from 'react';
import API from '../../utils/API';
import ViewByDateForm from './../../components/viewByDateForm/viewByDateForm';
import './ViewUserData.css';
import SeeUserData from './../seeUserData/seeUserData';


class ViewUserData extends React.Component{

    state = {
        Mood: "",
        Anxiety: "",
        Energy: "",
        MedicineTaken: "",
        Exercise: "",
        SleepHours: "",
        DailyLog: "",
        ExerciseAmount: "",
        Date: ""
    }
    

viewAllData = ()=>{
    console.log("hitting 1st function")
    API.getAll().then(response=>{console.log(response)})
}

viewByDate = ()=>{
    console.log("hitting viewByDate")
 
    API.getByDate(this.props.date).then(response=>{
        console.log(response.data.todaysentry[0])
        if((response.data.todaysentry[0])){
            this.setState({
                Mood: response.data.todaysentry[0].Mood,
                Anxiety: response.data.todaysentry[0].Anxiety,
                Energy: response.data.todaysentry[0].Energy,
                MedicineTaken: response.data.todaysentry[0].MedicineTaken,
                Exercise: response.data.todaysentry[0].Exercise,
                SleepHours: response.data.todaysentry[0].SleepHpurs,
                DailyLog: response.data.todaysentry[0].DailyLog,
                ExerciseAmount: response.data.todaysentry[0].ExerciseAmount,
                Date: response.data.todaysentry[0].Date,
            })
            console.log("the state is: ")
            console.log(this.state)
        }
        else {
            this.setState({
                Mood: "",
                Anxiety: "",
                Energy: "",
                MedicineTaken: "",
                Exercise: "",
                SleepHours: "",
                DailyLog: "",
                ExerciseAmount: "",
                Date: ""
            })
            console.log(this.state)

        }
        
    })
}



    render(){
        
        return(
            <div>
                <h5>Your moods for /data here/</h5>
                <button type="button" onClick={this.viewAllData}>Console Log all your entries!</button>
                
                {this.state.Date && <SeeUserData 
                 mood={this.state.Mood}
                 anxiety={this.state.Anxiety}
                 energy={this.state.Energy}
                 medicineTaken = {this.state.MedicineTaken}
                 exercise={this.state.Exercise}
                 sleepHours = {this.state.SleepHours}
                 dailyLog= {this.state.DailyLog}
                 exerciseAmount = {this.state.ExerciseAmount}
                 date = {this.state.Date}
                 />
                }
                {!this.state.Date && <SeeUserData
                noInfo={"No Info"}
                />}
                
                
            </div>
            
        )
    }
}

export default ViewUserData;