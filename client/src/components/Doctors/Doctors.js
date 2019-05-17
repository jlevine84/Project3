import React from 'react'
import './doctors.css'
import API from '../../utils/API'

class Doctors extends React.Component {
  
  state = {
    edit: false
  }

  addDoctors = medInfo => {

  }

  editDoctors = medInfo => {

  }

  removeDoctors = medInfo => {

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
        *Name:
        *Phone Number:
        Address
      <p>Mookie</p>
      </div>
    )
  }
}

export default Doctors