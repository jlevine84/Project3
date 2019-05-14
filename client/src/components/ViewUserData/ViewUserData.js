import React from 'react';
import './ViewUserData.css';
import moment from 'moment'


function ViewUserData (props) {
        
    const viewDate = moment(props.selectedDate, 'YYYYDDMM').format('MMMM Do YYYY')

    return(
        
        <div className ="jumbotron">
            
            {props.logged  ? 
                <div>
                    <h5>Data for {viewDate}</h5>
                    <p><strong>Mood: </strong>{props.mood}</p>
                    <p><strong>Anxiety: </strong>{props.anxiety}</p>
                    <p><strong>Energy: </strong>{props.energy}</p>
                    <p><strong>Hours Slept: </strong>{props.sleepHours}</p>
                    <p><strong>Medicine Taken: </strong>{props.medicineTaken}</p>
                    <p><strong>Exercised : </strong>{props.exercise}</p>
                    <p><strong>Daily Log: </strong>
                    <br></br>
                    {props.dailyLog}</p>
                    <p><strong>Exercise Details: </strong>
                    <br></br>
                    {props.exerciseAmount}</p>
                </div>
            : 
                <p><strong>No information for the selected date</strong></p>
            }
            
        </div>
        
    )
    
}

export default ViewUserData;