import React from 'react'
import './MediumCard.css'
import guardianPic from '../../../Assets/Images/guardian.jpeg'
function MediumCard({titleMed,bodyMed,image}) {

  const bgImage ={
    backgroundImage: `url(${image || guardianPic})`,
    backgroundSize: '100% 70%',
    backgroundRepeat:'noRepeat',
    backgroundColor:'#061f48',
  }
  return (
    <div className='backgroundMed' style={bgImage}>
    <div className='contextMed'>
      <div className='titleMed'>{titleMed}</div>
      <p className='bodyMed'>{bodyMed}</p>
    </div>
  </div>
  )
}

export default MediumCard;