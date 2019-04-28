import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
  let greeting;

  if (props.user === null) {
		greeting = <p>Hello guest</p>
	} else if (props.user.firstName) {
		greeting = (
			<Fragment>
				Welcome back, <strong>{props.user.firstName}</strong>
			</Fragment>
		)
	} else if (props.user.username) {
		greeting = (
			<Fragment>
				Welcome back, <strong>{props.user.username} </strong>
			</Fragment>
		)
  }
  
  return (
    <nav>
      Update Navigation Component
      <Link to="/">To Landing Page Render</Link>
      <Link to="/about">To About Page Render</Link>
      <Link to="/dashboard"> To Dashboard Render</Link>
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
};

export default Nav;
