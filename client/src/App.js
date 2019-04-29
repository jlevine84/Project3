import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './pages/Auth/LoginForm';
import SignupForm from './pages/Auth/SignupForm';
import Nav from "./components/Nav";
import AUTH from './utils/AUTH';
import LandingPage from './pages/Auth/LandingPage'
import Modal from 'react-responsive-modal';
import { throws } from 'assert';



class App extends Component {
  
  constructor() {
    super();
    
		this.state = {
			loggedIn: false,
			user: null,
			showLogin:false,
			showSignUp: false
    };
	}
	
	toggleModal1 = () => this.setState({
		showLogin: !this.state.showLogin
	})
	toggleModal2 = () => this.setState({
		showSignUp: !this.state.showSignUp
	})
  
	componentDidMount() {
		AUTH.getUser().then(response => {
			console.log(response.data);
			if (!!response.data.user) {
				this.setState({
					loggedIn: true,
					user: response.data.user
				});
			} else {
				this.setState({
					loggedIn: false,
					user: null
				});
			}
		});
	}

	logout = (event) => {
    event.preventDefault();
    
		AUTH.logout().then(response => {
			console.log(response.data);
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				});
			}
		});
	}

	login = (username, password) => {
		AUTH.login(username, password).then(response => {
      console.log(response);
      if (response.status === 200) {
        // update the state
        this.setState({
          loggedIn: true,
          user: response.data.user
        });
      }
    });
	}

	
	render() {
	
		return (
			<div className="App">
				<Nav user={this.state.user} logout={this.logout}/>
				<Switch>
					<Route exact path="/" component={() => <Landing user={this.state.user}/>} />
					<Route exact path="/about" component={() => <About user={this.state.user}/>} />
					<Route exact path="/dashboard" component={() => <Dashboard user={this.state.user}/>} />
				</Switch>
				
				{/* User is logged in */}
        {/* { this.state.loggedIn && (
          <div>
            <div className="">
              <Switch>
                <Route exact path="/" component={() => <Dashboard user={this.state.user}/>} />
              </Switch>
            </div>
          </div>

        )}
        { !this.state.loggedIn && (
				 
				 <div>
					 <LandingPage toggle1 = {this.toggleModal1} toggle2={this.toggleModal2}
					showSignInModal={this.state.showLogin} handlesubmit={this.handleSubmit}
					showSignUpModal={this.state.showSignUp} 
					/>


          </div>
				)} */}
				<Footer/>
			</div>
		)
	}
}

export default App;
