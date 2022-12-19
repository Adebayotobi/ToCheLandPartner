import React from 'react'
import './topbar.css'
import logo from "../../assets/logo.svg"
import { NavLink } from 'react-router-dom'


function Topbar() {

  return (
      <div className='topbar'>
        <img src={logo} alt="" />
        <div>
        <ul>
        <a href="/" className='nav-top' >Home</a>
        <a href="#aboutus" className='nav-top' >About us</a>
        <a href="#service" className='nav-top' >0ur services</a>
        <a href="#contactus" className='nav-top' >Contact us</a>

        </ul>
        </div>
      </div>
  )
}

export default Topbar

