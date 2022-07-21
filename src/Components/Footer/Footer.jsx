import React from 'react'
import Instagram from '../../svg/Instagram'
import Linked from '../../svg/Linked'
import Meta from '../../svg/Meta'
import Twitter from '../../svg/Twitter'
import Next from '../../icons/next.png'
import Icon1 from '../../icons/icon1.png'
import Icon2 from '../../icons/icon2.png'
import Icon3 from '../../icons/icon3.png'
const Footer = () => {

  const link1 = [
    {
      id: 1,
      img: Next,
      text: 'About Us',
    },
    {
      id: 2,
      img: Next,
      text: 'Graduation',
    },
    {
      id: 3,
      img: Next,
      text: 'Scholarship',
    },
    {
      id: 4,
      img: Next,
      text: 'Admissions',
    },
    {
      id: 5,
      img: Next,
      text: 'International',
    },
    {
      id: 6,
      img: Next,
      text: 'Events',
    }
  ]
  const link2 = [
    {
      id: 1,
      img: Next,
      text: 'Language',
    },
    {
      id: 2,
      img: Next,
      text: 'WordPress',
    },
    {
      id: 3,
      img: Next,
      text: 'Privacy',
    },
    {
      id: 4,
      img: Next,
      text: 'FAQs',
    },
    {
      id: 5,
      img: Next,
      text: 'Support',
    },
  ]

  const link3 = [
    {
      id: 1,
      img: Icon1,
      text: '+017 4845 7269'
    },
    {
      id: 2,
      img: Icon2,
      text: 'info@gmail.com'
    },
    {
      id: 3,
      img: Icon3,
      text: 'www.yourdomain.com'
    },
  ]

  return (
    <div className='footeres'>
      <div className="container">
        <div className="footer">
          <div className="footer__main">
            <div className="education">
              <h3 className='education__title footertitle'>Education</h3>
              <p className='education__text'>
                 Lorem ipsum dolor sit amet, consectetur adipis cing elit. Amet, vestibulum euismod nullam the elementum. Urna, posuere nisi sit gravid.
              </p>
              <h3 className='education__title footertitle'>Follow Us</h3>
              <div className="education__socialnetwork">
                <a href='#' className="education__socialnetwork-icon"><Meta /></a>
                <a href='#' className="education__socialnetwork-icon"><Twitter /></a>
                <a href='#' className="education__socialnetwork-icon"><Instagram /></a>
                <a href='#' className="education__socialnetwork-icon"><Linked /></a>
              </div>
            </div>
            <div className="links">
              <h3 className='links__title footertitle'>Feature Links</h3>
              <ul className='links__lists'>
                {
                  link1.map(links1 => (
                    <li key={links1.id} className='links__lists-text'>
                      <a href="#" className='items'>
                        <img className='items__img' src={links1.img} alt="nextImg" />
                        <p className='items__link'>{links1.text}</p>
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="support">
              <h3 className='support__title footertitle'>Support</h3>
              <ul>
                {
                  link2.map(links2 => (
                    <li key={links2.id} className='links__lists-text'>
                      <a href="#" className='items'>
                        <img className='items__img' src={links2.img} alt="nextImg" />
                        <p className='items__link'>{links2.text}</p>
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="contact">
              <h3 className="contact__title footertitle">Contact Us</h3>
              <p className='contact__text'>230,Mirpur Area, Mirpur 10, Dhaka,Bangladesh</p>
              <div className="contact__email">
                  {
                    link3.map(links3 => (
                      <div key={links3.id} className="contact__email-item">
                        <img src={links3.img} alt="emailImg" />
                        <p className='yourdomain'>{links3.text}</p>
                      </div>
                    ))
                  }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer