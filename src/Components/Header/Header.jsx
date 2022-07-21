import React from 'react'
import HeaderImg from '../../img/headerImg1.png'
const Header = () => {
  return (
      <div className="header">
        <div className="header__img">
          <img src={HeaderImg} alt="" />
        </div>
        <div className="container">
          <div className="header__title">
            <h1 className="header__self">
              Self-Paced Learning Courses Online
            </h1>
            <p className="header__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam elementum. Urna, posuere nisi sit gravida massa. Ultrices bibendum sagittis pellentesque vitae sit.
            </p>
            <button className="header__button button">Start a coures</button>
          </div>
        </div>
      </div>
  )
}

export default Header