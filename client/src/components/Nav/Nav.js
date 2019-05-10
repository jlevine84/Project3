import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends React.Component {
  // let greeting;

  // if (props.user === null) {
	// 	greeting = <p>Hello guest</p>
	// } else if (props.user.firstName) {
	// 	greeting = (
	// 		<Fragment>
	// 			Welcome back, <strong>{props.user.firstName}</strong>
	// 		</Fragment>
	// 	)
	// } else if (props.user.username) {
	// 	greeting = (
	// 		<Fragment>
	// 			Welcome back, <strong>{props.user.username} </strong>
	// 		</Fragment>
	// 	)
  // }
  render () {
  return (
    <nav class="navbar">
      <img src='././images/icon.png' className="littleicon"></img>
      <h5>Welcome, {this.props.user}!</h5>
      <Link to="/about" className = "navbarlink">About Dadirri</Link>
      <Link to="/dashboard" className="navbarlink">Dashboard</Link>
      <button type="button" className="btn btn-info" onClick = {this.props.logout}>Logout</button>
      {/* <Col size="md-2">
        <Link to="/" className="navbar-brand">Dadirri</Link>
      </Col>
      <Col size="md-7"></Col>
      <Col size="md-3">
        <div className="float-right">
        {greeting} - <Link to="#" className="logout" onClick={props.logout}>Logout</Link>
        </div>
      </Col> */}
    </nav>
  )
    }
};

export default Nav;
