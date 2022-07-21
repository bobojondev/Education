import React from 'react'

const Status = () => {
  const statusTi = [
    {
      id: 1,
      num: '85+',
      text: 'Teachers'
    },
    {
      id: 2,
      num: '850+',
      text: 'Students'
    },
    {
      id: 3,
      num: '55+',
      text: 'Courses'
    },
    {
      id: 4,
      num: '25+',
      text: 'Country'
    },
  ]
  return (
    <div className='statuses margin'>
      <div className="container">
        <div className="status">
          {
            statusTi.map(statusCard => (
              <div key={statusCard.id} className="status__header">
                <h2 className='status__num'>{statusCard.num}</h2>
                <p className='status__text'>{statusCard.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Status