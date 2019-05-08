import React from 'react';
import API from '../../utils/API';

class ViewUserData extends React.Component{

state = {
    Date: "May 08 2019"
}
viewAllData = ()=>{
    console.log("hitting 1st function")
    API.getAll().then(response=>{console.log(response)})
}
viewByDate = ()=>{
    console.log("hitting viewByDate")
   let date = this.state.Date
    API.getByDate(date).then(response=>{
        console.log(response)
    })
}



    render(){
        return(
            <div>
                <h5>Your moods for /data here/</h5>
                <button type="button" onClick={this.viewAllData}>See all your data!</button>
                
                <button type="button" onClick={this.viewByDate}>See today's data!</button>
            </div>
        )
    }
}

export default ViewUserData;