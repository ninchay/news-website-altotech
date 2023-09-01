import React from 'react'
import './SmallCard.css'
import guardianPic from '../../../Assets/Images/guardian.jpeg'

function SmallCard({titleSmall, image}) {
  const bgImage ={
    backgroundImage: `url(${image || guardianPic})`,
    backgroundSize: '100% 60%',
    backgroundColor:'#061f48',
  }
  return (
<div className='backgroundSmall' style={bgImage}>
  <div className='contextSmall'>
    <div className='titleSmall'>{titleSmall}</div>
  </div>
</div>
  )
}

export default SmallCard