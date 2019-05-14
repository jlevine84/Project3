import React from 'react';
import './ViewUserData.css';


function ViewUserData (props) {
        
    return(
        <div>
            {/* <h5>Your moods for /data here/</h5>
            <button type="button" onClick={this.viewAllData}>Console Log all your entries!</button> */}
            
            {props.logged  ? 
                <div>
                    <h5>Data for {props.date}</h5>
                    <p>Mood: {props.mood}</p>
                    <p>Anxiety: {props.anxiety}</p>
                    <p>Energy: {props.energy}</p>
                    <p>Hours Slept: {props.sleepHours}</p>
                    <p>Medicine Taken: {props.medicineTaken}</p>
                    <p>Exercised : {props.exercise}</p>
                    <p>Daily Log: {props.dailyLog}</p>
                    <p>Exercise Details: {props.exerciseAmount}</p>
                </div>
            : 
                <p>No information for the selected date</p>
            }
            
        </div>
        
    )
    
}

export default ViewUserData;