import React from 'react'
import './about.css'
import { Redirect, Link } from 'react-router-dom';
function About() {
  return (
    <div className="body">
       <h4><Link to="/" className="link">Home</Link></h4>
      
        
          <h1>About Dadirri</h1>
          <br></br>
          <img src='./../../images/icon.png' className='icon  mx-auto d-block'></img>
          <br></br>
      
      <div className="row no-gutters">
        <div className="container about-info">
          <p>
            Dadirri, by definition, is an Aboriginal term meaning, “A state of stillness, inner reflection, and deep listening,” and we aim to help our users by providing them a platform in which to do so.
          </p>
          <p>
            Dadirri is aimed towards people who want to track their mental health in an easy to use and helpful manner. To achieve those goals, Dadirri will allow users to log helpful information that the you can use to keep track of your progress.
          </p>
          <p>
            Our goal and wish is that we can help you by providing a secure place to keep track of your progress. Use Dadirri as a secure tool to keep track of through the use of:
            <ul>
              <li>A Daily Dairy</li>
              <li>A Daily Mood Tracker</li>
              <li>An Exercise Tracker</li>
              <li>Tracking your Medications</li>
              <li>Keeping Appointments</li>
            </ul>
            and other useful utilities to help reflect and treat your overall mental wellness!
          </p>
          <p>
            Dadirri Team:
            <ul>
              <li><a href="https://github.com/ralracish">Carlar Blackman</a></li>
              <li><a href="https://github.com/kendallsdavis">Kendall Davis</a></li>
              <li><a href="https://github.com/jlevine84">Jeff Levine</a></li>
              <li><a href="https://github.com/LesleyPond">Lesley Pond</a></li>
              <li><a href="https://github.com/JamilW">Jamil Weeks</a></li>
            </ul>
          </p>
          <p className="centered"><Link to='/'>Begin your wellness journey now!</Link></p>
        </div>
      </div>
    </div>
  )
}

export default About