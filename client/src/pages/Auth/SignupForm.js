import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { Input, FormBtn } from '../../components/Form';
import AUTH from '../../utils/AUTH';

class SignupForm extends Component {

	constructor() {
    super();
    
		this.state = {
			email: '',
			password: '',
			confirmPassword: '',
			redirectTo: null
		};
  }
  
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
  }
  
	handleSubmit = (event) => {
		event.preventDefault();
	  this.props.SignUp(this.state.email, this.state.password)
  }
  
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
    }
    
		return (

      <Container>
        <Row>
          
          <Col size="md-12">
            
              <form style={{marginTop: 10}}>
               
                <label htmlFor="email">Email Address: </label>
                <Input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <label htmlFor="password">Password: </label>
                <Input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <Input
                  type="password"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                />
                <button type="button"onClick={(event) => {this.props.toggle1(); this.props.toggle2();}} >Login</button>
                <FormBtn onClick={this.handleSubmit}>Register</FormBtn>
              </form>
            
          </Col>
          
        </Row>
      </Container>

		)
	}
}

export default SignupForm;
