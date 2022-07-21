import React from 'react'
import WorksImg1 from '../../img/works1.png'
import WorksImg2 from '../../img/works2.png'
import WorksImg3 from '../../img/works3.png'
const Works = () => {
  const element = [
    {
      id: 1,
      img: WorksImg1,
      title: '1400+',
      text: 'Online Courses',
    },
    {
      id: 2,
      img: WorksImg2,
      title: '1100+',
      text: 'Expert Instructors',
    },
    {
      id: 3,
      img: WorksImg3,
      title: '800+',
      text: 'Success Stories',
    },
  ]
  return (
    <div className='work margin'>
      <div className="container">
        <div className="works">
          {
            element.map(elm => (
              <div key={elm.id} className='works__courses'>
                <div className="works__logo">
                  <img src={elm.img} alt="worksImg" />
                </div>
                <div className="works__item">
                  <h3 className='works__title'>{elm.title}</h3>
                  <p className='works__text'>{elm.text}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Works