import React from 'react'
import './Card.scss'

function Card({img,ability,date}) {
  return (
    <div className='card-container'>
      <h3>kirby of {date} is:</h3>
      <div className='img'>
        <img src={img} />
      </div>
      <div className='ability'>
        <p>{ability} kirby</p>
      </div>
    </div>
  )
}

export default Card