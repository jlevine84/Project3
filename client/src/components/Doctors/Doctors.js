import React from 'react'
import './doctors.css'
import API from '../../utils/API'

class Doctors extends React.Component {
  
  state = {
    edit: false,
    logged: null,
    userID: this.props.userID,
    name: "",
    phoneNumber: "",
    streetInfo: "",
    cityStateZip: ""
  }

  updateValue = async event => {
    let name = event.target.name
    let value = event.target.value
    await this.setState({[name]: value})
  }

  addDoctor = event => {
    event.preventDefault()
    let newDoctor = {
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      streetInfo: this.state.streetInfo,
      cityStateZip: this.state.cityStateZip,
      userID: this.state.userID,
      logged: true
    }
    API.addDoctor(newDoctor).then(async response => {
      await this.setState({
        edit: true
      })
      this.props.getDoctors()
    })
  }

  editDoctor = medInfo => {

  }

  removeDoctor = medInfo => {

  }

  switchToEdit = () => {
    this.setState({ edit: true })   
  }

  switchToView = () => {
    this.setState({ edit: false })
  }

  render() {
    return (
      <div className="doctors">

        {/* Input for a new Doctor */}
        <div className="row">
          <div className="col-sm-12">
            <div className="form-group">
              <p>
                <label>Doctor's Name: </label>
                <textarea
                  className="form-control"
                  placeholder="Doctor's Name"
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
                <label>Phone Number: </label>
                <textarea
                  className="form-control"
                  placeholder="Phone Number (XXX-XXX-XXXX)"
                  name="phoneNumber"
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
                <label>Address: </label>
                <textarea
                  className="form-control"
                  placeholder="Street Information"
                  name="streetInfo"
                  onChange={this.updateValue}
                  rows="1"
                />
                <textarea
                  className="form-control"
                  placeholder="City, State Zip Code"
                  name="cityStateZip"
                  onChange={this.updateValue}
                  rows="1"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <button className="btn btn-primary" onClick={this.addDoctor}>Submit</button>
            <button className="btn btn-secondary">Edit</button>
          </div>
        </div>

      </div>
    )
  }
}

export default Doctors