import React from 'react'
import './medications.css'
import API from '../../utils/API'

class Medications extends React.Component {

  state = {
    edit: false,
    userID: this.props.userID,
    name: "",
    dose: "",
    medicationFor: ""
  }

  updateValue = async event => {
    let name = event.target.name
    let value = event.target.value
    await this.setState({[name]: value})
  }

  addMedication = event => {
    event.preventDefault()

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

  // Inputs for name, dose, medicationFor
  // Grab values from names
  // Send to server

  render() {
    return (
      <div className="medications">
        <div className="row">
          <div className="col-sm-12">
            <div className="form-group">
              <p>
                <label>Name: </label>
                <textarea
                  className="form-control"
                  placeholder="Medication Name"
                  name="name"
                  onChange={this.updateValue}
                  rows="1"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="form-group">
              <p>
                <label>Dosage: </label>
                <textarea
                  className="form-control"
                  placeholder="Medication Dosage"
                  name="dose"
                  onChange={this.updateValue}
                  rows="1"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="form-group">
              <p>
                <label>Medication is For: </label>
                <textarea
                  className="form-control"
                  placeholder="Medication is For"
                  name="medicationFor"
                  onChange={this.updateValue}
                  rows="1"
                />
              </p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Medications