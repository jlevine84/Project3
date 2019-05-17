import React from 'react'
import './medications.css'
import API from '../../utils/API'

class Medications extends React.Component {

  state = {
    edit: false,
    userID: this.props.userID
  }

  addMedication = medInfo => {

  }

  editMedication = medInfo => {

  }

  removeMedication = medInfo => {

  }

  switchToEdit = () => {
    this.setState({ edit: true })   
  }

  switchToView = () => {
    this.setState({ edit: false })
  }

  return(){
    return (
      <div>
        <p><strong></strong></p>
        *Name:
        Dose:
        Medication for:
        <p>Mookie</p>
      </div>
    )
  }
}

export default Medications