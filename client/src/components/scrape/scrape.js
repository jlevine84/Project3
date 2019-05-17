import React from 'react';
import './scrape.css';
import API from '../../utils/API';

class Scrape extends React.Component{

  state=({
    scrape: []
  })

  componentWillMount(){
   API.scrape().then(response=>{
     console.log("scrape .then")
     this.setState({
       scrape: response.data
     })
     console.log(this.state.scrape)
   })
  }
render(){
    return(
        <div className="jumbotron">
        <h5>Mental Health News</h5>
        <br></br>
        <div>
          {this.state.scrape.map(article=>{
            return(<div>
            <h6>{article.title}</h6>
            <p className="center"><a href={`https://www.sciencedaily.com${article.link}`} target="_blank">Read More</a></p>
            </div>
            )
          })}
        </div>
        </div>
    )
}
}

export default Scrape;