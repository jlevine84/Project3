import React from 'react'
import './personaltabs.css'
import Scrape from '../scrape/scrape'
import Doctors from '../Doctors/Doctors'
import Medications from '../Medications/Medications'

class PersonalTabs extends React.Component {
  state = {

  }

  render() {
    return (
      <div>
        <Scrape/>
        <Doctors/>
        <Medications/>
      </div>
    )
  }
}

export default PersonalTabs