import React from 'react'
import FeatureImg from '../../img/featureImg.png'
import Play from '../../img/play.png'
const Future = () => {
  return (
    <div className='features margin'>
      <div className="container">
        <div className="feature">
          <div className="feature__course">
            <h2 className="feature__title">Find Your Course That Makes Bright Future</h2>
            <p className='feature__item'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at diam magnis faucibus et faucibus gravida.  malesuada fauci bus iaculis eu. Fusce est, consectetur tempor penatibus sed. Ut dolor, vulputate quam nec aliquam aliquam nisl. Auctor eros, iaculis quam nisi, 
            </p>
            <p className="feature__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit euismod fusce sit. 
            </p>
            <button className="feature__button button">Learn More</button>
          </div>
          <div className="feature__video">
              <div className="feature__img">
                <img src={FeatureImg} alt="FeatureImg" />
              </div>
              <div className="feature__play">
                <img src={Play} alt="" />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Future