import React from 'react';
import './scrape.css';
import API from '../../utils/API';

class Scrape extends React.Component{

  componentWillMount(){
   API.scrape().then(response=>{
     console.log("scrape .then")
     console.log(response)
   })
  }
render(){
    return(
        <div className="jumbotron">
        <h5>Mental Health News</h5>
        </div>
    )
}
}

export default Scrape;