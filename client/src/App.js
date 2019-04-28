import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './pages/Auth/LoginForm';
import SignupForm from './pages/Auth/SignupForm';
import Nav from "./components/Nav";
import AUTH from './utils/AUTH';
import Footer from './components/Footer/Footer'
import Dashboard from './components/Dashboard/Dashboard'


class App extends Component {
  
  constructor() {
    super();
    
		this.state = {
			loggedIn: false,
			user: null
    };
  }
  
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
				{/* User is logged in */}
        { this.state.loggedIn && (
          <div>
            <div className="main-view">
              <Switch>
                <Route exact path="/" component={() => <Dashboard user={this.state.user}/>} />
              </Switch>
            </div>
          </div>
				)}
				{/* User is not logged in */}
        { !this.state.loggedIn && (
          <div className="auth-wrapper" style={{paddingTop:40}}>
            <Route exact path="/" component={() => <LoginForm login={this.login}/>} />
            <Route exact path="/books" component={() => <LoginForm user={this.login}/>} />
            <Route exact path="/signup" component={SignupForm} />
          </div>
				)}
				<Footer/>
			</div>
		)
	}
}

export default App;
