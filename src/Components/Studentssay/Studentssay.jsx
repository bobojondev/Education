import React from 'react'

const Studentssay = () => {
  return (
    <div className='studentssays margin'>
      <div className="container">
        <div className="studentssay">
          <div className="studentssay__main">
            <div className="studentssay__header">
              <h2 className='studentssay__title'>What Our Students Say</h2>
              <p className='studentssay__text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="studentssay__inputs flexs">
              <input type="email" placeholder='Enter your email...'/>
              <button className="studentssay__btn button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Studentssay