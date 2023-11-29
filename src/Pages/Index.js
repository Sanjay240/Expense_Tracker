/** This is the first page of the website and show nav option and login and register option. */
import React from 'react'
import { Link } from 'react-router-dom'
import indexlogo from '../Images/loginImage.png';
import '../Styles/landingpage.css'

function Index() {
  return (
    <div>
      <div className='navbar-index'>
        <div className='logo-index'>
          <p>Expnese Tracker</p>
        </div>
        <div className='nav-links'>
          <ul className='items'>
              <li>About</li>
              <li>FAQ</li>
              <li>Contact</li>
              <li className='button'><Link to= "/login">Sign IN</Link></li>
          </ul>
        </div>
      </div>
      <div className='main-index'>
        <div className='text-info'>
          <h2>What I learned from tracking my expenses</h2>
          <p>I believed I was well aware of where my money went each month boy was I wrong  but  since I started tracking
            my expenses, I was able to save plenty  of money on a monthly basis.
          </p>
          <div className='button'><Link to="/register">Register now</Link></div>
        </div>
        <div className='logo-pic'>
          <img src= {indexlogo} alt=''></img>
        </div>
      </div>
    </div>
  )
}

export default Index
