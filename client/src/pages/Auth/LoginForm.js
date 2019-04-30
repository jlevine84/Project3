import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { Input, FormBtn } from '../../components/Form';


class LoginForm extends Component {
  
    
		state = {
			username: '',
			password: '',
			redirectTo: null
		};
	

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		console.log('handleSubmit');
		this.props.login(this.state.username, this.state.password);
		this.setState({
			redirectTo: '/dashboard'
		});
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (

				<Container>
          <Row>
            
            <Col size="md-12">
             
                <form style={{marginTop: 10}}>
                  <label htmlFor="username">Username: </label>
                  <Input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="password">Password: </label>
                  <Input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <button type="button" onClick={(event) => { this.props.toggle1(); this.props.toggle2();}}>Register</button>
                  <FormBtn onClick={this.handleSubmit}>Login</FormBtn>
                </form>
              
            </Col>
            
          </Row>
				</Container>

			)
		}
	}
}

export default LoginForm;
