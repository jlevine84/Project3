import React from 'react';
import './LandingPage.css'
import LoginForm from '../Auth/LoginForm';
import SignupForm from '../Auth/SignupForm';

class LandingPage extends React.Component{

  dismissModal = ()=>{
      this.props.toggle1()
    }

  dismissSignUpModal = ()=>{
    this.props.toggle2()
  }

  render(){
    return(
      <div className="body">
        <div class="container">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <img src="././images/icon.png" className="img-glow mx-auto d-block"/>
          <h1 className="title">Dadirri</h1>
          <div className="buttonDiv">
            <button type="button" className="btn btn-light signUp" onClick={this.props.toggle1}>Sign In/Sign Up</button>
          </div>

          {/* sign in modal */}
          <div 
            className={`modal fade WelcomeModal ${this.props.showSignInModal ? 'show' : ''}`} 
            style={{ display: `${this.props.showSignInModal ? 'block' : 'none'}`,}}
            id="WelcomeModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            >
          
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <div className="camera-box">
                    <button onClick={this.dismissModal} className="xbutton">x</button>
                    <h5 className="modal-title" id="exampleModalLabel">Login to Dadirri</h5>
                
                  </div>                             
                </div>
                <div className="modal-body">
                  <LoginForm handleSumbit={this.props.handleSubmit} toggle1={this.props.toggle1} toggle2={this.props.toggle2}/>
                </div>
              </div>
            </div>
          </div>

          {/* sign up modal */}
          <div 
            className={`modal fade WelcomeModal ${this.props.showSignUpModal ? 'show' : ''}`} 
            style={{ display: `${this.props.showSignUpModal ? 'block' : 'none'}`, }}
            id="WelcomeModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
          
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <div className="camera-box">
                  <button onClick={this.dismissSignUpModal} className="xbutton">x</button>
                    <h5 className="modal-title" id="exampleModalLabel">Login to Dadirri</h5>
                  
                  </div>                             
                </div>
                <div className="modal-body">
                  <SignupForm handleSumbit={this.props.handleSubmit} toggle1={this.props.toggle1} toggle2={this.props.toggle2} showSignInModal={this.props.showSignInModal}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;

