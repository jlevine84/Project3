import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './pages/Auth/LoginForm';
import SignupForm from './pages/Auth/SignupForm';
import Nav from "./components/Nav";
import Books from './pages/Books';
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
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
        { this.state.loggedIn && (
          <div>
            <Nav user={this.state.user} logout={this.logout}/>
            <div className="main-view">
              <Switch>
                <Route exact path="/" component={() => <Books user={this.state.user}/>} />
                <Route exact path="/books" component={() => <Books user={this.state.user}/>} />
                <Route exact path="/books/:id" component={Detail} />
                <Route component={NoMatch} />
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
        )}
			</div>
		)
	}
}

export default App;
