import React from 'react';
import ViewByDateForm from './../../components/viewByDateForm/viewByDateForm';
import './ViewUserData.css';
import SeeUserData from './../seeUserData/seeUserData';


function ViewUserData (props) {
        
    return(
        <div>
            {/* <h5>Your moods for /data here/</h5>
            <button type="button" onClick={this.viewAllData}>Console Log all your entries!</button> */}
            
            {props.date && <SeeUserData 
                mood={props.mood}
                anxiety={props.anxiety}
                energy={props.energy}
                medicineTaken = {props.medicineTaken}
                exercise={props.exercise}
                sleepHours = {props.sleepHours}
                dailyLog= {props.dailyLog}
                exerciseAmount = {props.exerciseAmount}
                date = {props.date}
                />
            }
            {props.selectedDate}
            {!props.Date && <SeeUserData
            noInfo={props.noInfo}
            />}
            
            
        </div>
        
    )
    
}

export default ViewUserData;