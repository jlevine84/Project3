import React from 'react'
import './medications.css'
import API from '../../utils/API'

class Medications extends React.Component {

  state = {
    edit: false,
    logged: null,
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
    let newMedication = {
      name: this.state.name,
      dose: this.state.dose,
      medicationFor: this.state.medicationFor,
      userID: this.state.userID,
      logged: true
    }
    API.addMedication(newMedication).then(async response => {
      await this.setState({
        edit: true
      })
      this.props.getMedications()
    })
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

  render() {
    return (
      <div className="medications">

        {/* Input for a new Medication */}
        <div className="row">
          <div className="col-sm-12">
            <div className="form-group">
              <p>
                <label>Medication Name: </label>
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

        <div className="row">
          <div className="col-sm-12">
            <button className="btn btn-primary" onClick={this.addMedication}>Submit</button>
            <button className="btn btn-secondary">Edit</button>
          </div>
        </div>

      </div>
    )
  }
}

export default Medications