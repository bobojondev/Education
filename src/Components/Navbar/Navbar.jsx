import React from 'react'
import NavbarImg from '../../svg/NavbarImg'

const Navbar = () => {


  return (
    <div className='container'>
      <nav className="navbar flexs">
        <div className="navbar__logo">
          <h3>Education</h3>
        </div>
        <div className="navbar__list">
          <ul className='navbar__pages'>
            <li className='navbar__element'>
              <a href="#">Home <span><NavbarImg className='svg-icon' /></span></a>
              <ul className='dropdown'>
                <li className='dropdown__item'>Cousrses</li>
                <li className='dropdown__item'>Education</li>
              </ul>
            </li>
            <li className='navbar__element'>
              <a href="#" >Courses <span><NavbarImg /></span></a>
              <ul className='dropdown'>
                <li className='dropdown__item'>Cousrses</li>
                <li className='dropdown__item'>Education</li>
              </ul>
            </li>
            <li className='navbar__element'>
              <a href="#" >Page <span><NavbarImg /></span></a>
              <ul className='dropdown'>
                <li className='dropdown__item'>Cousrses</li>
                <li className='dropdown__item'>Education</li>
              </ul>
            </li>
            <li className='navbar__element'>
              <a href="#" >Blog <span><NavbarImg /></span></a>
              <ul className='dropdown'>
                <li className='dropdown__item'>Cousrses</li>
                <li className='dropdown__item'>Education</li>
              </ul>
            </li>
            <li className='navbar__element'><a href="#" >Contact</a></li>
          </ul>
        </div>
        <div className="navbar__connection">
          <button className="navbar__connection-signin button">Sign in</button>
          <button className="navbar__connection-signup button">Sign up</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar