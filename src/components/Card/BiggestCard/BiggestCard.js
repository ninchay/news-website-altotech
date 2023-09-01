import React from 'react'
import './BiggestCard.css'
import guardianPic from '../../../Assets/Images/guardian.jpeg'

function BiggestCard({title,body,image}) {
  const cardStyle = {
    backgroundImage: `url(${image || guardianPic})`, 
    backgroundSize: '100% 79%',
    backgroundRepeat:'noRepeat',
    backgroundColor:'#061f48',
};


return (
  <div className='backgroundBig' style={cardStyle}>
    <div className='context' >
      <div className='title'>{title}</div>
      <div className='body'>{body}</div>
    </div>
  </div>
)
}

export default BiggestCard