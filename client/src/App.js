import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from "./components/Nav";
import AUTH from './utils/AUTH';
import LandingPage from './pages/Landing/LandingPage';
import { throws } from 'assert';
import Dashboard from './pages/Dashboard/Dashboard';
import About from './pages/About/About';

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
				console.log("logged in")
			}
			else{
				console.log("login failed")
			}
			
    }).catch(error=>{
			console.log(error)
		})
	}

	
	render() {
	
		return (
			<div className="App">
				<Nav user={this.state.user} logout={this.logout}/>
				<Switch>
					<Route exact path="/" component={() => 
					<LandingPage user={this.state.user} toggle1 = {this.toggleModal1} toggle2={this.toggleModal2}
					showSignInModal={this.state.showLogin} login={this.login}
					showSignUpModal={this.state.showSignUp}/>} />
					<Route exact path="/about" component={() => <About user={this.state.user}/>} />
					<Route exact path="/dashboard" component={() => <Dashboard user={this.state.user}/>} />
				</Switch>
				
				{/* User is logged in */}
        { this.state.loggedIn && (
          <div>
              <Switch>
                <Route exact path="/dashboard" component={() => <Dashboard user={this.state.user}/>} />
              </Switch>
          </div>

				)}
				
        {/* { !this.state.loggedIn && (
				 
				 <div>
					 <LandingPage toggle1 = {this.toggleModal1} toggle2={this.toggleModal2}
					showSignInModal={this.state.showLogin} login={this.login}
					showSignUpModal={this.state.showSignUp} 
					/>


          </div>
				)}  */}
			</div>
		)
	}
}

export default App;
