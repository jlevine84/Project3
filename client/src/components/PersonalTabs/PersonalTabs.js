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
    scraperTab: "active",
    doctorsTab: "",
    medicationsTab: ""
  }

  componentWillMount(){
    this.scrape()
  }

  toggleSwitch = event => {
    event.preventDefault()
    let name = event.target.name
    switch (name) {
      case "scraper":
        this.setState({ scraperTab: "active", doctorsTab: "", medicationsTab: "" })
        break
      case "doctors":
        this.setState({ scraperTab: "", doctorsTab: "active", medicationsTab: "" })
        break
      case "medications":
        this.setState({ scraperTab: "", doctorsTab: "", medicationsTab: "active" })
        break
      default:
        this.setState({ scraperTab: "active", doctorsTab: "", medicationsTab: "" })
    }
  }
  
  scrape = () => {
    API.scrape().then(async response => {
      await this.setState({
        scrape: response.data
      })
    }).catch(err => console.log(err))
  }

  doctors = () => {
    // API call to get Dr Info
  }

  medications = () => {
    // API call to get meds
  }

  addDoctor = drInfo => {

  }

  addMedication = medInfo => {

  }

  render() {
    return (
      <div className="jumbotron">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button className={`nav-link ${this.state.scraperTab}`} name={"scraper"} onClick={this.toggleSwitch}>Active</button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${this.state.doctorsTab}`} name={"doctors"} onClick={this.toggleSwitch}>Link</button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${this.state.medicationsTab}`} name={"medications"} onClick={this.toggleSwitch}>Link</button>
          </li>
        </ul>
        <br/>
        {(this.state.scraperTab === "active") ?
          <Scrape scrape={this.state.scrape}/> : ""
        }
        {(this.state.doctorsTab === "active") ?
          <Doctors/> : ""
        }
        {(this.state.medicationsTab === "active") ?
          <Medications/> : ""
        }
      </div>
    )
  }
}

export default PersonalTabs