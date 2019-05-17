import React from 'react'
import './personaltabs.css'
import Scrape from '../scrape/scrape'
import Doctors from '../Doctors/Doctors'
import Medications from '../Medications/Medications'
import API from '../../utils/API'

class PersonalTabs extends React.Component {

  state = {
    scrape: [],
    doctors: [],
    medications: [],
    active: "active",
    scrapeToggle: true,
    doctorToggle: false,
    medicationsToggle: false

  }

  componentWillMount(){
    this.scrape()
  }

  toggleSwitch = component => {
    this.setState({ })
  }
  
  scrape = () => {
    API.scrape().then(response => {
      console.log("scrape .then")
      this.setState({
        scrape: response.data
      })
      console.log(this.state.scrape)
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="jumbotron">
        {(this.state.scrapeToggle == true) ?
          <Scrape className={`${this.state.active}`} scrape={this.state.scrape}/> : ""
        }
        {(this.state.doctorsToggle == true) ?
        <Doctors/> : ""
        }
        {(this.state.medicationsToggle == true) ?
        <Medications/> : ""
        }
      </div>
    )
  }
}

export default PersonalTabs