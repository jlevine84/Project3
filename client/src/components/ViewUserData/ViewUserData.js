import React from 'react';
import API from '../../utils/API';

class ViewUserData extends React.Component{


viewAllData = ()=>{
    console.log("hitting 1st function")
API.getAll().then(response=>{console.log(response)})
}



    render(){
        return(
            <div>
                <h5>Your moods for /data here/</h5>
                <button type="button" onClick={this.viewAllData}>See your data!</button>
            </div>
        )
    }
}

export default ViewUserData;